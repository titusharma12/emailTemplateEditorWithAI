import React from 'react'
interface ColorPickerFieldProps {
  label:string;
  value:string;
  onHandleStyleChange:(value:string)=>void
}

const ColorPickerField:React.FC<ColorPickerFieldProps> = ({label,value,onHandleStyleChange}) => {
  return (
    <div className='flex flex-col gap-2 '>
      <label className=''>{label}</label>
      <input 
        type='color'
        value={value}
        onChange={(e)=>onHandleStyleChange(e.target.value)}
        
      />
    </div>
  )
}

export default ColorPickerField