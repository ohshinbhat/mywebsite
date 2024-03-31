import React from 'react'
import Spline from '@splinetool/react-spline';
import { IconContext } from 'react-icons';
import { MdArrowRightAlt } from "react-icons/md";

const Contact = () => {
  return (
    <div className=''>
      <div className='flex flex-row gap-5'>
        <div className='flex-1 flex flex-col font-sans2 '>
          <div className='text-[64px] pb-4'>Let's get in touch</div>
          <div className='text-mypink pb-5'>If you have a software development project or idea in mind, I would love to hear from you! Let's collaborate to turn your vision into reality. Please don't hesitate to reach out to discuss your requirements, ask any questions, or explore how we can work together to create exceptional software solutions.</div>
          <div>
            <div>
              <label class="block uppercase tracking-wide text-myblue text-xs font-bold mb-2" for="name">
                Your Name
              </label>
              <input class="appearance-none block w-[500px] bg-white bg-opacity-10 backdrop-blur-lg text-gray-700 border border-creme rounded py-3 px-4 mb-3 leading-tight focus:outline-none " id="grid-first-name" type="text" placeholder="Jane" />
            </div>
            <div>
              <label class="block uppercase tracking-wide text-myblue text-xs font-bold mb-2" for="name">
                Your Message
              </label>
              <input class="h-[100px] w-[500px] bg-white text-xs text-left bg-opacity-10 backdrop-blur-lg text-gray-700 border border-creme rounded px-4 mb-3 focus:outline-none " id="grid-first-name" type="text" placeholder="Jane" />
            </div>
            <button className='pl-5 underline underline-offset-4 flex flex-row items-center hover:text-myyellow'>
              <div>Submit</div>
              <IconContext.Provider value={{size: '1.5em'}}>
                <MdArrowRightAlt/>

              </IconContext.Provider>
            </button>
          </div>
          <div className='text-sm pt-5'>Email : <a>ohshinb@gmail.com</a></div>
          <div className='text-sm'>Phone : <a>+91 8310306799</a></div>
        </div>
        <div className='flex-1 '>
          <Spline scene="https://prod.spline.design/8QO2tD5PqIdEMqko/scene.splinecode" />

        </div>

      </div>
      
       
    </div>
  )
}

export default Contact