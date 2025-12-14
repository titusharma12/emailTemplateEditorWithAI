'use client'
import { useSelectedElementStore } from '@/store/Hook'
import React, { useEffect, useState } from 'react'
import InputField from './Settings/InputField'


const Settings = () => {
   const {selectedElement, setSelectedElement}=useSelectedElementStore()
   const [element,setElement]=useState<any>()
   useEffect(()=>{
   
    setElement(selectedElement?.layout?.[selectedElement?.index])
   },[selectedElement])

 const onHandleChangeInput = (fieldName:string ,value:string) => {
  console.log('fieldName,value',fieldName,value)
  //Copy the current SelectedElement
  const updatedData ={...selectedElement}
  //Update the specific Field
  updatedData.layout[selectedElement?.index][fieldName]=value
  //Update Original SelectedElement
  setSelectedElement(updatedData)
 }  
  return (
    <div className='p-5'>
      <h2 className='text-xl font-bold'>Settings</h2>
      {
        element?.content && (
         < InputField label={'Content'} value={element?.content} onHandleChangeInput={(value:string)=>{
          onHandleChangeInput('content',value)
         }}/>
        )
      }
    </div>
  )
}

export default Settings