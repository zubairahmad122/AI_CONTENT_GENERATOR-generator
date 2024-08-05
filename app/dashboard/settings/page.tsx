
import { UserProfile } from '@clerk/nextjs'
import React from 'react'

const page = () => {
  return (
    <div className='flex items-center h-full my-3 justify-center'>
       <UserProfile routing="hash" />

    </div>
  )
}

export default page