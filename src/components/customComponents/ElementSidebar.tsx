import React from 'react'
import Layout from '../Data/Layout'
import ElementCardLayout from './ElementCardLayout'
import ElementList from '../Data/ElementList'

const ElementSidebar = () => {
  return (
    <div className='p-4 h-screen shadow-sm'>
      <h2 className='text-lg font-bold'>Layouts</h2>
      <div className='grid grid-cols-1 mt-3 md:grid-cols-2 gap-5'>
        {
          Layout.map((item,index)=>(
           <ElementCardLayout layout={item} key={index} />
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