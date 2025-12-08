"use client";
import { useDragStore, useEmailTemplateStore } from "@/store/Hook";
import React, { useState } from "react";
import ButtonComponent from "../customComponents/ElementComponent/ButtonComponent";
import TextComponent from "../customComponents/ElementComponent/TextComponent";
import ImageComponent from "../customComponents/ElementComponent/ImageComponent";

export const ColumnLayout = ({ layout }: any) => {
  const [dragOver, setDragOver] = useState<any>();
   const {emailTemplate, setEmailTemplate}=useEmailTemplateStore()
    const {DragElementLayout, setDragElementLayout}=useDragStore()

   
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

    }
   
    return element?.type;
  }
  
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
              } ${!layout?.[index]?.type && 'border border-dashed bg-gray-100'} p-2 flex items-center justify-center `}
              onDragOver={(e) => onDragOverHandle(e, index)}
              onDrop={onDropHandle}
            >
             { GetElementComponent(layout[index])??'drag element here'}
            </div>
          )
        )}
      </div>
    </div>
  );
};
