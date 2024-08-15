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
            <div className='flex flex-col gap-10 w-full px-[50px] sm:px-[75px]'>
                <div className='flex flex-row gap-20 border-white py-10 border-b-[1px]'>
                    <img src='/Images/abt.jpg'  className='border-creme rounded-xl shadow-[10px_-10px_1px_rgba(221,_221,_221,_1)] h-[300px]'/>
                    <div className='flex flex-col gap-4'>
                        <div><span className='text-md text-mypink'>I Design</span>, creative fun projects based off Web and Graphic designs. I'm heavy on design. I truly believe design sells. I can design anything from posters to UI to even photoshoping documents.</div>
                        <div><span className='text-md text-myorange'>I Build</span>, projects focusing primarily on the Front-End. I'm a firm believer of solving the most common unacknowledged problems, rather than complex ideas. I've built over 4 products from scratch for various client and also a part of my prev company.</div>

                    
                    </div>
                </div>
                <div className='flex flex-row gap-20 border-white py-10 border-b-[1px]'>
                    <div className='flex flex-col gap-4'>
                        <div><span className='text-md text-myblue'>I Market</span>, through my agency, have handled multiple client's social media and helped them with online presense. </div>
                        <div><span className='text-md text-myyellow'>I Grow</span>, your reach organically through creatively orchastrating strategies and producing video ideas. Let me hop onto the trends for you.</div>
                    
                    </div>
                    <img src='/Images/marketing.png'  className='border-creme rounded-xl shadow-[10px_-10px_1px_rgba(221,_221,_221,_1)] h-[300px]'/>

                </div>
                <div className='flex flex-row gap-20 '>
                    <img src='/Images/photographer.jpg'  className='border-creme rounded-xl shadow-[10px_-10px_1px_rgba(221,_221,_221,_1)] h-[300px]'/>
                    <div className='flex flex-col gap-4'>
                        <div><span className='text-md text-myorange'>I Photograph</span>, Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quas blanditiis et culpa aliquid? Provident recusandae reiciendis veritatis voluptatem. Sit ipsum excepturi labore maiores aut soluta autem modi maxime repellendus!</div>
                        <div><span className='text-md text-mypink'>I Produce</span> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem ea molestias reiciendis placeat optio cupiditate neque eligendi maxime vitae, odit nobis? Quidem maxime delectus iusto necessitatibus suscipit nisi quia cupiditate.</div>                   
                    </div>
                </div>
                <div className='px-[50px] sm:px-[75px] text-sm mob1:text-base md:text-md font-semibold text-center w-full '>Here's my Gallery</div>
                <div className='px-[50px] sm:px-[75px] text-xs md:text-[16px] pb-12'>These are my go-to frameworks for efficiency and performance, I can also adapt to new tools to cater the needs of clients, ensuring seamless web applications. Tech-Stack vary from project to project. I'm keen on learning new exciting technologies everyday.</div>

            </div>
                
        </div>
    </div>
  )
}

export default About