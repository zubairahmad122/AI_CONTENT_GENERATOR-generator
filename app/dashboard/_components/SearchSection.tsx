import { Search } from 'lucide-react'
import React from 'react'

const SearchSection = () => {
  return (
    <div className='p-10 bg-gradient-to-br from-purple-500 via-purple-700 to-blue-600 flex flex-col justify-center items-center gap-2 text-white'>
        <h2 className='text-3xl font-black'>
            Browse All Templates
        </h2>
        <p>What would you like to create today?</p>

        <div className='border rounded-md flex gap-2 items-center bg-white p-2 w-1/2'>
            <Search className='text-primary' />
            <input type="text" placeholder='Search' className='bg-transparent w-full outline-none text-black' />
        </div>
    </div>
  )
}

export default SearchSection