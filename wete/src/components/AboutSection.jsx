import React, { useState} from 'react'
import Avatar from '../assets/AboutAvatar.png'
import AboutButton from './AboutButton';
import { motion } from "framer-motion";

import profile from '../assets/ProfileAbout.jpg'
const AboutData = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <ul className="flex flex-wrap gap-2 font-bold text-sm md:text-base">
          <li className='px-2 py-1 rounded-md bg-gray-300 shadow-md'>Java</li>
          <li className='px-2 py-1 rounded-md bg-gray-300 shadow-md'>ExpressJs</li>
          <li className='px-2 py-1 rounded-md bg-gray-300 shadow-md'>MySQL</li>
          <li className='px-2 py-1 rounded-md bg-gray-300 shadow-md'>HTML</li>
          <li className='px-2 py-1 rounded-md bg-gray-300 shadow-md'>CSS (Pure CSS & Tailwind & Bootstrap)</li>
          <li className='px-2 py-1 rounded-md bg-gray-300 shadow-md'>Javascript</li>
          <li className='px-2 py-1 rounded-md bg-gray-300 shadow-md'>React</li>
          <li className='px-2 py-1 rounded-md bg-gray-300 shadow-md'>C# Asp.net</li>
        </ul>
      ),
    },
    {
      title: "Education",
      id: "education",
      content: (
        <ul className="list-disc pl-2 ">
          <li>Universitas Bina Nusantara (Sept 2021 - present) ={'>'} <span className='font-bold'>GPA: 3.86 </span></li>
        </ul>
      ),
    },
    {
      title: "Organization",
      id: "Organization",
      content: (
        <ul className="list-disc pl-2 ">
          <li className='font-bold'>Ureeka (May 2023 - present) <br />
          <p className='text-sm py-2 font-normal'>Ureeka is like a community for student majoring in Computer Science. Where there is sometimes held weekly training for frontend, backend and UI/UX which helped me to comprehend more deeply in website programming.</p>
          </li>
          
        </ul>
      ),
    },
    {
      title: "Achievement",
      id: "Achievement",
      content: (
        <ul className="list-disc pl-2 ">
          <li className='font-bold'>ICORIS Conference (Sept 7th 2023) <br />
            <p className='text-sm py-2 font-normal'>Accepted to attend ICORIS Conference for journal publish of my team of 3, with the journal title <span className='font-bold italic'>"Branch and Bound Implementation in Package Delivery"</span> </p>
            <a href='https://binusianorg-my.sharepoint.com/personal/william_tanjaya_binus_ac_id/_layouts/15/guestaccess.aspx?share=Ebl_ci2Qm_VEp5yVB95xGWgBHI8PRiMmHPpTKq3sbeChVg&e=95Mb14' className='border-2 rounded-full py-2 px-4 text-gray-400 hover:border-gray-800 hover:text-gray-800 duration-300 transition-all'>View Credentials</a>
          </li>
          
        </ul>
      ),
    },
  ];

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
  
  return (
    <section className='w-full max-w-[1300px] flex flex-row py-4 sm:py-12 md:py-24 md:px-4  min-h-screen font-poppins items-center' name="about">
      <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16"
      >
        <img src={Avatar} width={500} height={500} className='mx-auto'/>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full m-auto gap-4 ">
          <h2 className="text-4xl font-bold text-center">About Me</h2>

          <div className='flex flex-col md:flex-row items-center gap-4'>
            <img src={profile} alt="" className='w-28 h-28 rounded-full'/>
            <p className="text-xs md:text-sm lg:text-base md:border-l-2 md:border-gray-400 px-2">
              I am a college student with passion of learning web developing either front-end or back-end. I have experience
              working with HTML, CSS, JavaScript, React, Node.js, Express, MySQL and C# Asp.net throughout my years in college.
            </p>
          </div>
          
          <ul className="text-sm md:text-base flex flex-wrap flex-row justify-start mt-8 gap-2">
            {AboutData.map((data, index)=>(
                <li>
                  <AboutButton
                    selected={() => setTab(data.id)}
                    active={tab === data.id}
                    content={data.title}
                    key={index}
                  />
                </li>
            ))}
          </ul>
          <div className="mt-4">
            {AboutData.find((e) => e.id === tab).content}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default AboutSection

