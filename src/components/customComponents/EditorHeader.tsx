'use client'
import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import { Code, Monitor, Smartphone } from 'lucide-react'
import { useDeviceStore, useHTMLCodeViewStore } from '@/store/Hook'
import { useRouter } from 'next/navigation'

const EditorHeader = () => {
const { device, setDevice } = useDeviceStore();
const {htmlCodeView, viewHTMLCode}=useHTMLCodeViewStore()
const router = useRouter();

console.log("Current device in EditorHeader:", device);
  return (
    <div className='p-4 shadow-sm flex items-center justify-between'>
        <div className='w-[150px]' >

      <Image src={'/logo.svg'} width={200} height={200} alt='Logo' className='cursor-pointer' onClick={()=>router.push('/')}/>
        </div>
        <div className='flex gap-3'>
            <Button variant={'ghost'} className={`hover:text-[#7f57f1] cursor-pointer ${device==='desktop'&&'bg-[#6d47e0]/10 text-[#7f57f1]'} hover:bg-[#6d47e0]/10`} onClick={()=>{setDevice('desktop')}}><Monitor/>Desktop</Button>
            <Button variant={'ghost'} className={`hover:text-[#7f57f1] cursor-pointer ${device==='mobile'&&'bg-[#6d47e0]/10 text-[#7f57f1]'} hover:bg-[#6d47e0]/10`} onClick={()=>{
              setDevice('mobile')
            }}><Smartphone/>Mobile</Button>
        </div>
        <div className='flex gap-3'>
            <Button variant={'ghost'} className='hover:text-[#7f57f1] cursor-pointer hover:bg-[#6d47e0]/10' 
            onClick={()=>{
              viewHTMLCode(true)
            }}
            ><Code/></Button>
            <Button variant={'outline'}>Send 
            Test Mail
            </Button>
            <Button className='bg-[#7f57f1] hover:bg-[#6d47e0] text-white border-none rounded-md transition-colors'>Save Template</Button>
        </div>

    </div>
  )
}

export default EditorHeader