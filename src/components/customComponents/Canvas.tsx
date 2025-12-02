'use client'
import { useDeviceStore, useDragStore, useEmailTemplateStore } from '@/store/Hook';
import React, { useState } from 'react'

const Canvas = () => {
  const { device, setDevice } = useDeviceStore();
  const {DragElementLayout, setDragElementLayout}=useDragStore()
  const {emailTemplate, setEmailTemplate}=useEmailTemplateStore()
  const [dragOver , setDragOver]=useState(false);
  const onDragOver=(e:any)=>{
    e.preventDefault();
    setDragOver(true);
    console.log('...Over')
  }
  const onDropHandle=()=>{
    setDragOver(false);
    console.log('dropped', DragElementLayout?.dragLayout);
    if(DragElementLayout?.dragLayout){
      setEmailTemplate((prev:any)=>[...prev,DragElementLayout?.dragLayout])
    }
  }
  const getLayoutComponent=(layout:any)=>{
    const LayoutType=layout.type;
    switch(LayoutType){
      case 'single-column':
        return (
          <div className='w-full'>
            <div className='w-full border p-4'>
              Single Column Layout - ID: {layout.id}
            </div>
          </div>
        );}
  }
  return (
    <div className='mt-20 flex justify-center'>
        <div className={`w-full  p-6  ${dragOver ? 'bg-purple-100 p-4': 'bg-white'}  ${device==='desktop'?'max-w-2xl':'max-w-md'}`}
        onDragOver={onDragOver}
        onDrop={onDropHandle}
        >
          <div>


            {
              emailTemplate?.length>0?(
                emailTemplate?.map((item:any,index:number)=>(
                  <div key={index} className='border mb-4 p-2'>
                   { getLayoutComponent(item)}
                    </div>
                ))):(
                  <div className='text-center bg-gray-100 p-4 border-2 border-dashed'>
                   Add Layout Here
                  </div>
                )
            }
          </div>

        </div>
    </div>
  )
}

export default Canvas