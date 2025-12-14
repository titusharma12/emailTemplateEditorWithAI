"use client";
import { useDragStore, useEmailTemplateStore, useSelectedElementStore,  } from "@/store/Hook";
import React, { useState } from "react";
import ButtonComponent from "../customComponents/ElementComponent/ButtonComponent";
import TextComponent from "../customComponents/ElementComponent/TextComponent";
import ImageComponent from "../customComponents/ElementComponent/ImageComponent";
import LogoComponent from "../customComponents/ElementComponent/LogoComponent";
import DividerComponent from "../customComponents/ElementComponent/DividerComponent";
import LogoHeaderComponent from "../customComponents/ElementComponent/LogoHeaderComponent";
import SocialComponent from "../customComponents/ElementComponent/SocialComponent";
import { ArrowDown, ArrowUp, Trash2Icon, TrashIcon } from "lucide-react";

export const ColumnLayout = ({ layout }: any) => {
  const [dragOver, setDragOver] = useState<any>();
   const {emailTemplate, setEmailTemplate}=useEmailTemplateStore()
    const {DragElementLayout, setDragElementLayout}=useDragStore()
  const {selectedElement, setSelectedElement}=useSelectedElementStore()

   
  const onDragOverHandle = (e: any, index: number) => {
    
    e.preventDefault();
    console.log("...col over");
    setDragOver({
      index: index,
      columnId: layout?.dragLayout?.id,
    });
  };

 

  const onDropHandle = () => {
    const index = dragOver?.index;
    setEmailTemplate((prevItem:any)=>
      prevItem?.map((col:any)=>col?.dragLayout?.id === layout?.dragLayout?.id ? {

  
        ...col,
        [index]: DragElementLayout?.dragLayout?.dragElement
      }:col) 
    )
    setDragOver(null);
  };

  const GetElementComponent = (element: any) => {
    switch (element?.type) {
      case "Button":
        return <ButtonComponent  {...element}/>
      case "Text":
        return <TextComponent  {...element}/>
      case "Image":
        return <ImageComponent  {...element}/> 
      case 'Logo':
        return <LogoComponent  {...element}/> 
      case 'Divider':
        return <DividerComponent  {...element}/> 
      case 'LogoHeader':
        return <LogoHeaderComponent  {...element}/>
      case 'SocialIcons':
        return <SocialComponent  {...element}/>       

    }
   
    return element?.type;
  }


  const handleDeleteLayout = (layoutId:string) => {
    const updateEmailTemplate = emailTemplate.filter((col:any)=>col?.dragLayout?.id !== layoutId);
    setEmailTemplate(updateEmailTemplate)
    setSelectedElement(null)

  }

  const moveItemUp = (layoutId:string) => {
    const index = emailTemplate.findIndex((col:any)=>col?.dragLayout?.id === layoutId);
    if(index > 0){
     setEmailTemplate((prevItem:any)=>{
      const UpdatedItems = [...prevItem];
      [UpdatedItems[index], UpdatedItems[index - 1]] = [UpdatedItems[index - 1], UpdatedItems[index]];
      return UpdatedItems;
     })
    }
  }
  
  const moveItemDown = (layoutId:string) => {
    const index = emailTemplate.findIndex((col:any)=>col?.dragLayout?.id === layoutId);
    if(index < emailTemplate.length - 1){
      setEmailTemplate((prevItem:any)=>{
        const UpdatedItems = [...prevItem];
        [UpdatedItems[index], UpdatedItems[index + 1]] = [UpdatedItems[index + 1], UpdatedItems[index]];
        return UpdatedItems;
       }
      )
    }
  }
  return (
    <div className="relative">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${layout.dragLayout.numOfCol},1fr)`,
          gap: "0px",
        }}
        className={`${selectedElement?.layout?.dragLayout?.id === layout?.dragLayout?.id && 'border border-dashed border-blue-500'}`}
      >
        {Array.from({ length: layout.dragLayout.numOfCol }).map(
          (_, index: number) => (
            <div
              key={index}
              className={`${
                index == dragOver?.index && dragOver?.columnId && "bg-green-100"
              } ${!layout?.[index]?.type && 'border border-dashed bg-gray-100'} ${selectedElement?.layout?.dragLayout?.id === layout?.dragLayout?.id && selectedElement?.index === index && 'border-4 border-blue-500'} p-0 flex items-center justify-center `}
              onDragOver={(e) => onDragOverHandle(e, index)}
              onDrop={onDropHandle}
              onClick={()=>setSelectedElement({layout:layout,index:index})}
            >
             { GetElementComponent(layout[index])??'drag element here'}
            </div>
          )
        )}

        {
          selectedElement?.layout?.dragLayout?.id === layout?.dragLayout?.id && (
             <div className="absolute -right-10 flex flex-col gap-3  " >
              <div className="hover:scale-105 transition-all cursor-pointer hover:shadow-md rounded-full bg-gray-100 p-2" onClick={()=>{
                handleDeleteLayout( layout?.dragLayout?.id)
              }}>

          <Trash2Icon className="w-4 h-4 text-red-500"/>
              </div>
              <div className="hover:scale-105 transition-all cursor-pointer hover:shadow-md rounded-full bg-gray-100 p-2" onClick={()=>{
               moveItemUp ( layout?.dragLayout?.id)
              }}>

          <ArrowUp className="w-4 h-4 "/>
              </div>
              <div className="hover:scale-105 transition-all cursor-pointer hover:shadow-md rounded-full bg-gray-100 p-2" onClick={()=>{
                moveItemDown( layout?.dragLayout?.id)
              }}>

          <ArrowDown className="w-4 h-4 "/>
              </div>
        </div>
          )
        }
       
      </div>
    </div>
  );
};
