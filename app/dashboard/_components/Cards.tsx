import React from 'react'
import { TEMPLATE } from './TemplateListSection'
import Image from 'next/image'
import Link from 'next/link'

const Cards = (item:TEMPLATE) => {
  return (
    <Link href={`/dashboard/content/${item?.slug}`}>
      <div className=' rounded-lg p-5 card flex flex-col gap-3 cursor-pointer hover:scale-105 transition-all'>
        <Image src={item.icon} width={50} height={50} alt='icon' />
        <h2 className='text-lg font-medium'>{item.name}</h2>
        <p className='text-gray-200 line-clamp-3'>{item.desc}</p>
    </div>
    </Link>
  )
}

export default Cards