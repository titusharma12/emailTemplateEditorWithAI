import React from 'react'

interface TextareaFieldProps {
 label:string;
 value:string;
 onHandleChangeInput:(value:string)=>void; 
  onKeyDown?: (e: React.KeyboardEvent) => void;
}

const TextareaField:React.FC<TextareaFieldProps> = ({label,value,onHandleChangeInput,onKeyDown}) => {
  return (
    <div className='flex flex-col gap-2'>
        <label className='w-full'>{label}</label>
        <textarea className='border resize-none p-2 flex-1' cols={4} rows={4} value={value} onChange={(e)=>{
            onHandleChangeInput(e.target.value)
        }} onKeyDown={onKeyDown}/>
        
    </div>
  )
}

export default TextareaField