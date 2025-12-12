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
  console.log(selectedElement,'selectedElementselectedElement')
  
  return (
    <div className="">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${layout.dragLayout.numOfCol},1fr)`,
          gap: "0px",
        }}
      >
        {Array.from({ length: layout.dragLayout.numOfCol }).map(
          (_, index: number) => (
            <div
              key={index}
              className={`${
                index == dragOver?.index && dragOver?.columnId && "bg-green-100"
              } ${!layout?.[index]?.type && 'border border-dashed bg-gray-100'} ${selectedElement?.layout?.dragLayout?.id === layout?.dragLayout?.id && selectedElement?.index === index && 'border-2 border-blue-500'} p-2 flex items-center justify-center `}
              onDragOver={(e) => onDragOverHandle(e, index)}
              onDrop={onDropHandle}
              onClick={()=>setSelectedElement({layout:layout,index:index})}
            >
             { GetElementComponent(layout[index])??'drag element here'}
            </div>
          )
        )}
      </div>
    </div>
  );
};
