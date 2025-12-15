import { Copy, X } from 'lucide-react';
import React from 'react'

const ViewHTMLDialogbox = ({openDialog, setOpenDialog, htmlCode}: any) => {
  if (!openDialog) return null;


  const CopyCode =()=>{
    navigator.clipboard.writeText(htmlCode);
  }
  
  return (
    <div className='fixed inset-0 bg-black/10 bg-opacity-50 flex items-center justify-center z-50 p-4'>
      <div className='bg-white rounded-lg w-full max-w-xl max-h-[70vh] flex flex-col'>
        {/* Header */}
        <div className='flex items-center justify-between p-4 '>
          <h2 className='text-xl font-bold'>HTML Code</h2>

          <div className='flex gap-2'>

          <Copy className='w-9 h-9 hover:bg-blue-100 hover:text-blue-400  p-2 cursor-pointer bg-gray-100 rounded-lg' onClick={CopyCode}/>
          <button 
            className='p-2 hover:bg-gray-100 rounded-lg transition-colors' 
            onClick={() => setOpenDialog(false)}
            aria-label="Close dialog"
          >
            <X className='w-5 h-5'/>
          </button>
          </div>
        </div>
        
        {/* Content - Scrollable */}
        <div className='flex-1 overflow-y-auto px-4 pb-4'>
          <pre className='bg-gray-100 p-4 rounded-lg whitespace-pre-wrap text-sm'>
            <code>{htmlCode}</code>
          </pre>
        </div>
        
       
      </div>
    </div>
  )
}

export default ViewHTMLDialogbox