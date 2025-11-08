'use client';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import React from 'react'
import { Button } from '../ui/button';

const SignupButton = () => {
 
    
const googleLogin = useGoogleLogin({
  onSuccess: async (tokenResponse) => {
    console.log(tokenResponse);
    const userInfo = await axios.get(
      'https://www.googleapis.com/oauth2/v3/userinfo',
      { headers: { Authorization: `Bearer ${tokenResponse.access_token}` } },
    );

    // save in localStorage
    localStorage.setItem('user', JSON.stringify(userInfo.data));

    console.log(userInfo, 'userInfo');
  },
  onError: errorResponse => console.log(errorResponse),
});



  return (

    
  
     <Button 
          className="bg-[#7f57f1] text-white hover:opacity-90 transition-opacity px-6 py-5 text-base"
       onClick={() => googleLogin()} >
          Get Started Free
        </Button>
  )
}

export default SignupButton