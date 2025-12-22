import Canvas from '@/components/customComponents/Canvas'
import EditorHeader from '@/components/customComponents/EditorHeader'
import ElementSidebar from '@/components/customComponents/ElementSidebar'
import Settings from '@/components/customComponents/Settings'
import React from 'react'

const page = () => {
  return (
    <div className='w-full flex flex-col min-h-0 h-screen'>
        <EditorHeader/>
        <div
        className='grid grid-cols-5 h-full min-h-0 '>
          <ElementSidebar/>
          <div className='bg-gray-100 col-span-3 flex flex-col h-full min-h-0 overflow-auto'>

          <Canvas/>
          </div>
          <Settings/>
        </div>
    </div>
  )
}

export default page