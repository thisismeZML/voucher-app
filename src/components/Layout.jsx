import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <main className='flex flex-col min-h-screen py-[20px] font-primary-font'>
        <Header/>
        <Outlet/>
    </main>
  )
}

export default Layout