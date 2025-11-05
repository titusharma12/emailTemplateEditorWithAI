import { GoogleOAuthProvider } from '@react-oauth/google';
import React, { Children } from 'react'

const Provider = ({children}:any) => {
  return (
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || ''}>

        <div>{children}</div>
    </GoogleOAuthProvider>
  );
}

export default Provider