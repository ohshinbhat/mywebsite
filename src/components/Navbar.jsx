import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { useNav } from '../context/NavContext'
const Navbar = () => {
    const { navTab, setNavTab} = useNav()

  return (
    <div className='pt-10'>
        <div className='flex flex-row justify-between px-[150px] text-md text-myyellow font-sans1 '>
            <button onClick={(e)=>setNavTab('about')} className={navTab === 'about'?'underline underline-offset-4': ' hover:text-white'}>
                About
            </button>
            <button onClick={(e)=>setNavTab('proj')} className={navTab === 'proj'?'underline underline-offset-4': ' hover:text-white'}>
                Projects
            </button>
            <button onClick={(e)=>setNavTab('service')} className={navTab === 'service'?'underline underline-offset-4': ' hover:text-white'}>
                Services
            </button>
            <button onClick={(e)=>setNavTab('contact')} className={navTab === 'contact'?'underline underline-offset-4': ' hover:text-white'}>
                Contact
            </button>

        </div>
    </div>
  )
}

export default Navbar