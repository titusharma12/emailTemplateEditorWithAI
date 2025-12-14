import React from 'react'

interface TextareaFieldProps {
 label:string;
 value:string;
 onHandleChangeInput:(value:string)=>void; 
}

const TextareaField:React.FC<TextareaFieldProps> = ({label,value,onHandleChangeInput}) => {
  return (
    <div className='flex flex-col gap-2'>
        <label className='w-20'>{label}</label>
        <textarea className='border resize-none p-2 flex-1' cols={4} rows={4} value={value} onChange={(e)=>{
            onHandleChangeInput(e.target.value)
        }}/>
        
    </div>
  )
}

export default TextareaField