'use client'
import { Sparkles } from 'lucide-react'
import React, { useState } from 'react'
import AllInputBox from '../customComponents/Settings/AllInputBox'

const CreateAiInterface = () => {
    const [selectedTab, setSelectedTab]=useState<'ai' | 'scratch'>('ai')
   
  return (
    <div
    className='px-10 md:px-28 lg:px-44 xl:px-56 mt-10'
    >
        <div>
            <h2 className='font-bold uppercase text-3xl'>Create new Email Template</h2>
            <p className='text-lg text-gray-400'>Effortlessly design and customize professional AI-powered email templates with ease</p>

            {/* create a tab for ai templates and normal templates */}

            <div className='flex mt-6   p-2 rounded-md'>
                <div 
                className={`pb-2 mr-6 cursor-pointer ${selectedTab==='ai'?'border-b-4 border-purple-600 font-semibold':''}`}
                onClick={()=>{
                    setSelectedTab('ai')
                }}
                >
                    <div className='flex items-center gap-2'>   
                   Create with AI
                    <Sparkles className='w-5 h-5 text-purple-600'/>
                    </div>
                </div>
                <div
                className={`pb-2 mr-6 cursor-pointer ${selectedTab==='scratch'?'border-b-4 border-purple-600 font-semibold':''}`}
                onClick={()=>{
                    setSelectedTab('scratch')
                }}
                >
                    Scratch Templates
                </div>
            </div> 
            <div>
                {selectedTab==='ai' && (
                    <AllInputBox/>
                )}
                </div> 
        </div>
    </div>
  )
}

export default CreateAiInterface