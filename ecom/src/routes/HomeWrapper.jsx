import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../component/Footer'
import Header from '../component/Header'

function HomeWrapper({val}) {
  return (
   <>
   {!val && <Header/>}
   <Outlet />
   {!val && <Footer/>}
   </>
  )
}

export default HomeWrapper