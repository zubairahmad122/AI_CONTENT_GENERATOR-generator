import { Search } from 'lucide-react'
import React from 'react'

const Header = () => {
  return (
    <div className='p-5 header backdrop-blur-sm flex gap-4 justify-between items-center shadow-sm border-b-2 border-blue-600'>
        <div className="flex bg-[#1c1f26] gap-2 items-center p-2 rounded-md max-w-lg">
            <Search />
            <input type="text" placeholder='Search...' className='outline-none bg-transparent w-full h-full' />
        </div>
        {/* <div><h2 className='text-white text-center rounded-full text-xs px-2 p-1 bg-primary'>🔥 Join Membership just for $9.99/Month</h2></div> */}
    </div>
  )
}

export default Header