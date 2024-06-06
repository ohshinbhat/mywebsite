import React from 'react'
import { IconContext } from 'react-icons'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaInstagram} from 'react-icons/fa'

const FooterDown = () => {
  return (
    <div className='border-t-[1px] border-creme font-sans2'>
        <div className='flex flex-row text-white pt-5 pb-5 items-center justify-between'>

                <div className='text-base h-[30px] text-myblue font-sans1 [text-shadow:2px_2px_1px_rgba(247,_39,_152,_1)]'>Ohshin Bhat</div>
               
            <div className='flex flex-row gap-8 '>
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

    </div>
  )
}


export default FooterDown