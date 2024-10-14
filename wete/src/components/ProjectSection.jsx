import React, { useState, useRef } from "react";
import { motion, useInView } from 'framer-motion';
import ProjectCard from "./ProjectCard";
import Avatar from '../assets/AboutAvatar.png'
import Demy from '../assets/projects/Demy.png'
import Vior from '../assets/projects/Vior.png'
import Blog from '../assets/projects/Blog.png'
import Otter from '../assets/projects/Otter.png'
import UBird from '../assets/projects/UBird.png'
import VOrgreens from '../assets/projects/VOrgreens.png'
import Orbit from '../assets/projects/Orbit.png'
import FineAnce from '../assets/projects/FineAnce.png'
import Bunco from '../assets/projects/Bunco.png'
import Adsco from '../assets/projects/Adsco.png'
const projects = [
    {
      id: 0,
      title: "Adsco",
      theme:"Mobile Ads Website",
      description: "Adsco is made using NextJs framework with Typescript and Tailwind, this is a simple website that is used to advertise ",
      tags: ["All", "Frontend"],
      image: Adsco,
      github: "https://github.com/QuiteWTan/Adsco",
      preview: 'https://adsco.vercel.app/',
      Category:['nextJS', 'Typescript', 'Tailwind']
    },
    {
      id: 1,
      title: "Bun.co",
      theme:"Bakery Sales Website",
      description: "Bun.co is a website for selling bakery which is made using React.js and firebase for authentication and database",
      image: Bunco,
      tags: ["All", "Frontend"],
      github: "https://github.com/WTaroki/Bun.co",
      preview: "https://bun-co.vercel.app/",
      Category:['ReactJs','Tailwind CSS', 'framer-motion', 'Firebase']
    },
    {
      id: 2,
      title: "Demy",
      theme:"Course Website",
      description: "Demy is a one page front-end website for promoting a course related sale. It is made using ReactJS, Tailwind CSS for styling and framer-motion for animation",
      image: Demy,
      tags: ["All", "Frontend"],
      github: "https://github.com/WTaroki/Demy",
      preview: "https://demy.vercel.app/",
      Category:['ReactJs','Tailwind CSS', 'framer-motion']
    },
    {
      id: 3,
      title: "Vior",
      theme:"Furniture Selling Website",
      description: "Vior is a multiple page front-end website project for selling furniture with various type of furniture that I made using ReactJS using the context API concept for the furniture data, Tailwind CSS and Sweetalert2 components for modal notifications",
      image: Vior,
      tags: ["All", "Frontend"],
      github: "https://github.com/WTaroki/Viora",
      preview: "https://viora.vercel.app/",
      Category:['ReactJs','Tailwind CSS']
    },
    {
      id: 4,
      title: "VOrgreens",
      theme:"Vegan Food Website",
      description: "VOrgreens is a front-end website made using HTML CSS JS for selling vegetarian cuisine. This website was made for 2nd semester of my college final project",
      image: VOrgreens,
      tags: ["All", "Frontend"],
      github: "https://github.com/WTaroki/College-Vegan-Website-",
      preview: null,
      Category:['HTML','CSS', 'Javascript']
    },
    {
      id: 5,
      title: "Otter",
      theme:"Fashion Promotion Website",
      description: "This is a simple one page front-end website for a promotion of fashion product. This website was made when I was learning how to use ReactJS and Tailwind",
      image: Otter ,
      tags: ["All", "Frontend"],
      github: "https://github.com/WTaroki/OtterWebsite",
      preview: "https://otter-website1.vercel.app/",
      Category:['ReactJs','Tailwind CSS']
    },
    {
      id: 6,
      title: "UBird",
      theme:"Travel Tour Website",
      description: "UBird is a website made of html, css and js for promoting a japan travel website for tourist. This website is made while learning html css js course that i enrolled. ",
      image: UBird,
      tags: ["All", "Frontend"],
      github: "https://github.com/WTaroki/Ubird",
      preview: "https://wtaroki.github.io/Ubird/",
      Category:['HTML','CSS', 'Javascript']
    },
    {
      id: 7,
      title: "FineAnce",
      theme:"Finance Website",
      description: "FineAnce is a college final project for my 4th semester which consist of 5 people, this fullstack website made of Laravel PHP , MySQL, and Tailwind where user can use this website to manage their money. I contribute in making the front-end developer ",
      tags: ["All", "Frontend"],
      image: FineAnce,
      github: "https://github.com/RifianFernando/FINance-BE",
      preview: null,
      Category:['PHP', 'Tailwind CSS', 'Javascript']
    },
    {
      id: 8,
      title: "Bloug",
      theme:"Blog Website",
      description: "Bloug is a fullstack website made using ReactJS,Tailwind, NodeJS, ExpressJS and MySQL where user can create a blog themselves and post it",
      tags: ["All", "Fullstack"],
      image: Blog,
      github: "https://github.com/WTaroki/Bloug",
      preview: null,
      Category:['ReactJs','ExpressJs', 'MySQL', 'Tailwind CSS']
    },
    {
      id: 9,
      title: "Orbit",
      theme:"Forum Website",
      description: "Orbit is a fullstack for a community forum website where people can ask question and people also can reply them. This Website is made with PHP MySQL and Bootstrap. ",
      tags: ["All", "Fullstack"],
      image: Orbit,
      github: "https://github.com/WTaroki/orbit",
      preview: null,
      Category:['PHP','MySQL', 'Bootstrap CSS', 'Javascript']
    },
    
  ];

const ProjectSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  const [tag,setTag] = useState('All')
  return (
    <div className='w-full max-w-[1300px] flex flex-col py-4 sm:py-12 md:py-12 md:px-4 px-4 min-h-screen  font-raleway items-center gap-6' name="project">
        <h1 className='text-4xl font-bold'>My Projects</h1>
        <hr  className='w-[100px] font-bold text-black border-black border-2 rounded-full '/>
        <div className='flex flex-row items-center gap-2 '>
          <button className={`px-4 py-2 border-gray-500 border-2 rounded-md hover:bg-gray-500 hover:text-white hover:scale-105 duration-300 transition-all ${tag === 'All' ? 'bg-gray-500 text-white' : '' }`} onClick={() => setTag('All')}>All</button>
          <button className={`px-4 py-2 border-gray-500 border-2 rounded-md hover:bg-gray-500 hover:text-white hover:scale-105 duration-300 transition-all ${tag === 'Frontend' ? 'bg-gray-500 text-white' : '' }`} onClick={() => setTag('Frontend')}>Front-end</button>
          <button className={`px-4 py-2 border-gray-500 border-2 rounded-md hover:bg-gray-500 hover:text-white hover:scale-105 duration-300 transition-all ${tag === 'Fullstack' ? 'bg-gray-500 text-white' : '' }`} onClick={() => setTag('Fullstack')}>Full-stack</button>
        </div>
        <ul ref={ref} className='flex flex-wrap gap-6 md:gap-8 border-t-2 py-2 justify-center'>
          {
            projects.map((project,index)=> (
                <motion.li
                className={`${project.tags.includes(tag) ? 'flex' : 'hidden'}`}
                key={index}
                variants={cardVariants}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                transition={{ duration: 0.3, delay: index * 0.4 }}
                >
                  <ProjectCard
                    key={project.id}
                    title={project.title}
                    theme={project.theme}
                    description={project.description}
                    imgUrl={project.image}
                    github={project.github}
                    preview={project.preview}
                    categories={project.Category}
                  /> 
                </motion.li> 

              ))
          }
        </ul>
    </div>
  )
}

export default ProjectSection
