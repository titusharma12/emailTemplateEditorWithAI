import React from 'react'

interface ImagePreviewProps {
 label:string;
 value:string;
 onHandleChangeInput:(value:string)=>void; 
}

const ImagePreview:React.FC<ImagePreviewProps> = ({label,value,onHandleChangeInput}) => {
  return (
    <div className='flex flex-col gap-2'>
        <label htmlFor="">{label}</label>
        <img src={value} alt="Image Preview" className='w-full h-[150px] border rounded-xl object-cover'/>
        <input type="text" value={value} onChange={(e)=>{
            onHandleChangeInput(e.target.value)
        }} className='border p-1.5' />
    </div>
  )
}

export default ImagePreview