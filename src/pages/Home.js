import React, {useEffect, useRef} from 'react'
import Header from '../components/home/Header'
import Navbar from '../components/Navbar'
import About from "../components/home/About"
import Work from "../components/home/Work"
import Footer from "../components/Footer"


const Home = () => {
  return (
    <>
    <Navbar />
    <Header />
    <About />
    <Work />
    <Footer />
    </>
  )
}

export default Home