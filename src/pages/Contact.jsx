import React from 'react'
import Spline from '@splinetool/react-spline';
import { IconContext } from 'react-icons';
import { MdArrowRightAlt } from "react-icons/md";

const Contact = () => {
  return (
    <div className=''>
      <div className='flex flex-col-reverse md:flex-row gap-5'>
        <div className='flex-1 flex flex-col font-sans2 pb-8'>
          <div className='text-lg pb-4'>Let's get in touch</div>
          <div className='text-mypink pb-5'>If you have a software development project or idea in mind, I would love to hear from you! Let's collaborate to turn your vision into reality. Please don't hesitate to reach out to discuss your requirements, ask any questions, or explore how we can work together.</div>
          <div>
            <div className='relative w-full min-w-[200px]'>
              <label className="block uppercase tracking-wide text-myblue text-xs font-bold mb-2" htmlFor="name">
                Your Name
              </label>
              <input className="appearance-none block w-[500px] bg-white text-sm bg-opacity-10 backdrop-blur-lg text-white border border-creme rounded py-3 px-4 mb-3 leading-tight focus:outline-none" id="grid-first-name" type="text" placeholder="Enter your Name" />
            </div>
            <div className='relative w-full min-w-[200px]'>
              <label className="block uppercase tracking-wide text-myblue text-xs font-bold mb-2" htmlFor="message">
                Your Message
              </label>
              <textarea className="h-[100px] text-wrap w-[500px] bg-white text-sm text-left bg-opacity-10 backdrop-blur-lg text-white border border-creme rounded px-4 mb-3 focus:outline-none resize-none" id="grid-message" placeholder="Enter your message" style={{verticalAlign: 'top', paddingTop: '10px'}} />
            </div>
            <button className='pl-5 underline underline-offset-4 flex flex-row items-center hover:text-myyellow'>
              <div>Submit</div>
              <IconContext.Provider value={{size: '1.5em'}}>
                <MdArrowRightAlt/>
              </IconContext.Provider>
            </button>
          </div>
          
        </div>
     

        <div className='flex-1 flex flex-col'>
          <Spline scene="https://draft.spline.design/uwTokgf3ZW-fWNKm/scene.splinecode" />
          <div className='w-full text-center text-sm text-myblue text-light font-sans2'>Press the contact drop-down to view options</div>

         
          

        </div>

      </div>
      
       
    </div>
  )
}

export default Contact