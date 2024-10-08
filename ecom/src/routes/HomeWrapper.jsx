import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../component/product/Header'
import Footer from '../component/Footer'

function HomeWrapper() {
  return (
   <>
   <Header/>
   <Outlet />
   <Footer/>
   </>
  )
}

export default HomeWrapper