'use client'
import { FileClock, Home, Settings, WalletCards } from 'lucide-react'
import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const SideNav = () => {
    const MenuList = [
        {
            name:"Home",
            icon: Home,
            path:"/dashboard",
        },
        {
            name:"History",
            icon: FileClock,
            path:"/dashboard/History",
        },
    
        {
            name:"Settings",
            icon: Settings,
            path:"/dashboard/settings",
        },
    ]
    
    const pathName = usePathname();
  return (
    <div className='h-screen sidebar p-5 shadow-sm border'>
        <div className="flex items-center justify-center">
            <h1 className='text-2xl font-semibold text-center'>AI Content Genrater</h1>
        </div>
        <hr className='my-6 border' />

        <div className='mt-3'>
            {
                MenuList?.map((item) => (
                    <Link href={item.path} className={`p-3 mb-2 items-center flex gap-2 hover:text-white rounded-lg hover:bg-[#1c1f26] cursor-pointer ${pathName === item.path && "bg-[#1c1f26] text-white"}`}>
                        <item.icon className='h-6 w-6' />
                        <h2 className='text-lg'>{item.name}</h2>
                    </Link>
                ))
            }

        </div>

    </div>
  )
}

export default SideNav