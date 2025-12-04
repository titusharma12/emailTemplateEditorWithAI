"use client";
import React, { useState } from "react";

export const ColumnLayout = ({ layout }: any) => {
  const [dragOver, setDragOver] = useState<any>();
  const onDragOverHandle = (e: any, index: number) => {
    console.log(layout, "layout in col");
    e.preventDefault();
    console.log("...col over");
    setDragOver({
      index: index,
      columnId: layout?.dragLayout?.id,
    });
  };

  const onDropHandle = () => {};
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
              } p-2 flex items-center justify-center border border-dashed bg-gray-100`}
              onDragOver={(e) => onDragOverHandle(e, index)}
              onDrop={onDropHandle}
            >
              {index + 1}
            </div>
          )
        )}
      </div>
    </div>
  );
};
