import { useState } from 'react'
import Navbar from './components/Navbar'
import HomeSection from './components/HomeSection'
import AboutSection from './components/AboutSection'
import ProjectSection from './components/ProjectSection'
function App() {

  return (
    <main className="min-h-screen bg-gray-100 w-full relative">
      <Navbar/>
      <div className='flex w-full  items-center mx-auto flex-col'>
        <HomeSection/>
        <AboutSection/>
        <ProjectSection/>
      </div>
    </main>
  )
}

export default App
