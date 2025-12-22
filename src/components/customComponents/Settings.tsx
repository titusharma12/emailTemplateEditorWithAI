'use client'
import { useSelectedElementStore } from '@/store/Hook'
import React, { useEffect, useState } from 'react'
import InputField from './Settings/InputField'
import ColorPicker from './Settings/ColorPickerField'
import ColorPickerField from './Settings/ColorPickerField'
import InputStyleField from './Settings/InputStyleField'
import SliderField from './Settings/SliderField'
import TextareaField from './Settings/TextareaField'
import ToggleGroupField from './Settings/ToggleGroupField'
import { TextAlignCenter, TextAlignEnd, TextAlignStart } from 'lucide-react'
import DropdownField from './Settings/DropdownField'
import ImagePreview from './Settings/ImagePreview'


export const TextAlignOptions = [
  { value: 'left', icon: <TextAlignStart size={18} /> },
  { value: 'center', icon: <TextAlignCenter size={18} /> },
  { value: 'right', icon: <TextAlignEnd size={18} /> }
];

export const TextTransformOptions = [
  { value: 'none', icon: <span >Aa</span> },
  { value: 'uppercase', icon: <span className='uppercase'>AA</span> },
  { value: 'lowercase', icon: <span className='lowercase'>aa</span> },
  { value: 'capitalize', icon: <span className='capitalize'>Aa</span> }
];


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
 const onHandleOuterStyleChange  = (fieldName:string ,fieldValue:string) => {
 
  let updateElement={...selectedElement,
    layout:{
      ...selectedElement?.layout,
      [selectedElement?.index]:{
        ...selectedElement?.layout[selectedElement?.index],
        outerStyle:{
          ...selectedElement?.layout[selectedElement?.index]?.outerStyle,
          [fieldName]:fieldValue
        }}
    }
    
  }  
  //Update Original SelectedElement
  setSelectedElement(updateElement)

}
  return (
    <div className='p-5 flex flex-col h-full min-h-0 overflow-auto gap-4'>
      <h2 className='text-xl font-bold'>Settings</h2>
      {
        element?.imageUrl && (
         < ImagePreview label={'Image Preview'} value={element?.imageUrl} onHandleChangeInput={(value:string)=>{
          onHandleChangeInput('imageUrl',value)
         }}/>

        )
      }
      {
        element?.content && (
         < InputField label={'Content'} value={element?.content} onHandleChangeInput={(value:string)=>{
          onHandleChangeInput('content',value)
         }}/>

        )
      }
      {
        element?.textarea && (
         < TextareaField label={'Text Area'} value={element?.textarea} onHandleChangeInput={(value:string)=>{
          onHandleChangeInput('textarea',value)
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
        element?.style?.textAlign &&(
          <ToggleGroupField label={'Text Align'} value={element?.style?.textAlign} options={TextAlignOptions}onHandleStyleChange={(value:string)=>{
            onHandleStyleChange('textAlign',value)
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
        element?.style?.margin &&(
          <InputStyleField label={'Margin'} value={element?.style?.margin} onHandleStyleChange={(value:string)=>{
            onHandleStyleChange('margin',value)
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
       {
        element?.style?.textTransform &&(
          <ToggleGroupField label={'Text Transfrom'} value={element?.style?.textTransform} options={TextTransformOptions}onHandleStyleChange={(value:string)=>{
            onHandleStyleChange('textTransform',value)
          }}/>
        )
      }
       {
        element?.style?.fontWeight &&(
          <DropdownField label={'Font Weight'} value={element?.style?.fontWeight} options={[
  '100', // Thin
  '200', // Extra Light
  '300', // Light
  '400', // Normal
  '500', // Medium
  '600', // Semi Bold
  '700', // Bold
  '800', // Extra Bold
  '900'  // Black
]}
 onHandleStyleChange={(value:string)=>{
            onHandleStyleChange('fontWeight',value)
          }}/>
        )
      }

  {
    element?.outerStyle &&(
 <div>
        <h2 className='font-medium mb-2'>Outer Style</h2>
         {
        element?.outerStyle?.backgroundColor &&(
          <ColorPickerField label={'Background Color'} value={element?.outerStyle?.backgroundColor} onHandleStyleChange={(value:string)=>{ onHandleOuterStyleChange('backgroundColor',value)}}/>
        )
      }
         {
        element?.outerStyle?.justifyContent &&(
          <ToggleGroupField  label={'AlignMent'} options={TextAlignOptions} value={element?.outerStyle?.justifyContent} onHandleStyleChange={(value:string)=>{ onHandleOuterStyleChange('justifyContent',value)}}/>
        )
      }
      </div>
    )
  }
     
     
     
    
      
    </div>
  )
}

export default Settings