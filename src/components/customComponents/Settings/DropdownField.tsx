import React from 'react'

interface DropdownFieldProps {
label:string;
value:string;
options?: string[];
onHandleStyleChange:(value:string)=>void;
}


const DropdownField:React.FC<DropdownFieldProps> = ({label,value,options,onHandleStyleChange}) => {
  return (
    <div className='flex flex-col gap-2'>
        <label htmlFor="">{label}</label>
        <select className='border p-2' value={value} onChange={(e)=>{
             onHandleStyleChange(e.target.value)
        }}>
            {options?.map((option,index)=>(
                <option key={index} value={option}>{option}</option>
            ))
            }
        </select>
    </div>
  )
}

export default DropdownField