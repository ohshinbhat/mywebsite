import React from 'react'
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import FooterDown from '../components/FooterDown';
import { VscFoldDown } from "react-icons/vsc";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IconContext } from 'react-icons';
import { Outlet } from 'react-router-dom';

const Home = () => {

  return (
    <div>
        <div className='bg-black h-screen'>
            <div className='flex flex-col items-center justify-center w-full h-full px-[200px] overflow-hidden '>
                <div className='flex flex-col gap-4 px-[75px] py-[50px] text-white border-2 border-creme rounded-xl shadow-[15px_-15px_1px_rgba(221,_221,_221,_1)]'>
                    <div className='flex flex-row w-full h-full justify-between'>
                        <div className='flex-1 flex flex-col gap-0'>
                            <div className='text-white font-sans2 text-md'>hey, i'm</div>
                            <div className='h-[120px] text-myblue text-xl font-sans1 text-stroke-myyellow text-stroke [text-shadow:7px_7px_1px_rgba(247,_39,_152,_1)]'>Ohshin Bhat</div>

                            <div className='text-mypink text-lg font-sans1 [text-shadow:5px_5px_1px_rgba(87,_31,_245,_1)]'>Developer and Designer</div>
                            <div className='flex flex-row gap-8 pl-5 pt-4'>
                                <a href='' target='_blank'>
                                    <IconContext.Provider value={{size: '2em'}}>
                                        <FaGithub />
                                    </IconContext.Provider>
                                </a>
                                <a href='' target='_blank'>
                                    <IconContext.Provider value={{size: '2em'}}>
                                        <FaLinkedin />
                                    </IconContext.Provider>
                                </a>
                                <a href='' target='_blank'>
                                    <IconContext.Provider value={{size: '2em'}}>
                                        <FaInstagram />
                                    </IconContext.Provider>
                                </a>

                            </div>
                        </div>
                        <div className='flex-[0.4] flex items-start justify-end w-full '>
                            <img src='/Images/profile.png' className='h-[320px]'/>
                        </div>
                    
                    </div>
                    <div className='text-sm font-bold font-sans2 text-myyellow'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Cras tincidunt lobortis feugiat vivamus at. Pulvinar etiam non quam lacus. Lorem ipsum dolor sit amet consectetur adipiscing elit duis. Hac habitasse platea dictumst quisque sagittis purus. Felis bibendum ut tristique et egestas. Mauris vitae ultricies leo integer malesuada nunc. Tempor id eu nisl nunc mi ipsum. At volutpat diam ut venenatis tellus in metus. Eu feugiat pretium nibh ipsum consequat. Neque egestas congue quisque egestas diam in arcu.</div>
                </div>
                <div className='absolute bottom-5'>
                    <a href='#down' >
                        <img src='/Images/scroll.gif' />                 
                    </a>
                    
                </div>
            </div>
        </div>
        <div className='bg-black' id='down'>
            <Navbar />
            <div className='px-[200px] py-[80px]'>
                <div className='px-[75px] py-10 text-white border-2 border-creme rounded-xl shadow-[15px_-15px_1px_rgba(221,_221,_221,_1)]'>
                    <Outlet />
                </div>

            </div>
                
        
                    
         
    
        </div> 
        <div className='px-[100px] bg-black'>
            <FooterDown/>
        </div>

    </div>
    
  )
}

export default Home