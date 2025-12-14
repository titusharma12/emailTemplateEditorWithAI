import React from 'react'
interface InputStyleFieldProps {
  label:string;
  value:string;
  onHandleStyleChange:(value:string)=>void
    type?:string;
}

const InputStyleField:React.FC<InputStyleFieldProps> = ({label,value,onHandleStyleChange,type='px'}) => {
    
  const FormattedValue=(val:string)=>{
    return Number(val.toString().replace(type,''));
  } 
  return (

    <div className='flex flex-col gap-2'>
        <label className=''>{label}</label>
        <div className='flex'>

        <input 
          type='text'
          value={FormattedValue(value)}
          onChange={(e)=>onHandleStyleChange(e.target.value+type)}
            className="border border-gray-500 p-1.5 w-full"
        />
        <h2 className='p-1.5 bg-gray-100 rouned-r-lg -ml-2'>px</h2>
        </div>
    </div>
  )
}

export default InputStyleField