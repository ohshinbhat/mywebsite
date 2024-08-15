import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { useNav } from '../context/NavContext'
import { DiCode } from "react-icons/di";
import { IconContext } from 'react-icons';
const Navbar = () => {
    const { navTab, setNavTab} = useNav()

  return (
    <div className='pt-10'>
        <div className='flex flex-row justify-between px-[20px] xs:px-[50px] sm:px-[100px] md:px-[150px] text-[14px] xs:text-sm sm:text-[20px] md:text-md text-myyellow font-sans1 capitalize '>
            <button onClick={(e)=>setNavTab('about')} className={navTab === 'about'?'underline underline-offset-4': ' hover:text-white'}>
                about
            </button>
            <button onClick={(e)=>setNavTab('develop')} className={navTab === 'develop'?'underline underline-offset-4 flex flex-row gap-2 items-center justify-center ': ' hover:text-white flex flex-row gap-2 justify-center items-center'}>
                development
               
            </button>
            <button onClick={(e)=>setNavTab('service')} className={navTab === 'service'?'underline underline-offset-4': ' hover:text-white'}>
                agency
            </button>
            <button onClick={(e)=>setNavTab('contact')} className={navTab === 'contact'?'underline underline-offset-4': ' hover:text-white'}>
                Contact
            </button>

        </div>
    </div>
  )
}

export default Navbar