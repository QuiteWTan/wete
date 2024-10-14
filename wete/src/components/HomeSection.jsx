import React from "react";
import Avatar from '../assets/HomeAvatar.png'
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const HomeSection = () => {
  return (
    <section className='w-full max-w-[1300px] flex flex-row py-4 sm:py-12 md:py-24 md:px-4 px-4 min-h-screen md:h-screen' name="home">
        <motion.div
        className="flex flex-col-reverse md:flex-row w-full justify-center items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >

                <div className='w-full md:w-[60%] lg:w-full flex flex-col md:items-start md:justify-normal justify-center items-center md:text-left text-center mt-4'>
                    <div className="flex flex-col gap-2 lg:gap-4 font-raleway">
                        <h1 className="text-lg ">Hi there! I'm</h1>
                        <h1 className=' text-xl md:text-2xl lg:text-4xl font-bold'>William Tanjaya</h1>
                        <h1 className=' text-xl md:text-2xl lg:text-4xl font-bold'>Undergraduate CS Student</h1>
                        <h1 className=' text-xl md:text-2xl lg:text-4xl font-bold'>Based in Jakarta, Indonesia</h1>
                    </div>
                    <p className="font-raleway py-2 max-w-[600px] text-lg md:text-md">
                    Currently pursuing my undergraduate degree in Information Technology, I'm constantly seeking opportunities to learn and grow.
                    </p>
                    <div className="flex flex-row gap-2 items-center">
                        <Link to="contact" smooth={true} duration={700}>
                            <button className='py-2 text-white bg-gray-500 px-4 rounded-md opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-300'>
                                Contact Me
                            </button>
                        </Link>
                        <Link to="about" smooth={true} duration={500}>
                            <button className='p-2 px-4' >
                                <h1 to="about"className='py-2 border-gray-500 outline-gray-500 border px-4 rounded-md text-gray-500 hover:opacity-100 hover:scale-110 transition-all duration-300'>
                                        About
                                </h1>
                            </button>
                        </Link>
                        
                    </div>
                </div>
                <div className='w-[80%] md:w-[60%] lg:w-[80%] rounded-full flex items-center justify-center'>
                    <img src={Avatar} alt="" className=''/>
                </div>
            </motion.div>
        </section>
  );
};

export default HomeSection;
