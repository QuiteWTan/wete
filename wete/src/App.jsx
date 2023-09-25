import { useState } from 'react'
import Navbar from './components/Navbar'
import HomeSection from './components/HomeSection'
import AboutSection from './components/AboutSection'
import ProjectSection from './components/ProjectSection'
import Footer from './components/Footer'
import ContactSection from './components/ContactSection'
function App() {

  return (
    <main className="min-h-screen bg-gray-100 w-full relative">
      <Navbar/>
      <div className='flex w-full  items-center mx-auto flex-col'>
        <HomeSection/>
        <AboutSection/>
        <ProjectSection/>
        <ContactSection/>
        <Footer/>
      </div>
    </main>
  )
}

export default App
