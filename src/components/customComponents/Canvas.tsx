'use client'
import { useDeviceStore, useDragStore, useEmailTemplateStore, useSelectedElementStore } from '@/store/Hook';
import React, { use, useEffect, useState } from 'react'
import { ColumnLayout } from '../LayoutElements/ColumnLayout';

const Canvas = () => {
  const { device, setDevice } = useDeviceStore();
   const [userInfo, setUserInfo] = useState<any>(null);
  const {DragElementLayout, setDragElementLayout}=useDragStore()
  const {emailTemplate, setEmailTemplate}=useEmailTemplateStore()
  const {selectedElement, setSelectedElement}=useSelectedElementStore()
  const [dragOver , setDragOver]=useState(false);
  const onDragOver=(e:any)=>{
    e.preventDefault();
    setDragOver(true);
    console.log('...Over')
  }
  const onDropHandle=()=>{
    setDragOver(false);
   
    if(DragElementLayout?.dragLayout){
      setEmailTemplate((prev:any)=>[...prev,DragElementLayout?.dragLayout])
    }
  }
  const getLayoutComponent=(layout:any)=>{
   
   if(layout?.dragLayout?.type==='column'){
    return <ColumnLayout layout={layout}/>
   }
  }


  useEffect(()=>{
    if(typeof window !== 'undefined') {
      const StorageTemplate = JSON.parse(localStorage.getItem('emailTemplate')||'null');
      setEmailTemplate(StorageTemplate||[]);
    }
  },[])

  useEffect(() => {
    if(typeof window !== 'undefined') {
      localStorage.setItem('emailTemplate', JSON.stringify(emailTemplate));
    }
  }, [emailTemplate]);

  // useEffect(()=>{
  //   if(selectedElement){
  //     let updatedEmailTemplate:any=[];
  //     emailTemplate.forEach((item:any,index:number)=>{
  //       if(item?.id===selectedElement?.layout?.id){
  //         updatedEmailTemplate.push(selectedElement?.layout)
  //       }
  //       else{
  //         updatedEmailTemplate.push(item)
  //       }
  //     })
  //     setEmailTemplate(updatedEmailTemplate)

  //   }
  // },[selectedElement])
  useEffect(() => {
  if (!selectedElement) return;

  setEmailTemplate((prev: any[]) =>
    prev.map((item: any) =>
      item?.dragLayout?.id === selectedElement?.layout?.dragLayout?.id
        ? selectedElement.layout
        : item
    )
  );
}, [selectedElement]);



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
                  <div key={index} >
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