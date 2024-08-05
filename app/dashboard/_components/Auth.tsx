'use client'
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

const Auth = () => {
    const { user } = useUser();
    const router = useRouter();
  
    useEffect(() => {
      if (user) {
        router.push("/dashboard");
      }
    }, [user, router]);
  return (
   <>
   </>
  )
}

export default Auth