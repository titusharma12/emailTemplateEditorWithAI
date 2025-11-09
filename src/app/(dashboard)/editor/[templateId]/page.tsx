import Canvas from '@/components/customComponents/Canvas'
import EditorHeader from '@/components/customComponents/EditorHeader'
import ElementSidebar from '@/components/customComponents/ElementSidebar'
import Settings from '@/components/customComponents/Settings'
import React from 'react'

const page = () => {
  return (
    <div>
        <EditorHeader/>
        <div
        className='grid grid-cols-5'>
          <ElementSidebar/>
          <div className='bg-gray-100 col-span-3'>

          <Canvas/>
          </div>
          <Settings/>
        </div>
    </div>
  )
}

export default page