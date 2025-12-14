'use client'
import { useSelectedElementStore } from '@/store/Hook'
import React, { useEffect, useState } from 'react'
import InputField from './Settings/InputField'
import ColorPicker from './Settings/ColorPickerField'
import ColorPickerField from './Settings/ColorPickerField'
import InputStyleField from './Settings/InputStyleField'
import SliderField from './Settings/SliderField'


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
  updatedData.layout[selectedElement?.index][fieldName]=value;
  console.log('updatedData',updatedData)
  //Update Original SelectedElement
  setSelectedElement(updatedData)
 }  

 const onHandleStyleChange  = (fieldName:string ,fieldValue:string) => {
 
  let updateElement={...selectedElement,
    layout:{
      ...selectedElement?.layout,
      [selectedElement?.index]:{
        ...selectedElement?.layout[selectedElement?.index],
        style:{
          ...selectedElement?.layout[selectedElement?.index]?.style,
          [fieldName]:fieldValue
        }}
    }
    
  }  
  //Update Original SelectedElement
  setSelectedElement(updateElement)

}
  return (
    <div className='p-5 flex flex-col gap-4'>
      <h2 className='text-xl font-bold'>Settings</h2>
      {
        element?.content && (
         < InputField label={'Content'} value={element?.content} onHandleChangeInput={(value:string)=>{
          onHandleChangeInput('content',value)
         }}/>

        )
      }
       {
        element?.url && (
         < InputField label={'Url'} value={element?.url} onHandleChangeInput={(value:string)=>{
          onHandleChangeInput('url',value)
         }}/>

        )
      }
       {
        element?.style?.width &&(
          <SliderField label={'Width'} type='%' value={element?.style?.width} onHandleStyleChange={(value:string)=>{
            onHandleStyleChange('width',value)
          }}/>
        )
      }
      {
        element?.style?.backgroundColor &&(
          <ColorPickerField label={'Background Color'} value={element?.style?.backgroundColor} onHandleStyleChange={(value:string)=>{ onHandleStyleChange('backgroundColor',value)}}/>
        )
      }
      {
        element?.style?.color &&(
          <ColorPickerField label={'Text Color'} value={element?.style?.color} onHandleStyleChange={(value:string)=>{ onHandleStyleChange('color',value)}}/>
        )
      }
      {
        element?.style?.fontSize &&(
          <InputStyleField label={'Font Size'} value={element?.style?.fontSize} onHandleStyleChange={(value:string)=>{
            onHandleStyleChange('fontSize',value)
          }}/>
        )
      }
      {
        element?.style?.padding &&(
          <InputStyleField label={'Padding'} value={element?.style?.padding} onHandleStyleChange={(value:string)=>{
            onHandleStyleChange('padding',value)
          }}/>
        )
      }
      {
        element?.style?.borderRadius &&(
          <SliderField label={'Border Radius'} value={element?.style?.borderRadius} onHandleStyleChange={(value:string)=>{
            onHandleStyleChange('borderRadius',value)
          }}/>
        )
      }
     
    
      
    </div>
  )
}

export default Settings