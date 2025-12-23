'use client'
import Prompt from '@/components/Data/Prompt'
import { useEmailTemplateStore } from '@/store/Hook'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { Sparkles, Command, Loader2, AlertCircle } from 'lucide-react'

const AllInputBox = () => {
  const router = useRouter()
  const [userInput, setUserInput] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')
  const { emailTemplate, setEmailTemplate } = useEmailTemplateStore()

  const cleanAndParseJSON = (rawData: string): any => {
    console.log("Original length:", rawData.length);
    console.log("First 200 chars:", rawData.substring(0, 200));
    
    let cleaned = rawData;

    // Step 1: Remove any BOM and control characters first
    cleaned = cleaned
      .replace(/^\uFEFF/, '')
      .replace(/[\x00-\x08\x0B-\x0C\x0E-\x1F\x7F]/g, '');

    // Step 2: Remove markdown code blocks (all variations)
    cleaned = cleaned
      .replace(/```json\s*/gi, '')
      .replace(/```\s*/g, '')
      .trim();

    // Step 3: Find the actual JSON boundaries
    const firstBracket = cleaned.indexOf('[');
    const lastBracket = cleaned.lastIndexOf(']');
    
    if (firstBracket === -1 || lastBracket === -1 || firstBracket >= lastBracket) {
      throw new Error("No valid JSON array found in response");
    }

    // Extract only the JSON array
    cleaned = cleaned.substring(firstBracket, lastBracket + 1);
    
    console.log("After extraction - First 200 chars:", cleaned.substring(0, 200));

    // Step 4: Fix common JSON issues
    cleaned = cleaned
      .replace(/,(\s*[}\]])/g, '$1') // Remove trailing commas
      .replace(/\\/g, '\\\\') // Escape backslashes
      .replace(/\\\\"/g, '\\"') // Fix double-escaped quotes
      .replace(/\\\\n/g, '\\n') // Fix newlines
      .replace(/\\\\t/g, '\\t') // Fix tabs
      .replace(/\\\\r/g, '\\r'); // Fix carriage returns

    console.log("After cleaning - First 200 chars:", cleaned.substring(0, 200));

    try {
      return JSON.parse(cleaned);
    } catch (e: any) {
      // If still failing, try one more aggressive cleanup
      console.log("First parse failed, trying aggressive cleanup...");
      
      // Remove any remaining problematic characters
      const veryClean = cleaned
        .replace(/[\u0000-\u001F\u007F-\u009F]/g, '') // Remove all control chars
        .replace(/\n/g, '') // Remove actual newlines
        .replace(/\r/g, '') // Remove carriage returns
        .replace(/\t/g, ''); // Remove tabs
      
      console.log("Very clean - First 200 chars:", veryClean.substring(0, 200));
      
      try {
        return JSON.parse(veryClean);
      } catch (e2: any) {
        console.error("Parse error details:", e2.message);
        throw new Error(`JSON Parse Error: ${e2.message}. Check console for details.`);
      }
    }
  };

  const validateTemplate = (template: any): boolean => {
    if (!Array.isArray(template)) {
      throw new Error('Template must be an array of sections');
    }

    if (template.length === 0) {
      throw new Error('Template cannot be empty');
    }

    let hasValidSection = false;
    let sectionCount = 0;

    for (const section of template) {
      if (section.dragLayout && section.dragLayout.type === 'column') {
        hasValidSection = true;
        sectionCount++;
      }
    }

    if (!hasValidSection) {
      throw new Error('Template must contain at least one valid section with dragLayout');
    }

    console.log(`✓ Template validated: ${sectionCount} sections found`);
    return true;
  };

  const OnGenerate = async () => {
    if (!userInput.trim()) {
      setError('Please enter a description for your email template');
      return;
    }

    const PROMPT = `${Prompt.EMAIL_PROMPT}

User Request: ${userInput}

CRITICAL: Your entire response must be ONLY the JSON array. Start with [ and end with ]. No markdown, no explanations, no text outside the array.`;
    
    setIsLoading(true);
    setError('');
    
    try {
      console.log("Sending request to API...");
      
      const result = await axios.post("/api/ai-email-generate", {
        prompt: PROMPT,
        userEmail: "",
        tId: 0,
      });

      const aiData = result.data.data;

      if (!aiData || typeof aiData !== "string") {
        throw new Error("Invalid response from AI service");
      }

      console.log("✓ Received response from API");
      console.log("Response length:", aiData.length);

      let parsedTemplate;
      try {
        parsedTemplate = cleanAndParseJSON(aiData);
        console.log("✓ Successfully parsed JSON");
      } catch (parseError: any) {
        console.error("❌ JSON Parse Error:", parseError);
        throw new Error(`Failed to parse AI response: ${parseError.message}`);
      }

      validateTemplate(parsedTemplate);
      console.log("✓ Template validated successfully");

      setEmailTemplate(parsedTemplate);
      console.log("✓ Template set in store, navigating to editor...");
      
      router.push("/editor/1234");
      
    } catch (error: any) {
      console.error("❌ Error generating email template:", error);
      
      let errorMessage = "Failed to generate template. Please try again.";
      
      if (error.response) {
        const status = error.response.status;
        const serverMsg = error.response.data?.message || error.response.data?.error;
        errorMessage = `Server error (${status}): ${serverMsg || 'Unknown error'}`;
      } else if (error.message) {
        errorMessage = error.message;
      }
      
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if ( e.key === 'Enter') {
      e.preventDefault();
      if (!isLoading && userInput.trim().length > 0) {
        OnGenerate();
      }
    }
  };

  return (
    <div className='mt-8 flex-col flex gap-4 max-w-4xl mx-auto'>
      <div className='space-y-2'>
        <div className='flex items-center gap-2'>
          <Sparkles className='w-5 h-5 text-purple-600' />
          <label htmlFor="email-input" className='text-xl font-semibold text-gray-900'>
            Describe Your Email Template
          </label>
        </div>
        <p className='text-sm text-gray-500'>
          Tell us what kind of email you want to create. Be specific about style, content, and purpose.
        </p>
      </div>

      <div className='relative'>
        <textarea
          id="email-input"
          value={userInput}
          onChange={(e) => {
            setUserInput(e.target.value);
            setError('');
          }}
          onKeyDown={handleKeyDown}
          className='w-full text-base resize-none border-2 border-gray-200 rounded-xl p-4 mt-2 
                     focus:border-purple-500 focus:ring-4 focus:ring-purple-100 
                     transition-all duration-200 outline-none
                     placeholder:text-gray-400 shadow-sm hover:border-gray-300'
          rows={6}
          placeholder='Example: Create a professional welcome email for new customers with a modern design, company logo, hero image, feature highlights, and a call-to-action button...'
        />
        
        <div className='absolute bottom-4 right-4 flex items-center gap-1.5 
                        bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-200'>
          <Command className='w-3.5 h-3.5 text-gray-500' />
          <span className='text-xs text-gray-600 font-medium'>+ Enter to generate</span>
        </div>
      </div>

      <div className='flex justify-between items-center px-1'>
        <span className='text-xs text-gray-500'>
          {userInput.length} characters
        </span>
        {userInput.trim().length > 0 && userInput.trim().length < 20 && (
          <span className='text-xs text-amber-600 flex items-center gap-1'>
            <AlertCircle className='w-3 h-3' />
            Add more details for better results
          </span>
        )}
      </div>
      
      {error && (
        <div className='flex items-start gap-3 text-red-700 text-sm p-4 bg-red-50 rounded-xl border border-red-200'>
          <AlertCircle className='w-5 h-5 flex-shrink-0 mt-0.5' />
          <div>
            <p className='font-medium'>Generation Failed</p>
            <p className='text-red-600 mt-1'>{error}</p>
            <p className='text-xs text-red-500 mt-2'>Check the browser console for detailed logs.</p>
          </div>
        </div>
      )}
      
      <button
        disabled={isLoading || userInput.trim().length === 0}
        className={`w-full relative overflow-hidden group
          ${isLoading || userInput?.trim()?.length === 0
            ? 'bg-gray-300 cursor-not-allowed'
            : 'bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 cursor-pointer shadow-lg shadow-purple-500/30'
          } 
          p-4 text-white rounded-xl font-semibold text-base
          transition-all duration-300 transform
          ${!isLoading && userInput?.trim()?.length > 0 ? 'hover:scale-[1.02] active:scale-[0.98]' : ''}
          flex items-center justify-center gap-2`}
        onClick={OnGenerate}
      >
        {isLoading ? (
          <>
            <Loader2 className='w-5 h-5 animate-spin' />
            <span>Generating Your Template...</span>
          </>
        ) : (
          <>
            <Sparkles className='w-5 h-5' />
            <span>Generate Email Template</span>
          </>
        )}
        
        {!isLoading && userInput?.trim()?.length > 0 && (
          <div className='absolute inset-0 -translate-x-full group-hover:translate-x-full 
                          transition-transform duration-1000 
                          bg-gradient-to-r from-transparent via-white/20 to-transparent' />
        )}
      </button>

     
    </div>
  )
}

export default AllInputBox