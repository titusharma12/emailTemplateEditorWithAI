'use client'
import React, { use, useEffect, useState } from 'react'
import { Button } from '../ui/button'
import SignupButton from './SignupButton'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Header = () => {
  const router = useRouter();
 
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [userInfo, setUserInfo] = useState<any>();

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setUserInfo(user);
    }
  }, []);
  return (
    <div className='flex items-center w-full py-3 px-10  shadow-xs justify-between bg-white'>
      <div className='w-full max-w-lg cursor-pointer'>
        <Image src={'/logo.svg'} width={150} height={150} alt='Logo' className='cursor-pointer object-contain' onClick={()=>router.push('/')}/>
      </div>
      {/* <Button 
        variant={'outline'} 
        size={'lg'} 
        className='bg-[#7f57f1] hover:bg-[#6d47e0] text-white border-none rounded-md transition-colors'
      >
        Get Started
      </Button> */}

      {
        userInfo ? (
          <div className='flex items-center gap-3'>
            <Button 
              variant={'outline'} 
              size={'lg'}
              onClick={()=>{
                router.push('/dashboard');
              }}
              className='bg-[#7f57f1] hover:bg-[#6d47e0] text-white border-none rounded-md transition-colors'
            >
              Dashboard
            </Button>
            <div className='relative' onClick={
              () => setProfileMenuOpen(!profileMenuOpen)
            }>

            <Image 
              width={40} 
              height={40}
              src={JSON.parse(userInfo).picture} 
              alt="User Avatar" 
              unoptimized
              className='w-10 h-10 rounded-full'
            />

            { profileMenuOpen && (
              <div className='absolute top-12 right-0 bg-white shadow-lg rounded-md w-48 py-2 z-10'>
                <div className='px-4 py-2 border-b'>
                  <p className='font-semibold'>{JSON.parse(userInfo).name}</p>
                  <p className='text-sm text-gray-500'>{JSON.parse(userInfo).email}</p>
                </div>
                <button 
                  className='w-full text-left text-red-500 px-4 py-2 hover:bg-red-100'
                  onClick={() => {
                    localStorage.removeItem('user');
                    setProfileMenuOpen(false);
                    setUserInfo(null);
                    
                  }}
                >
                  Logout
                </button>
              </div>
            )}
            </div>
            
          </div>
        ) : <SignupButton/>
      }
      
    </div>
  )
}

export default Header