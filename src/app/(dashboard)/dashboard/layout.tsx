import Header from '@/components/customComponents/Header'
import React from 'react'

const DashboardLayout = ({children}:any) => {
  return (
    <div>
        
        <Header/>
        {children}
        </div>
  )
}

export default DashboardLayout