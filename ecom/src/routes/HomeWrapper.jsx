import React from 'react'
import { Outlet } from 'react-router-dom'

function HomeWrapper() {
  return (
   <>
   <h1>header</h1>
   <Outlet />
   <h1>footer</h1>
   </>
  )
}

export default HomeWrapper