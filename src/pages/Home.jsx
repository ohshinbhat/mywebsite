import React from 'react'
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import FooterDown from '../components/FooterDown';
import { VscFoldDown } from "react-icons/vsc";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IconContext } from 'react-icons';
import { Outlet } from 'react-router-dom';
import TypeIt from "typeit-react";
import { useNav } from '../context/NavContext';
import About from './About';
import Agency from './Agency'
import Contact from './Contact';
import { motion, useTransform } from "framer-motion";
import useMouse from '@react-hook/mouse-position'
import { FaXTwitter } from "react-icons/fa6";
import '../index.css'
import Development from './Development';
import ParallaxText from '../components/ParallaxText';
const Home = () => {
    const { navTab, setNavTab} = useNav()
    const [cursorVariant, setCursorVariant] = useState("default");
    const [cursorText, setCursorText] = useState("");

    const ref = React.useRef(null);
    const mouse = useMouse(ref, {
        enterDelay: 100,
        leaveDelay: 100
    });

    let mouseXPosition = 0;
    let mouseYPosition = 0;

    if (mouse.x !== null) {
        mouseXPosition = mouse.clientX;
    }

    if (mouse.y !== null) {
        mouseYPosition = mouse.clientY;
    }

    const variants = {
        default: {
            opacity: 1,
            height: 60,
            width: 60,
            borderRadius: "50%",  // Circular shape
            background: "conic-gradient(from 135deg at 50% 50%, rgba(255, 255, 127, 0.6), rgba(255, 255, 127, 0.6) 60deg, transparent 90deg, transparent)",  // Quarter-circle effect
            x: mouseXPosition,
            y: mouseYPosition,
            transition: {
                type: "spring",
                mass: 0.6
            }
        },
        project: {
            opacity: 1,
            background: "conic-gradient(from 135deg at 50% 50%, rgba(255, 255, 127, 0.8), rgba(255, 255, 127, 0.8) 0d6eg, transparent 90deg, transparent)",  // Stronger quarter-circle effect
            height: 80,
            width: 80,
            boxShadow: "0 0 50px 50px rgba(255, 255, 127, 0.8)",  // Stronger glow effect
            x: mouseXPosition,
            y: mouseYPosition 
        },
    };
    
    
    

    const spring = {
        type: "spring",
        stiffness: 500,
        damping: 28
    };

    function projectEnter(event) {
        setCursorText("View");
        setCursorVariant("project");
    }

    function projectLeave(event) {
        setCursorText("");
        setCursorVariant("default");
    }

    function contactEnter(event) {
        setCursorText("👋");
        setCursorVariant("contact");
    }

    function contactLeave(event) {
        setCursorText("");
        setCursorVariant("default");
    }

  return (
    <div className=' snap-y snap-mandatory overflow-y-scroll h-screen flex-grow z-0 ' ref={ref}>
        
        <div className='h-screen bg-home bg-center bg-cover' >
            <div  className='flex bg-center bg-cover flex-col items-center justify-center w-full h-full px-[30px] xs:px-[80px] sm:px-[150px] lg:px-[200px] pt-8 xs:pt-12 md:pt-20'>
                <div className=' bg-black flex flex-col flex-wrap w-full sm:gap-10 px-[30px] xs:px-[75px] py-5 xs:py-[50px] text-white border-[1px] sm:border-2 border-creme rounded-xl shadow-[5px_-5px_1px_rgba(221,_221,_221,_1)] sm:shadow-[15px_-15px_1px_rgba(221,_221,_221,_1)]'>
                    <div className='flex flex-col-reverse md:flex-row w-full h-full justify-between gap-5 md:gap-0 flex-wrap'>
                        <div className='flex-1 flex flex-col gap-2 text-center md:text-left'>
                            <div className='text-white font-sans2 text-sm mob1:text-[20px] md:text-base lg:text-md'>hey, i'm</div>
                            <div className='leading-none text-myyellow text-base mob1:text-[36px] xs:text-[50px] lg:text-[60px] xl:text-lg 2xl:text-xl font-sans1 '>Ohshin Bhat</div>
                            <div className='leading-none text-mypink font-sans1 text-[14px] xs:text-sm md:text-[20px] lg:text-[24px] xl:text-base 2xl:text-md '>Front-End Dev and Designer</div>
                            <div className='leading-none text-[10px] sm:text-xs xl:text-sm font-bold font-sans2 text-myblue md:pr-16'>
                                <TypeIt
                                    options={{
                                    strings: ["I am a passionate Front-End developer with a knack for solving complex challenges and crafting creative solutions. I excel at quickly transforming designs into real-world Full Stack projects using cutting-edge technologies and frameworks. Through my freelance web development service, I help clients and companies architect, develop, and implement interactive websites. I love seeing the world from a bird's-eye view of creativity, which drives me to push every project into a piece of art and tell a story through design. As Parell Williams said, 'Creativity without business is Victimization. Business without creativity is waste of f**king time.'"],
                                    speed: 5,
                                    waitUntilVisible: true,
                                    }}
                                />
                            </div>
                            <div className='md:hidden flex flex-row gap-8 pl-5 pt-4 items-center justify-center w-full'>
                                {/*<a href='' target='_blank'>
                                    <IconContext.Provider value={{size: '2em'}}>
                                        <FaXTwitter />
                                    </IconContext.Provider>
                                </a>*/}
                                <a href='https://github.com/ohshinbhat' target='_blank' className=''>
                                    <IconContext.Provider value={{size: '1.2em'}}>
                                        <FaGithub />
                                    </IconContext.Provider>
                                </a>
                                <a href='https://www.linkedin.com/in/ohshinbhat/' target='_blank'>
                                    <IconContext.Provider value={{size: '1.2em'}}>
                                        <FaLinkedin />
                                    </IconContext.Provider>
                                </a>
                                <a href='https://www.instagram.com/ohshiin/' target='_blank'>
                                    <IconContext.Provider value={{size: '1.2em'}}>
                                        <FaInstagram />
                                    </IconContext.Provider>
                                </a>
                                <a href='https://x.com/ohshinbhat' target='_blank'>
                                    <IconContext.Provider value={{size: '1.2em'}}>
                                        <FaXTwitter />
                                    </IconContext.Provider>
                                </a>
                            </div>

                            
                        </div>
                        <div className='flex-[0.4] flex-col flex md:items-start justify-center w-full '>
                            <div className='flex justify-center items-center'>
                                <img src='/Images/profile.png' className='md:w-full h-[150px] sm:h-[300px] md:h-full '/>
                            </div>
                            <div className='hidden md:flex flex-row gap-8 pl-5 pt-4 items-center justify-center w-full'>
                               {/* <a href='' target='_blank'>
                                    <IconContext.Provider value={{size: '2em'}}>
                                        <FaXTwitter />
                                    </IconContext.Provider>
                                </a>*/}
                                <a href='https://github.com/ohshinbhat' target='_blank' className=''>
                                    <IconContext.Provider value={{size: '1.2em'}}>
                                        <FaGithub />
                                    </IconContext.Provider>
                                </a>
                                <a href='https://www.linkedin.com/in/ohshinbhat/' target='_blank'>
                                    <IconContext.Provider value={{size: '1.2em'}}>
                                        <FaLinkedin />
                                    </IconContext.Provider>
                                </a>
                                <a href='https://www.instagram.com/ohshiin/' target='_blank'>
                                    <IconContext.Provider value={{size: '1.2em'}}>
                                        <FaInstagram />
                                    </IconContext.Provider>
                                </a>
                                <a href='https://x.com/ohshinbhat' target='_blank'>
                                    <IconContext.Provider value={{size: '1.2em'}}>
                                        <FaXTwitter />
                                    </IconContext.Provider>
                                </a>

                            </div>
                        </div>
                    
                    </div>
                    
                    
                </div>
                <div className='hidden sm:flex sm:items-center'>
                    <img src='/Images/scroll.gif'/>

                </div>
                
            </div>
        </div>
        {/* scroll ui here 
        <div>
            <ParallaxText baseVelocity={-5}>Developer Designer</ParallaxText>
            <ParallaxText baseVelocity={5}>Marketing Photography</ParallaxText>
        </div>*/}
        <div className='bg-black' >
            <Navbar />
            <div className='px-[30px] xs:px-[50px] sm:px-[100px] md:px-[150px] lg:px-[170px] xl:px-[200px]'>
               
                    <div className=' py-10 text-white '>
                        {navTab === 'about' && <About />}
                        {navTab === 'develop' && <Development/>}
                        {navTab === 'agency' && <Agency/>}
                        {navTab === 'contact' && <Contact />}
                        
                    </div>

                

            </div>
       
                
        
                    
         
    
        </div> 
       

    </div>
  )
}

export default Home;
