import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Home from './pages/Home'

const App = () => {
  const router = createBrowserRouter([
    {
      path : '/',
      element : <Home />,
      
    }
    
    ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
