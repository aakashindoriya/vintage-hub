import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch } from 'react-redux'
import { getProducts } from './redux/actions/productActions'
import AllRoutes from './routes/AllRoutes'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProducts())
  }, [])
  return (
    <>
      <AllRoutes />
    </>
  )
}

export default App
