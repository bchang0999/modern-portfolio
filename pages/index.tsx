import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import About from '../components/About'
import ContactMe from '../components/ContactMe'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Project'
import Skills from '../components/Skills'
import WorkExperience from '../components/WorkExperience'

const Home: NextPage = () => {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[cyan]/80 bg-[rgb(36,36,36)] text-white z-0">

      <Header/>

      <section id="hero" className='snap-center'>
        <Hero/>
      </section>

      <section id="about" className='snap-center'>
        <About/>
      </section>
      
      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>

      <section id="skills" className="snap-start">
        <Skills/>
      </section>

      
      <section id="projects" className="snap-start">
        <Projects />
      </section>

      
      <section id="contact" className="snap-start">
        <ContactMe />
      </section> 









      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <img
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
              src="https://wallpapercrafter.com/sizes/1366x768/102633-digital-art-mountains-sunset-cyan-pink.jpg"
              alt=""
            />
          </div>
        </footer>
      </Link>
    </div>
  )
}

export default Home
