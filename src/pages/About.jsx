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

const About = () => {
  return (
    <div className=''>
        <div className='flex flex-col gap-20 font-sans2 py-5 text-white'>
            <div className='flex flex-col gap-4 w-full'>
                <div className='text-md font-semibold text-center w-full '>Tools of the Trade: My Tech Stack</div>
                <div className='text-[16px] pb-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi at quos aspernatur cumque earum aut ea consectetur ad magni, quam, laborum, soluta quae non? Unde corporis distinctio animi assumenda obcaecati.</div>
                <div className='flex flex-row w-full justify-center flex-wrap gap-10 items-center'>
                    <a href='https://developer.mozilla.org/en-US/docs/Web/HTML' target='_blank' className='flex flex-col gap-3 w-[150px] px-10 py-3 rounded-lg bg-opacity-40 backdrop-filter backdrop-blur-lg bg-white text-white font-extralight border-creme border-[1px] items-center justify-center'>
                        <IconContext.Provider value={{size: '3.5em', }}>
                            <TiHtml5/>
                        </IconContext.Provider>
                        <div className='text-sm '>HTML</div>                        
                    </a>
                    <a href='https://developer.mozilla.org/en-US/docs/Web/CSS' target='_blank' className='flex flex-col gap-3 w-[150px] px-10 py-3 rounded-lg bg-opacity-40 backdrop-filter backdrop-blur-lg bg-white text-white font-extralight border-creme border-[1px] items-center justify-center'>
                        <IconContext.Provider value={{size: '3.5em', }}>
                            <TiCss3/>
                        </IconContext.Provider>
                        <div className='text-sm '>CSS</div>                        
                    </a>
                    <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript' target='_blank' className='flex flex-col gap-3 px-10 w-[150px] py-3 rounded-lg bg-opacity-40 backdrop-filter backdrop-blur-lg bg-white text-white font-extralight border-creme border-[1px] items-center justify-center'>
                        <IconContext.Provider value={{size: '3.5em', }}>
                            <TbBrandJavascript/>
                        </IconContext.Provider>
                        <div className='text-sm'>Javascript</div>                        
                    </a>
                    <a href='https://react.dev' target='_blank' className='flex flex-col gap-3 px-10 w-[150px] py-3 rounded-lg bg-opacity-40 backdrop-filter backdrop-blur-lg bg-white text-white font-extralight border-creme border-[1px] items-center justify-center'>
                        <IconContext.Provider value={{size: '3.5em', }}>
                            <FaReact/>
                        </IconContext.Provider>
                        <div className='text-sm'>ReactJs</div>                        
                    </a>
                    <a href='https://nextjs.org' target='_blank' className='flex flex-col gap-3 px-10 w-[150px] py-3 rounded-lg bg-opacity-40 backdrop-filter backdrop-blur-lg bg-white text-white font-extralight border-creme border-[1px] items-center justify-center'>
                        <IconContext.Provider value={{size: '3.5em', }}>
                            <TbBrandNextjs/>
                        </IconContext.Provider>
                        <div className='text-sm'>NextJs</div>                        
                    </a>
                    <a href='https://tailwindcss.com' target='_blank' className='flex flex-col gap-3 px-10 w-[150px] py-3 rounded-lg bg-opacity-40 backdrop-filter backdrop-blur-lg bg-white text-white font-extralight border-creme border-[1px] items-center justify-center'>
                        <IconContext.Provider value={{size: '3.5em', }}>
                            <BiLogoTailwindCss/>
                        </IconContext.Provider>
                        <div className='text-sm'>Tailwind</div>                        
                    </a>
                    <a href='https://www.typescriptlang.org' target='_blank' className='flex flex-col gap-3 px-10 w-[150px] py-3 rounded-lg bg-opacity-40 backdrop-filter backdrop-blur-lg bg-white text-white font-extralight border-creme border-[1px] items-center justify-center'>
                        <IconContext.Provider value={{size: '3.5em', }}>
                            <BiLogoTypescript/>
                        </IconContext.Provider>
                        <div className='text-sm'>TypeScript</div>                        
                    </a>
                    <a href='https://redux-toolkit.js.org' target='_blank' className='flex flex-col gap-3 px-10 w-[150px] py-3 rounded-lg bg-opacity-40 backdrop-filter backdrop-blur-lg bg-white text-white font-extralight border-creme border-[1px] items-center justify-center'>
                        <IconContext.Provider value={{size: '3.5em', }}>
                            <TbBrandRedux/>
                        </IconContext.Provider>
                        <div className='text-sm'>TypeScript</div>                        
                    </a>
                    <a href='https://tanstack.com/query/v4' target='_blank' className='flex flex-col gap-3 px-10 w-[150px] py-3 rounded-lg bg-opacity-40 backdrop-filter backdrop-blur-lg bg-white text-white font-extralight border-creme border-[1px] items-center justify-center'>
                        <IconContext.Provider value={{size: '3.5em', }}>
                            <SiReactquery/>
                        </IconContext.Provider>
                        <div className='text-sm'>ReactQuery</div>                        
                    </a>
                    <a href='https://dev.java' target='_blank' className='flex flex-col gap-3 px-10 w-[150px] py-3 rounded-lg bg-opacity-40 backdrop-filter backdrop-blur-lg bg-white text-white font-extralight border-creme border-[1px] items-center justify-center'>
                        <IconContext.Provider value={{size: '3.5em', }}>
                            <FaJava/>
                        </IconContext.Provider>
                        <div className='text-sm'>Java</div>                        
                    </a>
                    <a href='https://www.python.org' target='_blank' className='flex flex-col gap-3 px-10 w-[150px] py-3 rounded-lg bg-opacity-40 backdrop-filter backdrop-blur-lg bg-white text-white font-extralight border-creme border-[1px] items-center justify-center'>
                        <IconContext.Provider value={{size: '3.5em', }}>
                            <TbBrandPython/>
                        </IconContext.Provider>
                        <div className='text-sm'>Python</div>                        
                    </a>
                    <a href='https://www.mongodb.com' target='_blank' className='flex flex-col gap-3 px-10 w-[150px] py-3 rounded-lg bg-opacity-40 backdrop-filter backdrop-blur-lg bg-white text-white font-extralight border-creme border-[1px] items-center justify-center'>
                        <IconContext.Provider value={{size: '3.5em', }}>
                            <BiLogoMongodb/>
                        </IconContext.Provider>
                        <div className='text-sm'>MongoDB</div>                        
                    </a>
                    <a href='https://www.prisma.io' target='_blank' className='flex flex-col gap-3 px-10 w-[150px] py-3 rounded-lg bg-opacity-40 backdrop-filter backdrop-blur-lg bg-white text-white font-extralight border-creme border-[1px] items-center justify-center'>
                        <IconContext.Provider value={{size: '3.5em', }}>
                            <SiPrisma />
                        </IconContext.Provider>
                        <div className='text-sm'>Prisma</div>                        
                    </a>
                    <a href='https://aws.amazon.com' target='_blank' className='flex flex-col gap-3 px-10 w-[150px] py-3 rounded-lg bg-opacity-40 backdrop-filter backdrop-blur-lg bg-white text-white font-extralight border-creme border-[1px] items-center justify-center'>
                        <IconContext.Provider value={{size: '3.5em', }}>
                            <FaAws />
                        </IconContext.Provider>
                        <div className='text-sm'>AWS</div>                        
                    </a>
                    <a href='https://mui.com' target='_blank' className='flex flex-col gap-3 px-10 w-[150px] py-3 rounded-lg bg-opacity-40 backdrop-filter backdrop-blur-lg bg-white text-white font-extralight border-creme border-[1px] items-center justify-center'>
                        <IconContext.Provider value={{size: '3.5em', }}>
                            <SiMui />
                        </IconContext.Provider>
                        <div className='text-sm'>MUI</div>                        
                    </a>
                    <a href='www.figma.com' target='_blank' className='flex flex-col gap-3 px-10 w-[150px] py-3 rounded-lg bg-opacity-40 backdrop-filter backdrop-blur-lg bg-white text-white font-extralight border-creme border-[1px] items-center justify-center'>
                        <IconContext.Provider value={{size: '3.5em', }}>
                            <FaFigma />
                        </IconContext.Provider>
                        <div className='text-sm'>Figma</div>                        
                    </a>
                    <a href='https://vitejs.dev' target='_blank' className='flex flex-col gap-3 px-10 w-[150px] py-3 rounded-lg bg-opacity-40 backdrop-filter backdrop-blur-lg bg-white text-white font-extralight border-creme border-[1px] items-center justify-center'>
                        <IconContext.Provider value={{size: '3.5em', }}>
                            <SiVitest />
                        </IconContext.Provider>
                        <div className='text-sm'>Vite</div>                        
                    </a>

                    <a href='https://www.framer.com/motion/' target='_blank' className='flex flex-col gap-3 px-10 w-[150px] py-3 rounded-lg bg-opacity-40 backdrop-filter backdrop-blur-lg bg-white text-white font-extralight border-creme border-[1px] items-center justify-center'>
                        <IconContext.Provider value={{size: '3.5em', }}>
                            <FiFramer/>
                        </IconContext.Provider>
                        <div className='text-sm'>Framer</div>                        
                    </a>
                    <a href='https://github.com' target='_blank' className='flex flex-col gap-3 px-10 w-[150px] py-3 rounded-lg bg-opacity-40 backdrop-filter backdrop-blur-lg bg-white text-white font-extralight border-creme border-[1px] items-center justify-center'>
                        <IconContext.Provider value={{size: '3.5em', }}>
                            <FaGithub />
                        </IconContext.Provider>
                        <div className='text-sm'>Github</div>                        
                    </a>                    
                </div>
                </div>
                <div className='flex flex-col gap-4 border-t-[1px]'>
                <div className='text-md font-semibold text-center pt-10'>Creative Suite: My Editing Toolbox</div>
                <div className='text-[16px] pb-12'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi illo tenetur ipsa sapiente atque? Assumenda, voluptatibus velit cupiditate eos ea dignissimos libero, et distinctio quibusdam dolor, magnam rerum similique nisi?</div>
                <div className='flex flex-row items-center flex-wrap gap-10'>
                    <a href='' target='_blank' className='flex flex-col gap-3 w-[150px] px-10 py-3 rounded-lg bg-opacity-40 backdrop-filter backdrop-blur-lg bg-white text-white font-extralight border-creme border-[1px] items-center justify-center'>
                        <IconContext.Provider value={{size: '3.5em', }}>
                            <SiAdobephotoshop/>
                        </IconContext.Provider>
                        <div className='text-sm '>PhotoShop</div>                        
                    </a>
                    <a href='' target='_blank' className='flex flex-col gap-3 w-[150px] px-10 py-3 rounded-lg bg-opacity-40 backdrop-filter backdrop-blur-lg bg-white text-white font-extralight border-creme border-[1px] items-center justify-center'>
                        <IconContext.Provider value={{size: '3.5em', }}>
                            <SiAdobelightroom/>
                        </IconContext.Provider>
                        <div className='text-sm '>LightRoom</div>                        
                    </a>
                    <a href='' target='_blank' className='flex flex-col gap-3 px-10 w-[150px] py-3 rounded-lg bg-opacity-40 backdrop-filter backdrop-blur-lg bg-white text-white font-extralight border-creme border-[1px] items-center justify-center'>
                        <IconContext.Provider value={{size: '3.5em', }}>
                            <SiAdobepremierepro/>
                        </IconContext.Provider>
                        <div className='text-sm'>PremierePro</div>                        
                    </a>
                    <a href='' target='_blank' className='flex flex-col gap-3 px-10 w-[150px] py-4 rounded-lg bg-opacity-40 backdrop-filter backdrop-blur-lg bg-white text-white font-extralight border-creme border-[1px] items-center justify-center'>
                        <IconContext.Provider value={{size: '3.5em', }}>
                            <SiAdobeaftereffects/>
                        </IconContext.Provider>
                        <div className='text-[16px]'>AfterEffects</div>                        
                    </a>                   
                </div>
        
           

            </div>

        </div>
    </div>
  )
}

export default About