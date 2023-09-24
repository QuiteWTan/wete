import React, { useState, useTransition } from 'react'
import Avatar from '../assets/AboutAvatar.png'
import AboutButton from './AboutButton';
import { motion } from "framer-motion";
const AboutData = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <ul className="flex flex-wrap gap-2">
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
    <section className='w-full max-w-[1300px] flex flex-row py-4 sm:py-12 md:py-24 md:px-4 px-4 min-h-screen md:h-screen font-raleway items-center'>
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
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full m-auto">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
            Sequelize, HTML, CSS, and Git. 
          </p>
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

