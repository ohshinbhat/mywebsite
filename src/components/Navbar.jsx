import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='pt-10'>
        <div className='flex flex-row justify-between px-[150px] text-md text-myyellow font-sans1 '>
            <Link to='/' className=' hover:text-white focus:underline focus:underline-offset-4' autofocus>
                About
            </Link>
            <Link to='/projects' className='hover:text-white focus:underline focus:underline-offset-4'>
                Projects
            </Link>
            <Link to='/services' className='hover:text-white focus:underline focus:underline-offset-4'>
                Services
            </Link>
            <Link to='/contact' className='hover:text-white focus:underline focus:underline-offset-4'>
                Contact
            </Link>

        </div>
    </div>
  )
}

export default Navbar