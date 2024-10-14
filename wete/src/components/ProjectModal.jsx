import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {FiEye} from "react-icons/fi"
import Swal from 'sweetalert2'
const ProjectModal = ({desc, github, preview}) => {
  const notif = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  const [isOpen, setIsOpen] = useState(false);

  const handleRedirect = (url) => {
    window.open(url, "_blank");
  }

  const handleNoPreview = () =>{
    notif.fire({
      icon: 'error',
      title: 'No Preview Available'
    })
  }
  
  return (
    <motion.div
      layout
      data-isOpen={isOpen}
      animate={isOpen ? {borderRadius: 0} : {borderRadius: 50 } }
      className='parent bg-white/30 backdrop-blur-xl '
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className='p-1 flex item-center delay-300 '>
        { 
          isOpen ?
          <box-icon name='x'></box-icon> 
          : 
          <div className='bg-gray-600 rounded-full flex items-center p-1'><box-icon name='dots-horizontal' size='sm' color="white"></box-icon> </div>
        }
      </div>
      {isOpen ? 
      <div className='py-4 h-full'>
        <AnimatePresence mode='wait'>
          
          <motion.div
            initial={{  opacity: 0 }}
            animate={{  opacity: 1 }}
            exit={{  opacity: 0 }}
            transition={{ duration: 0.2 }}
          >

            <div className='flex justify-between flex-col h-full pr-2'>
              <div>
                <h1 className=''>{desc}</h1>
              </div>
              <div className='flex flex-row gap-4 absolute bottom-4 right-2'>
                  {
                    preview ? 
                    <button onClick={() => handleRedirect(preview)} className='flex items-center justify-center bg-gray-600 rounded-full '><FiEye className='p-1 w-8 h-8' color="white"></FiEye></button>
                    : <button onClick={() => handleNoPreview()} className='flex items-center justify-center bg-gray-600 rounded-full '><FiEye className='p-1 w-8 h-8' color="white"></FiEye></button>
                  }
                <button onClick={() => handleRedirect(github)} className='p-1 bg-gray-600 rounded-full flex items-center justify-center '><box-icon name='code-alt' color="white"></box-icon></button>
              </div>
            </div>

          </motion.div>

        </AnimatePresence>
      </div> : null
      }
    </motion.div>
  )
}

export default ProjectModal
