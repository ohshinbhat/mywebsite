import React from 'react'

const Services = () => {
  return (
    <div>
      <div className='flex flex-col gap-20 font-sans2 py-5 text-white px-[75px]'>
        <div className='flex flex-col gap-4 w-full'>
          <div className='text-md font-semibold text-center w-full '>
            Services: Code & Craft
          </div>
          <div className='text-[16px] pb-12'>These are my go-to frameworks for efficiency and performance, I can also adapt to new tools to cater the needs of clients, ensuring seamless web applications. Tech-Stack vary from project to project. I'm keen on learning new exciting technologies everyday.</div>
          <div className='flex flex-col gap-8 w-full font-bold '>
            <div className='flex flex-row gap-10 px-16 py-10 rounded-2xl text-white font-extralight border-creme border-[1px] items-center'>
              <div className='flex-[0.5]'>
                <img src='/Images/web1.gif' className='rounded-xl' />
              </div>
              <div className='flex flex-col gap-2 flex-1'>
                <div className='text-md font-semibold'>Website Design and Development</div>
                <div className='text-white'>This includes user interface (UI) design, ensuring your website is visually appealing and easy to navigate. I also specialize in responsive web design, ensuring your website looks and functions seamlessly across various devices and screen sizes. My front-end development expertise encompasses HTML, CSS, and JavaScript, allowing me to create dynamic and interactive user experiences. Additionally, I can seamlessly integrate your website with popular content management systems (CMS) like WordPress, Drupal, or Joomla, empowering you to manage your website's content effortlessly.</div>
              </div>
            </div> 
            <div className='flex flex-row-reverse gap-10 px-16 py-10 rounded-2xl text-white font-extralight border-creme border-[1px] items-center'>
              <div className='flex-[0.5]'><img src='/Images/web4.gif' className='rounded-xl' /></div>
              <div className='flex flex-col gap-2 flex-1'>
                <div className='text-md font-semibold'>Landing Page Design and Development for Brand Identity</div>
                <div className='text-white'>Effective marketing campaigns often rely on high-converting landing pages to capture leads and drive conversions. I specialize in crafting visually stunning and persuasive landing pages that are optimized for maximum conversions. This includes conducting A/B testing and continuous optimization to ensure your landing pages resonate with your target audience and achieve their intended goals.</div>
              </div>
            </div>
            <div className='flex flex-row gap-10 px-16 py-10 rounded-2xl text-white font-extralight border-creme border-[1px] items-center'>
              <div className='flex-[0.5]'><img src='/Images/web2.gif' className='rounded-xl' /></div>
              <div className='flex flex-col gap-2 flex-1'>
                <div className='text-md font-semibold'>Ongoing Website Maintenance and Support for Teams</div>
                <div className='text-white'>As a collaborative front-end developer and designer, I offer comprehensive ongoing website maintenance and support services tailored for teams and web development organizations. Seamlessly integrating into your workflows, I collaborate closely through regular communication, code reviews, and working alongside your developers to uphold coding standards and best practices. My services include regular updates and upgrades, bug fixing and troubleshooting, content deployment management, code refactoring, and optimization.</div>
              </div>
            </div>
            <div className='flex flex-row-reverse gap-10 px-16 py-10 rounded-2xl text-white font-extralight border-creme border-[1px] items-center'>
              <div className='flex-[0.5]'><img src='/Images/web5.gif' className='rounded-xl' /></div>
              <div className='flex flex-col gap-2 flex-1'>
                <div className='text-md font-semibold'>Front-end Consultation and Audits</div>
                <div className='text-white'>In addition to hands-on development and design services, I offer front-end consultations and audits. This includes conducting performance audits to identify potential bottlenecks and areas for improvement in your website's speed and user experience. Based on my findings, I provide actionable recommendations to optimize your website's front-end performance, ensuring a seamless and efficient user experience.</div>
              </div>
            </div>         
          </div>



        </div>
      </div>
    </div>
  )
}

export default Services