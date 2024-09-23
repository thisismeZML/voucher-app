import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

const Layout = () => {
  return (
    <main className='flex flex-col min-h-screen py-[20px] font-primary-font'>
        <Header/>
        <Outlet/>
        <Toaster/>
    </main>
  )
}

export default Layout