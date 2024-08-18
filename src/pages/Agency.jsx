import React from 'react'
import { IconContext } from 'react-icons'
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPeopleArrows } from "react-icons/fa";
import CountUp from 'react-countup';
import { MdOutlineCall } from "react-icons/md";

const Agency = () => {
  return (
    <div>
      <div className='flex flex-col gap-20 font-sans2 py-5 text-white px-[25px] xs:px-[50px] sm:px-[75px]'>
        <div className='flex flex-col gap-4 w-full'>
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-10'>
            <div className='border-creme py-5 flex flex-col items-center justify-center border-[1px] rounded-xl shadow-[5px_-5px_1px_rgba(221,_221,_221,_1)]'>
              <IconContext.Provider value={{size:'5em'}}>
                  <FaXTwitter/>

              </IconContext.Provider>
              <div className='text-msm md:text-md font-bold text-myblue'><CountUp start={0} end={1500000} duration={10} />+</div>
              <div>
                <div>Impressions</div>
                
              </div>
            </div>
            <div className='border-creme py-5 flex flex-col items-center border-[1px] rounded-xl shadow-[5px_-5px_1px_rgba(221,_221,_221,_1)]'>
              <IconContext.Provider value={{size:'5em'}}>
                  <FaInstagram/>

                </IconContext.Provider>
              <div className='text-msm md:text-md font-bold text-mypink'><CountUp start={0} end={150000} duration={10} />+</div>
            <div>
                <div>Views</div>
                
              </div>
            </div>
            <div className='border-creme py-5 flex flex-col items-center border-[1px]  rounded-xl shadow-[5px_-5px_1px_rgba(221,_221,_221,_1)]'>
            
            <IconContext.Provider value={{size:'5em'}}>
                  <FaPeopleArrows/>

                </IconContext.Provider>
                <div className='text-msm md:text-md font-bold text-myorange'><CountUp start={0} end={5} duration={10} />+</div>

              <div>
                <div>Total Clients</div>
                
              </div>
            </div>

          </div>
          <div className='text-msm md:text-base xl:text-lmd  font-semibold pt-10 text-center w-full '>
            Marketing and Consulting
          </div>
          <div className='text-xs lg:text-sm pb-12 '>If you are a business owner or someone looking to build your online presence, let me take these matters into my hands. Book a 1:1 free call to discuss a plan that suits your needs. Together, we’ll craft a strategy that aligns with your goals and sets you up for digital success.</div>
          <div className='flex flex-col gap-8 w-full font-bold '>
            {/*<div className='flex flex-row gap-10 px-16 py-10 rounded-2xl text-white font-extralight border-creme border-[1px] items-center'>
              <div className='flex-[0.5]'>
                <img src='/Images/web1.gif' className='rounded-xl' />
              </div>
              <div className='flex flex-col gap-2 flex-1'>
                <div className='text-md font-semibold'>Website Design and Development</div>
                <div className='text-white'>This includes user interface (UI) design, ensuring your website is visually appealing and easy to navigate. I also specialize in responsive web design, ensuring your website looks and functions seamlessly across various devices and screen sizes. My front-end development expertise encompasses HTML, CSS, and JavaScript, allowing me to create dynamic and interactive user experiences. Additionally, I can seamlessly integrate your website with popular content management systems (CMS) like WordPress, Drupal, or Joomla, empowering you to manage your website's content effortlessly.</div>
              </div>
            </div> */}
            <div className='flex flex-col lg:flex-row-reverse gap-10 px-5 xs:px-10 py-5 xs:py-10 rounded-2xl text-white font-extralight shadow-[5px_-5px_1px_rgba(221,_221,_221,_1)] border-creme border-[1px] items-center'>
              <div className='flex-[0.5]'><img src='/Images/web4.gif' className='rounded-xl' /></div>
              <div className='flex flex-col gap-2 flex-1'>
                <div className='text-sm xs:text-msm lg:text-md font-semibold text-mypink'>Creative Content Production</div>
                <div className='text-white text-xs xs:text-sm'>I specialize in crafting visually striking content that includes graphics, short and long form content tailored specifically to your brand’s aesthetic and messaging. My video production team excels in creating engaging short-form clips and stories that captivate your audience and enhance brand storytelling.</div>
              </div>
            </div>
            <div className='flex flex-col lg:flex-row gap-10  px-5 xs:px-10 py-5 xs:py-10 rounded-2xl text-white font-extralight shadow-[5px_-5px_1px_rgba(221,_221,_221,_1)] border-creme border-[1px] items-center'>
              <div className='flex-[0.5]'><img src='/Images/web2.gif' className='rounded-xl' /></div>
              <div className='flex flex-col gap-2 flex-1'>
                <div className='text-sm xs:text-msm lg:text-md font-semibold text-myorange'>Community Building & Engagement</div>
                <div className='text-white text-xs xs:text-sm'>It is crucial for maintaining a vibrant online presence. I actively manage and grow your social media communities by responding to comments, engaging in conversations, and addressing customer inquiries. My approach includes trendspotting and real-time marketing to keep your brand relevant and engaging by creating content that taps into current trends and viral moments.</div>
              </div>
            </div>
            <div className='flex flex-col lg:flex-row-reverse gap-10  px-5 xs:px-10 py-5 xs:py-10 rounded-2xl text-white font-extralight shadow-[5px_-5px_1px_rgba(221,_221,_221,_1)] border-creme border-[1px] items-center'>
              <div className='flex-[0.5]'><img src='/Images/web5.gif' className='rounded-xl' /></div>
              <div className='flex flex-col gap-2 flex-1 text-myblue'>
                <div className='text-sm xs:text-msm lg:text-md font-semibold'>Strategic Content Planning</div>
                <div className='text-white text-xs xs:text-sm'>Design a detailed social media strategy that aligns with your brand’s goals and audience preferences. This includes setting clear objectives and creating a roadmap for content themes and distribution. Leverage audience insights and market research to ensure that your strategy is both innovative and effective in reaching your target demographic.</div>
              </div>
            </div>         
          </div>
          <div className='w-full flex items-center justify-center pt-4'>
            <button className='flex flex-row gap-3 items-center justify-center px-5 py-2 bg-myblue border-[1px] border-white rounded-xl'>
              <div className=''>Book a Call</div>
              <IconContext.Provider value={{size:'1.2em'}}>
                <MdOutlineCall />

              </IconContext.Provider>
            </button>

          </div>



        </div>
      </div>
    </div>
  )
}

export default Agency