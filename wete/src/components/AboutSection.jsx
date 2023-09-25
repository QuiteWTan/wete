import React, { useState, useTransition } from 'react'
import Avatar from '../assets/AboutAvatar.png'
import AboutButton from './AboutButton';
import { motion } from "framer-motion";

import profile from '../assets/ProfileAbout.jpg'
const AboutData = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <ul className="flex flex-wrap gap-2">
          <li className='px-2 py-1 rounded-md bg-gray-300'>C</li>
          <li className='px-2 py-1 rounded-md bg-gray-300'>Node.js</li>
          <li className='px-2 py-1 rounded-md bg-gray-300'>Express</li>
          <li className='px-2 py-1 rounded-md bg-gray-300'>MySQL</li>
          <li className='px-2 py-1 rounded-md bg-gray-300'>HTML,CSS, JavaScript</li>
          <li className='px-2 py-1 rounded-md bg-gray-300'>React</li>
          <li className='px-2 py-1 rounded-md bg-gray-300'>C# Asp.net</li>
        </ul>
      ),
    },
    {
      title: "Education",
      id: "education",
      content: (
        <ul className="list-disc pl-2">
          <li>Universitas Bina Nusantara (2021 - present) ={'>'} <span className='font-bold'>GPA: 3.86 </span></li>
        </ul>
      ),
    },

  ];

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
  
  return (
    <section className='w-full max-w-[1300px] flex flex-row py-4 sm:py-12 md:py-24 md:px-4  min-h-screen md:h-screen font-raleway items-center' name="about">
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
        <img src={Avatar} width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full m-auto gap-4 ">
          <h2 className="text-4xl font-bold ">About Me</h2>
          <div className='flex flex-col md:flex-row items-center gap-4'>
            <img src={profile} alt="" className='w-28 h-28 rounded-full'/>
            <p className="text-base md:border-l-4 md:border-gray-700 px-2">
              I am a college student with passion of learning web developing either front-end or back-end. I have experience
              working with HTML, CSS, JavaScript, React, Node.js, Express, MySQL and C# Asp.net throughout my years in college.
            </p>
          </div>
          <ul className="flex flex-row justify-start mt-8 gap-2">
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
          <div className="mt-8">
            {AboutData.find((e) => e.id === tab).content}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default AboutSection

