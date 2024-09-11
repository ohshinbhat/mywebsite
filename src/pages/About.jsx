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
const About = () => {
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
            <div className='flex text-xs lg:text-sm flex-col gap-10 w-full px-[30px] sm:px-[75px]'>
                <div className='flex flex-col items-center justify-center md:flex-row gap-7 xs:gap-10 md:gap-20 border-white py-10 border-b-[1px]'>
                    <img src='/Images/abt.jpg'  className='border-creme rounded-xl shadow-[10px_-10px_1px_rgba(221,_221,_221,_1)]  h-[200px] sm:h-[300px] w-[200px] sm:w-[300px]'/>
                    <div className='flex flex-col gap-4'>
                        <div><span className='text-sm sm:text-base lg:text-md text-mypink'>I Design</span>, creative fun projects based off Web and Graphic designs. I'm heavy on design. I truly believe design sells. I can design anything from posters to UI to even photoshoping documents.</div>
                        <div><span className='text-sm sm:text-base lg:text-md text-myorange'>I Build</span>, projects focusing primarily on the Front-End. I'm a firm believer of solving the most common unacknowledged problems, rather than complex ideas. I've built over 4 products from scratch for various client and also a part of my prev company.</div>

                    
                    </div>
                </div>
                <div className='flex items-center justify-center flex-col-reverse md:flex-row gap-7 xs:gap-10 md:gap-20 border-white py-10 border-b-[1px]'>
                    <div className='flex flex-col gap-4'>
                        <div><span className='text-sm sm:text-md text-myblue'>I Market</span>, through my agency, have handled multiple client's social media and helped them with online presense. </div>
                        <div><span className='text-sm sm:text-md text-myyellow'>I Grow</span>, your reach organically through creatively orchastrating strategies and producing video ideas. Let me hop onto the trends for you.</div>
                    
                    </div>
                    <img src='/Images/marketing.png'  className='border-creme rounded-xl shadow-[10px_-10px_1px_rgba(221,_221,_221,_1)] h-[200px] sm:h-[300px] w-[200px] sm:w-[300px]'/>

                </div>
                <div className='flex items-center justify-center flex-col md:flex-row gap-7 xs:gap-10 md:gap-20 '>
                    <img src='/Images/photographer.jpg'  className='border-creme rounded-xl shadow-[10px_-10px_1px_rgba(221,_221,_221,_1)]  h-[200px] sm:h-[300px] w-[200px] sm:w-[300px]'/>
                    <div className='flex flex-col gap-4'>
                        <div><span className='text-sm sm:text-md text-myorange'>I Photograph</span>, landscapes, creative street scenes, and work with hospitality, music bands, and model shoots. Each shot captures fleeting moments, turning them into visual stories that resonate with viewers.</div>
                        <div><span className='text-sm sm:text-md text-mypink'>I Produce</span>, high-quality content and visual solutions tailored to meet specific needs and preferences. From concept to execution, I ensure that every project is handled with precision and creativity, delivering results that not only meet but exceed expectations.</div>                   
                    </div>
                </div>
                <div className='text-sm mob1:text-base md:text-md font-semibold text-center w-full '>Gallery coming soon!</div>

            </div>
                
        </div>
    </div>
  )
}

export default About