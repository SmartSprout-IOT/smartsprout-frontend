import React from 'react'
import Navbar from '../components/home/Navbar'
import { Hero } from '../components/home/Hero'
import { About } from '../components/home/About'
import { Services } from '../components/home/Services'
import IoT from '../components/home/IoT'
import { Team } from '../components/home/Team'
import Contact from '../components/home/Contact'
import Footer from '../components/home/Footer'

export const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <About />
        <Services />
        <IoT />
        <Team />
        <Contact />
        <Footer />
    </div>
  )
}
