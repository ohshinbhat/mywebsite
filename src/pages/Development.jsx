import React from 'react'
import { IconContext } from 'react-icons'
import { TiHtml5 } from "react-icons/ti";
import { TiCss3 } from 'react-icons/ti';
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { SiReactquery } from "react-icons/si";
import { BiLogoTailwindCss } from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { SiVitest } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TbBrandPython } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { TbBrandRedux } from "react-icons/tb";
import { FiFramer} from "react-icons/fi";
import { SiMui } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { SiPrisma } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { SiAdobelightroom } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobepremierepro } from "react-icons/si";
import { SiAdobeaftereffects } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { easeIn, motion } from "framer-motion";

import { FiExternalLink } from "react-icons/fi";
const Development = () => {
  const container = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
       
      }
    }
  };
  
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };
  return (
    <div className=''>
        <div className='flex flex-col gap-20 font-sans2 py-5 text-white'>
            <div className='flex flex-col gap-4 w-full'>
                <div className='px-[30px] sm:px-[75px] text-base md:text-lmd xl:text-lg font-semibold text-center w-full '>Most Recent Projects</div>
                <motion.div id='container' variants={container} initial="hidden" whileInView="visible" viewport={{once:true}} className='  px-[30px] sm:px-[75px] grid-cols-1 md:grid-cols-3 grid justify-center items-center gap-5'>
                    <motion.div id='item' variants={item} className='flex h-full flex-col gap-3 w-full px-10 py-4 rounded-lg bg-mygray backdrop-filter backdrop-blur-lg  text-white font-extralight  border-creme border-[1px] items-center justify-center'>
                        <img src='/Images/proj1.png' className='rounded-xl'/> 
                        <div className='flex flex-row gap-3 justify-center items-center'>
                            <div className='text-sm lg:text-[20px] '>
                                Slot Flow
                            </div> 
                            <IconContext.Provider value={{size: '1.2em'}}>
                                <FiExternalLink />

                            </IconContext.Provider>
                            <IconContext.Provider value={{size: '1.2em'}}>
                                <FaGithub />

                            </IconContext.Provider>
                           
                        </div>
                           
                    </motion.div>    
                    <motion.div id='item' variants={item}  className='flex h-full flex-col gap-3 w-full px-10 py-4 rounded-lg backdrop-filter backdrop-blur-lg bg-mygray text-white font-extralight border-creme border-[1px] items-center justify-center'>
                        <img src='/Images/proj2.png' className='rounded-xl'/> 
                        <div className='flex flex-row gap-3 justify-center items-center'>
                            <div className='text-sm lg:text-[20px]  '>
                                CryptoX
                            </div> 
                            <IconContext.Provider value={{size: '1.2em'}}>
                                <FiExternalLink />

                            </IconContext.Provider>
                            <IconContext.Provider value={{size: '1.2em'}}>
                                <FaGithub />

                            </IconContext.Provider>
                           
                        </div>
                                       

                    </motion.div>    
                    <motion.div id='item' variants={item}  className='flex h-full flex-col gap-3 w-full px-10 py-4 rounded-lg backdrop-filter backdrop-blur-lg bg-mygray text-white font-extralight border-creme border-[1px] items-center justify-center'>
                        <img src='/Images/proj3.png' className='rounded-xl'/> 
                        <div className='flex flex-row gap-3 justify-center items-center'>
                            <div className='text-sm llg:text-[20px] '>
                                Rewire
                            </div> 
                            <IconContext.Provider value={{size: '1.2em'}}>
                                <FiExternalLink />

                            </IconContext.Provider>
                            <IconContext.Provider value={{size: '1.2em'}}>
                                <FaGithub />

                            </IconContext.Provider>
                           
                        </div>   

                    </motion.div>    
                    <motion.div id='item' variants={item} className='flex h-full flex-col gap-3 w-full px-10 py-4 rounded-lg backdrop-filter backdrop-blur-lg bg-mygray text-white font-extralight border-creme border-[1px] items-center justify-center'>
                        <img src='/Images/proj4.png' className='rounded-xl'/> 
                        <div className='flex flex-row gap-3 justify-center items-center'>
                            <div className='text-sm lg:text-[20px] '>
                                Ai Sumarrizer
                            </div> 
                            <IconContext.Provider value={{size: '1.2em'}}>
                                <FiExternalLink />

                            </IconContext.Provider>
                            <IconContext.Provider value={{size: '1.2em'}}>
                                <FaGithub />

                            </IconContext.Provider>
                           
                        </div>

                    </motion.div>     
                    <motion.div id='item' variants={item} className='flex h-full flex-col gap-3 w-full px-10 py-4 rounded-lg backdrop-filter backdrop-blur-lg bg-mygray text-white font-extralight border-creme border-[1px] items-center justify-center'>
                        <img src='/Images/proj5.png' className='rounded-xl'/> 
                        <div className='flex flex-row gap-3 justify-center items-center'>
                            <div className='text-sm lg:text-[20px] '>
                                Skin-Sense
                            </div> 
                            <IconContext.Provider value={{size: '1.2em'}}>
                                <FiExternalLink />

                            </IconContext.Provider>
                            <IconContext.Provider value={{size: '1.2em'}}>
                                <FaGithub />

                            </IconContext.Provider>
                           
                        </div>

                    </motion.div>    
                    <motion.div id='item' variants={item} className='flex h-full flex-col gap-3 w-full px-10 py-4 rounded-lg backdrop-filter backdrop-blur-lg bg-mygray text-white font-extralight shadow-[5px_-5px_1px_rgba(221,_221,_221,_1)] border-creme border-[1px] items-center justify-center'>
                        <img src='/Images/proj6.jpeg' className='rounded-xl'/> 
                        <div className='flex flex-row gap-3 justify-center items-center'>
                            <div className='text-sm lg:text-[20px] '>
                                Telementry Control Unit
                            </div> 
                            <IconContext.Provider value={{size: '1.2em'}}>
                                <FiExternalLink />

                            </IconContext.Provider>
                            <IconContext.Provider value={{size: '1.2em'}}>
                                <FaGithub />

                            </IconContext.Provider>
                           
                        </div>
                    </motion.div>               
                </motion.div>
                <div className='px-[50px] sm:px-[75px] text-sm mob1:text-base md:text-md font-semibold text-center pt-10 '>Tools of the Trade: My Tech Stack</div>
                <div className='px-[50px] sm:px-[75px] text-xs md:text-[16px] pb-12'>These are my go-to frameworks for efficiency and performance, I can also adapt to new tools to cater the needs of clients, ensuring seamless web applications. Tech-Stack vary from project to project. I'm keen on learning new exciting technologies everyday.</div>
                <motion.div id='container' variants={container} initial="hidden" whileInView="visible" viewport={{once:true}} className='px-[30px] sm:px-[75px] grid grid-cols-3 sm:flex sm:flex-row w-full justify-center flex-wrap gap-3 sm:gap-5 md:gap-10 items-center'>
                    <motion.a id='item' variants={item} href='https://developer.mozilla.org/en-US/docs/Web/HTML' target='_blank' className='flex flex-col gap-3 w-[70px] xs:w-[100px] md:w-[150px] px-5 mob1:px-10 py-1 mob1:py-3 rounded-lg bg-opacity-20 backdrop-filter backdrop-blur-lg bg-white text-white font-extralight border-creme border-[1px] items-center justify-center'>
                        <IconContext.Provider value={{size: '3.5em', }}>
                            <TiHtml5/>
                        </IconContext.Provider>
                        <div className='text-xs xs:text-sm '>HTML</div>                        
                    </motion.a>
                    <motion.a id='item' variants={item} href='https://developer.mozilla.org/en-US/docs/Web/CSS' target='_blank' className='flex flex-col gap-3 w-[70px] xs:w-[100px] md:w-[150px] px-5 mob1:px-10 py-1 mob1:py-3 rounded-lg bg-opacity-20 backdrop-filter backdrop-blur-lg bg-white text-white font-extralight border-creme border-[1px] items-center justify-center'>
                        <IconContext.Provider value={{size: '3.5em', }}>
                            <TiCss3/>
                        </IconContext.Provider>
                        <div className='text-xs xs:text-sm '>CSS</div>                        
                    </motion.a>
                    <motion.a id='item' variants={item} href='https://developer.mozilla.org/en-US/docs/Web/JavaScript' target='_blank' className='flex flex-col gap-3 w-[70px] xs:w-[100px] md:w-[150px] px-5 mob1:px-10 py-1 mob1:py-3 rounded-lg bg-opacity-20 backdrop-filter backdrop-blur-lg bg-white text-white font-extralight border-creme border-[1px] items-center justify-center'>
                        <IconContext.Provider value={{size: '3.5em', }}>
                            <TbBrandJavascript/>
                        </IconContext.Provider>
                        <div className='text-xs xs:text-sm '>Javascript</div>                        
                    </motion.a>
                    <motion.a id='item' variants={item} href='https://react.dev' target='_blank' className='flex flex-col gap-3 w-[70px] xs:w-[100px] md:w-[150px] px-5 mob1:px-10 py-1 mob1:py-3 rounded-lg bg-opacity-20 backdrop-filter backdrop-blur-lg bg-white text-white font-extralight border-creme border-[1px] items-center justify-center'>
                        <IconContext.Provider value={{size: '3.5em', }}>
                            <FaReact/>
                        </IconContext.Provider>
                        <div className='text-xs xs:text-sm '>ReactJs</div>                        
                    </motion.a>
                    <motion.a id='item' variants={item} href='https://nextjs.org' target='_blank' className='flex flex-col gap-3 w-[70px] xs:w-[100px] md:w-[150px] px-5 mob1:px-10 py-1 mob1:py-3 rounded-lg bg-opacity-20 backdrop-filter backdrop-blur-lg bg-white text-white font-extralight border-creme border-[1px] items-center justify-center'>
                        <IconContext.Provider value={{size: '3.5em', }}>
                            <TbBrandNextjs/>
                        </IconContext.Provider>
                        <div className='text-xs xs:text-sm '>NextJs</div>                        
                    </motion.a>
                    <motion.a id='item' variants={item} href='https://tailwindcss.com' target='_blank' className='flex flex-col gap-3 w-[70px] xs:w-[100px] md:w-[150px] px-5 mob1:px-10 py-1 mob1:py-3 rounded-lg bg-opacity-20 backdrop-filter backdrop-blur-lg bg-white text-white font-extralight border-creme border-[1px] items-center justify-center'>
                        <IconContext.Provider value={{size: '3.5em', }}>
                            <BiLogoTailwindCss/>
                        </IconContext.Provider>
                        <div className='text-xs xs:text-sm '>Tailwind</div>                        
                    </motion.a>
                    <motion.a id='item' variants={item} href='https://www.typescriptlang.org' target='_blank' className='flex flex-col gap-3 w-[70px] xs:w-[100px] md:w-[150px] px-5 mob1:px-10 py-1 mob1:py-3 rounded-lg bg-opacity-20 backdrop-filter backdrop-blur-lg bg-white text-white font-extralight border-creme border-[1px] items-center justify-center'>
                        <IconContext.Provider value={{size: '3.5em', }}>
                            <BiLogoTypescript/>
                        </IconContext.Provider>
                        <div className='text-xs xs:text-sm '>TypeScript</div>                        
                    </motion.a>
                    <motion.a id='item' variants={item} href='https://redux-toolkit.js.org' target='_blank' className='flex flex-col gap-3 w-[70px] xs:w-[100px] md:w-[150px] px-5 mob1:px-10 py-1 mob1:py-3 rounded-lg bg-opacity-20 backdrop-filter backdrop-blur-lg bg-white text-white font-extralight border-creme border-[1px] items-center justify-center'>
                        <IconContext.Provider value={{size: '3.5em', }}>
                            <TbBrandRedux/>
                        </IconContext.Provider>
                        <div className='text-xs xs:text-sm '>TypeScript</div>                        
                    </motion.a>
                    <motion.a id='item' variants={item} href='https://tanstack.com/query/v4' target='_blank' className='flex flex-col gap-3 w-[70px] xs:w-[100px] md:w-[150px] px-5 mob1:px-10 py-1 mob1:py-3 rounded-lg bg-opacity-20 backdrop-filter backdrop-blur-lg bg-white text-white font-extralight border-creme border-[1px] items-center justify-center'>
                        <IconContext.Provider value={{size: '3.5em', }}>
                            <SiReactquery/>
                        </IconContext.Provider>
                        <div className='text-xs xs:text-sm '>ReactQuery</div>                        
                    </motion.a>
                    <motion.a id='item' variants={item} href='https://dev.java' target='_blank' className='flex flex-col gap-3 w-[70px] xs:w-[100px] md:w-[150px] px-5 mob1:px-10 py-1 mob1:py-3 rounded-lg bg-opacity-20 backdrop-filter backdrop-blur-lg bg-white text-white font-extralight border-creme border-[1px] items-center justify-center'>
                        <IconContext.Provider value={{size: '3.5em', }}>
                            <FaJava/>
                        </IconContext.Provider>
                        <div className='text-xs xs:text-sm '>Java</div>                        
                    </motion.a>
                    <motion.a id='item' variants={item} href='https://www.python.org' target='_blank' className='flex flex-col gap-3 w-[70px] xs:w-[100px] md:w-[150px] px-5 mob1:px-10 py-1 mob1:py-3 rounded-lg bg-opacity-20 backdrop-filter backdrop-blur-lg bg-white text-white font-extralight border-creme border-[1px] items-center justify-center'>
                        <IconContext.Provider value={{size: '3.5em', }}>
                            <TbBrandPython/>
                        </IconContext.Provider>
                        <div className='text-xs xs:text-sm '>Python</div>                        
                    </motion.a>
                    <motion.a id='item' variants={item} href='https://www.mongodb.com' target='_blank' className='flex flex-col gap-3 w-[70px] xs:w-[100px] md:w-[150px] px-5 mob1:px-10 py-1 mob1:py-3 rounded-lg bg-opacity-20 backdrop-filter backdrop-blur-lg bg-white text-white font-extralight border-creme border-[1px] items-center justify-center'>
                        <IconContext.Provider value={{size: '3.5em', }}>
                            <BiLogoMongodb/>
                        </IconContext.Provider>
                        <div className='text-xs xs:text-sm '>MongoDB</div>                        
                    </motion.a>
                    <motion.a id='item' variants={item} href='https://www.prisma.io' target='_blank' className='flex flex-col gap-3 w-[70px] xs:w-[100px] md:w-[150px] px-5 mob1:px-10 py-1 mob1:py-3 rounded-lg bg-opacity-20 backdrop-filter backdrop-blur-lg bg-white text-white font-extralight border-creme border-[1px] items-center justify-center'>
                        <IconContext.Provider value={{size: '3.5em', }}>
                            <SiPrisma />
                        </IconContext.Provider>
                        <div className='text-xs xs:text-sm '>Prisma</div>                        
                    </motion.a>
                    <motion.a id='item' variants={item} href='https://aws.amazon.com' target='_blank' className='flex flex-col gap-3 w-[70px] xs:w-[100px] md:w-[150px] px-5 mob1:px-10 py-1 mob1:py-3 rounded-lg bg-opacity-20 backdrop-filter backdrop-blur-lg bg-white text-white font-extralight border-creme border-[1px] items-center justify-center'>
                        <IconContext.Provider value={{size: '3.5em', }}>
                            <FaAws />
                        </IconContext.Provider>
                        <div className='text-xs xs:text-sm '>AWS</div>                        
                    </motion.a>
                    <motion.a id='item' variants={item} href='https://mui.com' target='_blank' className='flex flex-col gap-3 w-[70px] xs:w-[100px] md:w-[150px] px-5 mob1:px-10 py-1 mob1:py-3 rounded-lg bg-opacity-20 backdrop-filter backdrop-blur-lg bg-white text-white font-extralight border-creme border-[1px] items-center justify-center'>
                        <IconContext.Provider value={{size: '3.5em', }}>
                            <SiMui />
                        </IconContext.Provider>
                        <div className='text-xs xs:text-sm '>MUI</div>                        
                    </motion.a>
                    <motion.a id='item' variants={item} href='www.figma.com' target='_blank' className='flex flex-col gap-3 w-[70px] xs:w-[100px] md:w-[150px] px-5 mob1:px-10 py-1 mob1:py-3 rounded-lg bg-opacity-20 backdrop-filter backdrop-blur-lg bg-white text-white font-extralight border-creme border-[1px] items-center justify-center'>
                        <IconContext.Provider value={{size: '3.5em', }}>
                            <FaFigma />
                        </IconContext.Provider>
                        <div className='text-xs xs:text-sm '>Figma</div>                        
                    </motion.a>
                    <motion.a id='item' variants={item} href='https://vitejs.dev' target='_blank' className='flex flex-col gap-3 w-[70px] xs:w-[100px] md:w-[150px] px-5 mob1:px-10 py-1 mob1:py-3 rounded-lg bg-opacity-20 backdrop-filter backdrop-blur-lg bg-white text-white font-extralight border-creme border-[1px] items-center justify-center'>
                        <IconContext.Provider value={{size: '3.5em', }}>
                            <SiVitest />
                        </IconContext.Provider>
                        <div className='text-xs xs:text-sm '>Vite</div>                        
                    </motion.a>

                    <motion.a id='item' variants={item} href='https://www.framer.com/motion/' target='_blank' className='flex flex-col gap-3 w-[70px] xs:w-[100px] md:w-[150px] px-5 mob1:px-10 py-1 mob1:py-3 rounded-lg bg-opacity-20 backdrop-filter backdrop-blur-lg bg-white text-white font-extralight border-creme border-[1px] items-center justify-center'>
                        <IconContext.Provider value={{size: '3.5em', }}>
                            <FiFramer/>
                        </IconContext.Provider>
                        <div className='text-xs xs:text-sm '>Framer</div>                        
                    </motion.a>
                    <motion.a id='item' variants={item} href='https://github.com' target='_blank' className='flex flex-col gap-3 w-[70px] xs:w-[100px] md:w-[150px] px-5 mob1:px-10 py-1 mob1:py-3 rounded-lg bg-opacity-20 backdrop-filter backdrop-blur-lg bg-white text-white font-extralight border-creme border-[1px] items-center justify-center'>
                        <IconContext.Provider value={{size: '3.5em', }}>
                            <FaGithub />
                        </IconContext.Provider>
                        <div className='text-xs xs:text-sm '>Github</div>                        
                    </motion.a>                    
                </motion.div>
                </div>
              
                
        
           

           

        </div>
    </div>
  )
}

export default Development