import React from 'react'

const ElementCardLayout = ({layout}:any) => {
  return (
    <div  className='flex items-center justify-center group hover:shadow-md cursor-pointer hover:border-[#7f57f1] flex-col border border-dashed p-3 rounded-xl'>
              <layout.icon className='p-2 size-9 bg-gray-100 group-hover:text-[#7f57f1] group-hover:bg-purple-100 rounded-full'/>
              <h2 className='text-sm group-hover:text-[#7f57f1]'>{layout.label}</h2>
            </div>
  )
}

export default ElementCardLayout