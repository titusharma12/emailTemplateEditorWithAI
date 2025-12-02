'use client'
import React from 'react'
import Layout from '../Data/Layout'
import ElementCardLayout from './ElementCardLayout'
import ElementList from '../Data/ElementList'
import { useDragStore } from '@/store/Hook'

const ElementSidebar = () => {
  const {DragElementLayout, setDragElementLayout}=useDragStore()

  const onDragLayoutStart = (item:any)=>{
   
    setDragElementLayout({
      dragLayout:{
      ...item,
      id:Date.now()}
    })
  }
  return (
    <div className='p-4 h-screen shadow-sm'>
      <h2 className='text-lg font-bold'>Layouts</h2>
      <div className='grid grid-cols-1 mt-3 md:grid-cols-2 gap-5'>
        {
          Layout.map((item,index)=>(
            <div key={index} draggable onDragStart={()=>{onDragLayoutStart(item)}}>

              <ElementCardLayout layout={item}  />
            </div>
          ))
        }
      </div>
      <h2 className='text-lg font-bold mt-6'>Element</h2>
      <div className='grid grid-cols-1 mt-3 md:grid-cols-2 gap-5'>
        {
          ElementList.map((item,index)=>(
           <ElementCardLayout layout={item} key={index} />
          ))
        }
      </div>

    </div>
  )
}

export default ElementSidebar