import React, { useState, useRef } from "react";
import { motion, useInView } from 'framer-motion';

const projectsData = [
    {
      id: 1,
      title: "React Portfolio Website",
      description: "Project 1 description",
      image: "/images/projects/1.png",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 2,
      title: "Potography Portfolio Website",
      description: "Project 2 description",
      image: "/images/projects/2.png",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 3,
      title: "E-commerce Application",
      description: "Project 3 description",
      image: "/images/projects/3.png",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 4,
      title: "Food Ordering Application",
      description: "Project 4 description",
      image: "/images/projects/4.png",
      tag: ["All", "Mobile"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 5,
      title: "React Firebase Template",
      description: "Authentication and CRUD operations",
      image: "/images/projects/5.png",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 6,
      title: "Full-stack Roadmap",
      description: "Project 5 description",
      image: "/images/projects/6.png",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/",
    },
  ];

const ProjectSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  return (
    <div className='w-full max-w-[1300px] flex flex-col py-4 sm:py-12 md:py-12 md:px-4 px-4 min-h-screen md:h-screen font-raleway items-center gap-6'>
        <h1 className='text-4xl font-bold'>My Project</h1>
        <hr  className='w-[100px] font-bold text-black border-black border-2 rounded-full '/>
        <div className='flex flex-row items-center gap-2 '>
          <button className='px-4 py-2 border-gray-500 border-2 rounded-md hover:bg-gray-500 hover:text-white hover:scale-105 duration-300 transition-all'>All</button>
          <button className='px-4 py-2 border-gray-500 border-2 rounded-md hover:bg-gray-500 hover:text-white hover:scale-105 duration-300 transition-all'>Front-end</button>
          <button className='px-4 py-2 border-gray-500 border-2 rounded-md hover:bg-gray-500 hover:text-white hover:scale-105 duration-300 transition-all'>Full-stack</button>
        </div>
        <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
          {
            projectsData.map((project,index)=> {
              <motion.li
              key={index}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: index * 0.4 }}
            >

            </motion.li>
            })
          }
        </div>
    </div>
  )
}

export default ProjectSection
