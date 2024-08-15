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
import { inView } from 'framer-motion';
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
                <div className='px-[50px] sm:px-[75px] text-base mob1:text-mg md:text-lg font-semibold text-center w-full '>Most Recent Projects</div>
                <motion.div id='container' variants={container} initial="hidden" whileInView="visible" viewport={{once:true}} className='  px-[30px] sm:px-[75px] grid-cols-2 grid justify-center items-center gap-5 md:gap-10'>
                    <motion.a id='item' variants={item} href='' target='_blank' className='flex h-full flex-col gap-3 w-full px-10 py-4 rounded-lg bg-opacity-20 backdrop-filter backdrop-blur-lg bg-white text-white font-extralight border-creme border-[1px] items-center justify-center'>
                        <img src='/Images/proj1.png' className='rounded-xl'/> 
                        <div className='flex flex-row gap-3 justify-center items-center'>
                            <div className='text-sm xs:text-base '>
                                Slot Flow
                            </div> 
                            <IconContext.Provider value={{size: '1.2em'}}>
                                <FiExternalLink />

                            </IconContext.Provider>
                            <IconContext.Provider value={{size: '1.2em'}}>
                                <FaGithub />

                            </IconContext.Provider>
                           
                        </div>
                           
                        <div className='text-xs text-justify'>Simplify client communications with our call booking app designed for agencies and consultants. Easily schedule, manage, and track calls, ensuring you stay organized and focused on delivering results.</div>                    
                    </motion.a>
                    <motion.a id='item' variants={item} href='' target='_blank' className='flex h-full flex-col gap-3 w-full px-10 py-4 rounded-lg bg-opacity-20 backdrop-filter backdrop-blur-lg bg-white text-white font-extralight border-creme border-[1px] items-center justify-center'>
                        <img src='/Images/proj2.png' className='rounded-xl'/> 
                        <div className='flex flex-row gap-3 justify-center items-center'>
                            <div className='text-sm xs:text-base '>
                                CryptoX
                            </div> 
                            <IconContext.Provider value={{size: '1.2em'}}>
                                <FiExternalLink />

                            </IconContext.Provider>
                            <IconContext.Provider value={{size: '1.2em'}}>
                                <FaGithub />

                            </IconContext.Provider>
                           
                        </div>
                        <div className='text-xs text-justify'>At cryptoX, it’s more than just buying/selling digital currencies - it’s about being a part
                        of something bigger. We provide you with live coin tracking with currency exchanges.</div>                    

                    </motion.a>
                    <motion.a id='item' variants={item} href='' target='_blank' className='flex h-full flex-col gap-3 w-full px-10 py-4 rounded-lg bg-opacity-20 backdrop-filter backdrop-blur-lg bg-white text-white font-extralight border-creme border-[1px] items-center justify-center'>
                        <img src='/Images/proj3.png' className='rounded-xl'/> 
                        <div className='flex flex-row gap-3 justify-center items-center'>
                            <div className='text-sm xs:text-base '>
                                Rewire
                            </div> 
                            <IconContext.Provider value={{size: '1.2em'}}>
                                <FiExternalLink />

                            </IconContext.Provider>
                            <IconContext.Provider value={{size: '1.2em'}}>
                                <FaGithub />

                            </IconContext.Provider>
                           
                        </div>   
                        <div className='text-xs text-justify'>Rewire is a brain training app that uses games to help you improve your cognitive function. The games are designed to challenge your attention, working memory, mental flexibility, planning and organizing, decision making, and inhibition.</div> 

                    </motion.a>
                    <motion.a id='item' variants={item} href='' target='_blank' className='flex h-full flex-col gap-3 w-full px-10 py-4 rounded-lg bg-opacity-20 backdrop-filter backdrop-blur-lg bg-white text-white font-extralight border-creme border-[1px] items-center justify-center'>
                        <img src='/Images/proj4.png' className='rounded-xl'/> 
                        <div className='flex flex-row gap-3 justify-center items-center'>
                            <div className='text-sm xs:text-base '>
                                Ai Sumarrizer
                            </div> 
                            <IconContext.Provider value={{size: '1.2em'}}>
                                <FiExternalLink />

                            </IconContext.Provider>
                            <IconContext.Provider value={{size: '1.2em'}}>
                                <FaGithub />

                            </IconContext.Provider>
                           
                        </div>
                        <div className='text-xs text-justify'>An open-source AI summarizer that takes the hassle out of reading lengthy articles by seamlessly condensing them into concise and informative summaries. Unlock the power of AI-driven summarization with SummAIze, your go-to destination for concise, insightful article summaries. Say goodbye to information overload and hello to clarity and efficiency. </div>                    

                    </motion.a> 
                    <motion.a id='item' variants={item} href='' target='_blank' className='flex h-full flex-col gap-3 w-full px-10 py-4 rounded-lg bg-opacity-20 backdrop-filter backdrop-blur-lg bg-white text-white font-extralight border-creme border-[1px] items-center justify-center'>
                        <img src='/Images/proj5.png' className='rounded-xl'/> 
                        <div className='flex flex-row gap-3 justify-center items-center'>
                            <div className='text-sm xs:text-base '>
                                Skin-Sense
                            </div> 
                            <IconContext.Provider value={{size: '1.2em'}}>
                                <FiExternalLink />

                            </IconContext.Provider>
                            <IconContext.Provider value={{size: '1.2em'}}>
                                <FaGithub />

                            </IconContext.Provider>
                           
                        </div>
                        <div className='text-xs text-justify'>It is a facial skin analyzer, that aims to go beyond simple skin type detection; identification of anomalies, differentiation between various skin conditions, by providing tailored skincare recommendations.</div>                    

                    </motion.a> 
                    <motion.a id='item' variants={item} href='' target='_blank' className='flex h-full flex-col gap-3 w-full px-10 py-4 rounded-lg bg-opacity-20 backdrop-filter backdrop-blur-lg bg-white text-white font-extralight border-creme border-[1px] items-center justify-center'>
                        <img src='/Images/proj6.jpeg' className='rounded-xl'/> 
                        <div className='flex flex-row gap-3 justify-center items-center'>
                            <div className='text-sm xs:text-base '>
                                Telementry Control Unit
                            </div> 
                            <IconContext.Provider value={{size: '1.2em'}}>
                                <FiExternalLink />

                            </IconContext.Provider>
                            <IconContext.Provider value={{size: '1.2em'}}>
                                <FaGithub />

                            </IconContext.Provider>
                           
                        </div>
                        <div className='text-xs text-justify'>Telemetry Control Unit collects, processes, and transmits data from various sensors and systems to a central monitoring location and is displayed on the dashboard. It enables real-time tracking and analysis of mining vehicle performance.</div>                    
                    </motion.a>               
                </motion.div>
                <div className='px-[50px] sm:px-[75px] text-sm mob1:text-base md:text-md font-semibold text-center pt-10 '>Tools of the Trade: My Tech Stack</div>
                <div className='px-[50px] sm:px-[75px] text-xs md:text-[16px] pb-12'>These are my go-to frameworks for efficiency and performance, I can also adapt to new tools to cater the needs of clients, ensuring seamless web applications. Tech-Stack vary from project to project. I'm keen on learning new exciting technologies everyday.</div>
                <motion.div id='container' variants={container} initial="hidden" whileInView="visible" viewport={{once:true}} className='px-[30px] sm:px-[75px] flex flex-row w-full justify-center flex-wrap gap-5 md:gap-10 items-center'>
                    <motion.a id='item' variants={item} href='https://developer.mozilla.org/en-US/docs/Web/HTML' target='_blank' className='flex flex-col gap-3 w-[70px] xs:w-[100px] md:w-[150px] px-10 py-3 rounded-lg bg-opacity-20 backdrop-filter backdrop-blur-lg bg-white text-white font-extralight border-creme border-[1px] items-center justify-center'>
                        <IconContext.Provider value={{size: '3.5em', }}>
                            <TiHtml5/>
                        </IconContext.Provider>
                        <div className='text-xs xs:text-sm '>HTML</div>                        
                    </motion.a>
                    <motion.a id='item' variants={item} href='https://developer.mozilla.org/en-US/docs/Web/CSS' target='_blank' className='flex flex-col gap-3 w-[70px] xs:w-[100px] md:w-[150px] px-10 py-3 rounded-lg bg-opacity-20 backdrop-filter backdrop-blur-lg bg-white text-white font-extralight border-creme border-[1px] items-center justify-center'>
                        <IconContext.Provider value={{size: '3.5em', }}>
                            <TiCss3/>
                        </IconContext.Provider>
                        <div className='text-xs xs:text-sm '>CSS</div>                        
                    </motion.a>
                    <motion.a id='item' variants={item} href='https://developer.mozilla.org/en-US/docs/Web/JavaScript' target='_blank' className='flex flex-col gap-3 px-10 w-[70px] xs:w-[100px] md:w-[150px] py-3 rounded-lg bg-opacity-20 backdrop-filter backdrop-blur-lg bg-white text-white font-extralight border-creme border-[1px] items-center justify-center'>
                        <IconContext.Provider value={{size: '3.5em', }}>
                            <TbBrandJavascript/>
                        </IconContext.Provider>
                        <div className='text-xs xs:text-sm '>Javascript</div>                        
                    </motion.a>
                    <motion.a id='item' variants={item} href='https://react.dev' target='_blank' className='flex flex-col gap-3 px-10 w-[70px] xs:w-[100px] md:w-[150px] py-3 rounded-lg bg-opacity-20 backdrop-filter backdrop-blur-lg bg-white text-white font-extralight border-creme border-[1px] items-center justify-center'>
                        <IconContext.Provider value={{size: '3.5em', }}>
                            <FaReact/>
                        </IconContext.Provider>
                        <div className='text-xs xs:text-sm '>ReactJs</div>                        
                    </motion.a>
                    <motion.a id='item' variants={item} href='https://nextjs.org' target='_blank' className='flex flex-col gap-3 px-10 w-[70px] xs:w-[100px] md:w-[150px] py-3 rounded-lg bg-opacity-20 backdrop-filter backdrop-blur-lg bg-white text-white font-extralight border-creme border-[1px] items-center justify-center'>
                        <IconContext.Provider value={{size: '3.5em', }}>
                            <TbBrandNextjs/>
                        </IconContext.Provider>
                        <div className='text-xs xs:text-sm '>NextJs</div>                        
                    </motion.a>
                    <motion.a id='item' variants={item} href='https://tailwindcss.com' target='_blank' className='flex flex-col gap-3 px-10 w-[70px] xs:w-[100px] md:w-[150px] py-3 rounded-lg bg-opacity-20 backdrop-filter backdrop-blur-lg bg-white text-white font-extralight border-creme border-[1px] items-center justify-center'>
                        <IconContext.Provider value={{size: '3.5em', }}>
                            <BiLogoTailwindCss/>
                        </IconContext.Provider>
                        <div className='text-xs xs:text-sm '>Tailwind</div>                        
                    </motion.a>
                    <motion.a id='item' variants={item} href='https://www.typescriptlang.org' target='_blank' className='flex flex-col gap-3 px-10 w-[70px] xs:w-[100px] md:w-[150px] py-3 rounded-lg bg-opacity-20 backdrop-filter backdrop-blur-lg bg-white text-white font-extralight border-creme border-[1px] items-center justify-center'>
                        <IconContext.Provider value={{size: '3.5em', }}>
                            <BiLogoTypescript/>
                        </IconContext.Provider>
                        <div className='text-xs xs:text-sm '>TypeScript</div>                        
                    </motion.a>
                    <motion.a id='item' variants={item} href='https://redux-toolkit.js.org' target='_blank' className='flex flex-col gap-3 px-10 w-[70px] xs:w-[100px] md:w-[150px] py-3 rounded-lg bg-opacity-20 backdrop-filter backdrop-blur-lg bg-white text-white font-extralight border-creme border-[1px] items-center justify-center'>
                        <IconContext.Provider value={{size: '3.5em', }}>
                            <TbBrandRedux/>
                        </IconContext.Provider>
                        <div className='text-xs xs:text-sm '>TypeScript</div>                        
                    </motion.a>
                    <motion.a id='item' variants={item} href='https://tanstack.com/query/v4' target='_blank' className='flex flex-col gap-3 px-10 w-[70px] xs:w-[100px] md:w-[150px] py-3 rounded-lg bg-opacity-20 backdrop-filter backdrop-blur-lg bg-white text-white font-extralight border-creme border-[1px] items-center justify-center'>
                        <IconContext.Provider value={{size: '3.5em', }}>
                            <SiReactquery/>
                        </IconContext.Provider>
                        <div className='text-xs xs:text-sm '>ReactQuery</div>                        
                    </motion.a>
                    <motion.a id='item' variants={item} href='https://dev.java' target='_blank' className='flex flex-col gap-3 px-10 w-[70px] xs:w-[100px] md:w-[150px] py-3 rounded-lg bg-opacity-20 backdrop-filter backdrop-blur-lg bg-white text-white font-extralight border-creme border-[1px] items-center justify-center'>
                        <IconContext.Provider value={{size: '3.5em', }}>
                            <FaJava/>
                        </IconContext.Provider>
                        <div className='text-xs xs:text-sm '>Java</div>                        
                    </motion.a>
                    <motion.a id='item' variants={item} href='https://www.python.org' target='_blank' className='flex flex-col gap-3 px-10 w-[70px] xs:w-[100px] md:w-[150px] py-3 rounded-lg bg-opacity-20 backdrop-filter backdrop-blur-lg bg-white text-white font-extralight border-creme border-[1px] items-center justify-center'>
                        <IconContext.Provider value={{size: '3.5em', }}>
                            <TbBrandPython/>
                        </IconContext.Provider>
                        <div className='text-xs xs:text-sm '>Python</div>                        
                    </motion.a>
                    <motion.a id='item' variants={item} href='https://www.mongodb.com' target='_blank' className='flex flex-col gap-3 px-10 w-[70px] xs:w-[100px] md:w-[150px] py-3 rounded-lg bg-opacity-20 backdrop-filter backdrop-blur-lg bg-white text-white font-extralight border-creme border-[1px] items-center justify-center'>
                        <IconContext.Provider value={{size: '3.5em', }}>
                            <BiLogoMongodb/>
                        </IconContext.Provider>
                        <div className='text-xs xs:text-sm '>MongoDB</div>                        
                    </motion.a>
                    <motion.a id='item' variants={item} href='https://www.prisma.io' target='_blank' className='flex flex-col gap-3 px-10 w-[70px] xs:w-[100px] md:w-[150px] py-3 rounded-lg bg-opacity-20 backdrop-filter backdrop-blur-lg bg-white text-white font-extralight border-creme border-[1px] items-center justify-center'>
                        <IconContext.Provider value={{size: '3.5em', }}>
                            <SiPrisma />
                        </IconContext.Provider>
                        <div className='text-xs xs:text-sm '>Prisma</div>                        
                    </motion.a>
                    <motion.a id='item' variants={item} href='https://aws.amazon.com' target='_blank' className='flex flex-col gap-3 px-10 w-[70px] xs:w-[100px] md:w-[150px] py-3 rounded-lg bg-opacity-20 backdrop-filter backdrop-blur-lg bg-white text-white font-extralight border-creme border-[1px] items-center justify-center'>
                        <IconContext.Provider value={{size: '3.5em', }}>
                            <FaAws />
                        </IconContext.Provider>
                        <div className='text-xs xs:text-sm '>AWS</div>                        
                    </motion.a>
                    <motion.a id='item' variants={item} href='https://mui.com' target='_blank' className='flex flex-col gap-3 px-10 w-[70px] xs:w-[100px] md:w-[150px] py-3 rounded-lg bg-opacity-20 backdrop-filter backdrop-blur-lg bg-white text-white font-extralight border-creme border-[1px] items-center justify-center'>
                        <IconContext.Provider value={{size: '3.5em', }}>
                            <SiMui />
                        </IconContext.Provider>
                        <div className='text-xs xs:text-sm '>MUI</div>                        
                    </motion.a>
                    <motion.a id='item' variants={item} href='www.figma.com' target='_blank' className='flex flex-col gap-3 px-10 w-[70px] xs:w-[100px] md:w-[150px] py-3 rounded-lg bg-opacity-20 backdrop-filter backdrop-blur-lg bg-white text-white font-extralight border-creme border-[1px] items-center justify-center'>
                        <IconContext.Provider value={{size: '3.5em', }}>
                            <FaFigma />
                        </IconContext.Provider>
                        <div className='text-xs xs:text-sm '>Figma</div>                        
                    </motion.a>
                    <motion.a id='item' variants={item} href='https://vitejs.dev' target='_blank' className='flex flex-col gap-3 px-10 w-[70px] xs:w-[100px] md:w-[150px] py-3 rounded-lg bg-opacity-20 backdrop-filter backdrop-blur-lg bg-white text-white font-extralight border-creme border-[1px] items-center justify-center'>
                        <IconContext.Provider value={{size: '3.5em', }}>
                            <SiVitest />
                        </IconContext.Provider>
                        <div className='text-xs xs:text-sm '>Vite</div>                        
                    </motion.a>

                    <motion.a id='item' variants={item} href='https://www.framer.com/motion/' target='_blank' className='flex flex-col gap-3 px-10 w-[70px] xs:w-[100px] md:w-[150px] py-3 rounded-lg bg-opacity-20 backdrop-filter backdrop-blur-lg bg-white text-white font-extralight border-creme border-[1px] items-center justify-center'>
                        <IconContext.Provider value={{size: '3.5em', }}>
                            <FiFramer/>
                        </IconContext.Provider>
                        <div className='text-xs xs:text-sm '>Framer</div>                        
                    </motion.a>
                    <motion.a id='item' variants={item} href='https://github.com' target='_blank' className='flex flex-col gap-3 px-10 w-[70px] xs:w-[100px] md:w-[150px] py-3 rounded-lg bg-opacity-20 backdrop-filter backdrop-blur-lg bg-white text-white font-extralight border-creme border-[1px] items-center justify-center'>
                        <IconContext.Provider value={{size: '3.5em', }}>
                            <FaGithub />
                        </IconContext.Provider>
                        <div className='text-xs xs:text-sm '>Github</div>                        
                    </motion.a>                    
                </motion.div>
                </div>
                <div className='flex flex-col gap-4 border-t-[1px] mx-[50px] sm:mx-[75px]'>
                <div className=' px-[50px] sm:px-[75px] text-sm mob1:text-base md:text-md font-semibold text-center pt-10'>Creative Suite: My Editing Toolbox</div>
                <div className='px-[50px] sm:px-[75px] text-xs md:text-[16px] pb-12'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi illo tenetur ipsa sapiente atque? Assumenda, voluptatibus velit cupiditate eos ea dignissimos libero, et distinctio quibusdam dolor, magnam rerum similique nisi?</div>
                <motion.div id='container' variants={container} initial="hidden" whileInView="visible" viewport={{once:true}} className='px-[30px] sm:px-[75px] flex flex-row justify-center items-center flex-wrap gap-5 md:gap-10'>
                    <motion.a id='item' variants={item} href='' target='_blank' className='flex flex-col gap-3 w-[70px] xs:w-[100px] md:w-[150px] px-10 py-3 rounded-lg bg-opacity-20 backdrop-filter backdrop-blur-lg bg-white text-white font-extralight border-creme border-[1px] items-center justify-center'>
                        <IconContext.Provider value={{size: '3.5em', }}>
                            <SiAdobephotoshop/>
                        </IconContext.Provider>
                        <div className='text-xs xs:text-sm '>PhotoShop</div>                        
                    </motion.a>
                    <motion.a id='item' variants={item} href='' target='_blank' className='flex flex-col gap-3 w-[70px] xs:w-[100px] md:w-[150px] px-10 py-3 rounded-lg bg-opacity-20 backdrop-filter backdrop-blur-lg bg-white text-white font-extralight border-creme border-[1px] items-center justify-center'>
                        <IconContext.Provider value={{size: '3.5em', }}>
                            <SiAdobelightroom/>
                        </IconContext.Provider>
                        <div className='text-xs xs:text-sm '>LightRoom</div>                        
                    </motion.a>
                    <motion.a id='item' variants={item} href='' target='_blank' className=' flex flex-col gap-3 px-10 w-[70px] xs:w-[100px] md:w-[150px] py-3 rounded-lg bg-opacity-20 backdrop-filter backdrop-blur-lg bg-white text-white font-extralight border-creme border-[1px] items-center justify-center'>
                        <IconContext.Provider value={{size: '3.5em', }}>
                            <SiAdobepremierepro/>
                        </IconContext.Provider>
                        <div className='text-[11px] xs:text-[13px] md:text-sm '>PremierePro</div>                        
                    </motion.a>
                    <motion.a id='item' variants={item} href='' target='_blank' className=' flex flex-col gap-3 px-10 w-[70px] xs:w-[100px] md:w-[150px] py-4 rounded-lg bg-opacity-20 backdrop-filter backdrop-blur-lg bg-white text-white font-extralight border-creme border-[1px] items-center justify-center'>
                        <IconContext.Provider value={{size: '3.5em', }}>
                            <SiAdobeaftereffects/>
                        </IconContext.Provider>
                        <div className='text-[10px] xs:text-xs md:text-sm'>AfterEffects</div>                        
                    </motion.a>                   
                </motion.div>
        
           

            </div>

        </div>
    </div>
  )
}

export default Development