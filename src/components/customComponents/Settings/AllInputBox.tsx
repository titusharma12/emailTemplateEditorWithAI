'use client'
import Prompt from '@/components/Data/Prompt'
import { useEmailTemplateStore } from '@/store/Hook'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const AllInputBox = () => {
  const router = useRouter()
  const [userInput, setUserInput] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')
  const { emailTemplate, setEmailTemplate } = useEmailTemplateStore()

  const OnGenerate = async () => {
    const PROMPT = `${Prompt.EMAIL_PROMPT}\n${userInput}`;
    setIsLoading(true);
    setError('');
    
    try {
      const result = await axios.post("/api/ai-email-generate", {
        prompt: PROMPT,
        userEmail: "",
        tId: 0,
      });

      let aiData = result.data.data;

      // Clean markdown formatting
      if (typeof aiData === "string") {
        aiData = aiData
          .replace(/```json\s*/g, "")
          .replace(/```\s*/g, "")
          .trim();
      }

      console.log("Raw AI Data:", aiData);

      // Try parsing with better error handling
      let parsedTemplate;
      try {
        parsedTemplate = JSON.parse(aiData);
      } catch (parseError) {
        console.error("JSON Parse Error:", parseError);
        console.error("Problematic JSON string:", aiData);
        
        // Try to fix common JSON issues
        try {
          // Remove any trailing commas before } or ]
          let fixedData = aiData
            .replace(/,(\s*[}\]])/g, '$1')
            // Escape unescaped quotes in strings (basic attempt)
            .replace(/([^\\])"/g, '$1\\"')
            // Remove any control characters
            .replace(/[\x00-\x1F\x7F]/g, '');
          
          parsedTemplate = JSON.parse(fixedData);
          console.log("Fixed and parsed successfully");
        } catch (secondError) {
          throw new Error("Failed to parse AI response. Please try again or rephrase your request.");
        }
      }

      console.log("Parsed Template:", parsedTemplate);

      // Validate the parsed template has required structure
      if (!parsedTemplate || typeof parsedTemplate !== 'object') {
        throw new Error("Invalid template structure received");
      }

      setEmailTemplate(parsedTemplate);
      router.push("/editor/1234");
      
    } catch (error: any) {
      console.error("Error generating email template:", error);
      setError(error.message || "Failed to generate template. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='mt-5 flex-col flex gap-2'>
      <label htmlFor="" className='text-lg font-sans'>
        Provide details about the email template you'd like to create
      </label>
      <textarea
        value={userInput}
        onChange={(e) => {
          setUserInput(e.target.value);
          setError(''); // Clear error on input change
        }}
        onKeyDown={(e) => {
          // Trigger generate on Ctrl+Enter or Cmd+Enter
          if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
            e.preventDefault();
            if (!isLoading && userInput.trim().length > 0) {
              OnGenerate();
            }
          }
        }}
        className='w-full text-lg resize-none border border-gray-300 rounded-md p-2 mt-2'
        rows={5}
        placeholder='Start writing here... (Press Ctrl+Enter to generate)'
      />
      
      {error && (
        <div className='text-red-600 text-sm p-2 bg-red-50 rounded-md'>
          {error}
        </div>
      )}
      
      <button
        disabled={isLoading || userInput.trim().length === 0}
        className={`w-full ${
          isLoading || userInput?.trim()?.length === 0
            ? 'bg-[#7f57f1] opacity-55 cursor-not-allowed'
            : 'bg-[#7f57f1] cursor-pointer'
        } p-2 text-white rounded-md mt-2 hover:bg-[#6d47e0] transition-colors`}
        onClick={OnGenerate}
      >
        {isLoading ? 'GENERATING...' : 'GENERATE'}
      </button>
    </div>
  )
}

export default AllInputBox