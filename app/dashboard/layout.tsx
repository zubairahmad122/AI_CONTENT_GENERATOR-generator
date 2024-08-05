import React from 'react'
import SideNav from './_components/SideNav';
import Header from './_components/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const layout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <div className='min-h-screen  '>
        <div className=' hidden md:w-64 md:block fixed'>
            <SideNav />
        </div>
    <div className='md:ml-64'>
        <Header />
        <ToastContainer />
        {
        children
    }</div>
    </div>
  )
}

export default layout