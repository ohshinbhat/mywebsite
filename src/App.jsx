import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
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
