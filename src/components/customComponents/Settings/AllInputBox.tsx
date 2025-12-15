'use client'
import Prompt from '@/components/Data/Prompt'
import { useEmailTemplateStore } from '@/store/Hook'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const AllInputBox = () => {
  const router = useRouter()
   const [userInput, setUserInput]=useState<string>('')
    const [isLoading, setIsLoading]=useState<boolean>(false)
    const {emailTemplate, setEmailTemplate}=useEmailTemplateStore()

const OnGenerate = async () => {
  const PROMPT = `${Prompt.EMAIL_PROMPT}\n${userInput}`;
  setIsLoading(true);

  try {
    const result = await axios.post("/api/ai-email-generate", {
      prompt: PROMPT,
      userEmail: "",
      tId: 0,
    });

    let aiData = result.data.data;

    // 🔥 CLEAN markdown if present
    if (typeof aiData === "string") {
      aiData = aiData
        .replace(/```json/g, "")
        .replace(/```/g, "")
        .trim();
    }

    const parsedTemplate = JSON.parse(aiData);

    console.log("Parsed Template:", parsedTemplate);

    // ✅ STORE CLEAN JSON
    setEmailTemplate(parsedTemplate);

    if(parsedTemplate){
      

      router.push("/editor/1234");
    }

  } catch (error) {
    console.error("Error generating email template:", error);
  } finally {
    setIsLoading(false);
  }
};


  return (
    <div className='mt-5 flex-col flex gap-2'>
      <label htmlFor="" className='text-lg font-sans'>Provide details about the email template you'd like to create</label>
      <textarea
      value={userInput}
      onChange={(e)=>{
        setUserInput(e.target.value)
      }}
       className='w-full text-lg resize-none border border-gray-300 rounded-md p-2 mt-2' rows={5} placeholder='Start writing here...'></textarea>
      <button
       disabled={isLoading || userInput.trim().length===0}
       className={`w-full ${isLoading|| userInput?.trim()?.length===0 ? 'bg-[#7f57f1] opacity-55 cursor-not-allowed':'bg-[#7f57f1] cursor-pointer'}  p-2 text-white rounded-md mt-2  hover:bg-[#6d47e0] transition-colors`}
        onClick={OnGenerate}
       >GENERATE</button>
    </div>
  )
}

export default AllInputBox