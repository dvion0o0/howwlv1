import React, {useEffect, useRef} from 'react'
import Parallax from 'parallax-js'
import "./headers.css";
import starMobile from "../../assets/star.svg"
import star from "../../assets/stars3.png"
import moon from "../../assets/moon.svg"
import plane from "../../assets/plane.gif"
import LinkedIn from "../../assets/Artboard 6.png"
import Facebook from "../../assets/Artboard 5.png"
import Behance from "../../assets/Artboard 7.png"
// import {Link} from 'react-scroll'
// import {HiChevronDown} from "react-icons/hi"

const Header = () => {

    const sceneEl = useRef(null)

    useEffect(() => {
      const parallaxInstance = new Parallax(sceneEl.current, {
        relativeInput: true,
      })
  
      parallaxInstance.enable()
  
      return () => parallaxInstance.disable()
    }, [])

  return (
    <header>
            <div id="scene" ref={sceneEl}>
      <div class="star-mobile">
        <img src={starMobile} alt="" />
      </div>
      <div className="star" data-depth="0.1">
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
      </div>
      {/* <div class="star">
        <div id="particles-js"></div>
      </div>  */}
      <div data-depth="0.3" className="moon">
        <img src={moon} alt="moon" />
      </div>
    </div>
    <img src={plane} className="plane" alt="" />
    <div className="header-content">
    <div className="header-center">
    <div className="hero-content">
          {/* <h3>OUR NEW WEBSITE IS</h3> */}
          <h1>HOWWL DESIGN</h1>
        </div>
        <div className="social-icons">
          <a href="https://www.linkedin.com/company/howwl" target="_blank">
            <img src={LinkedIn} alt="linkedin" />
          </a>
          <a href="https://www.facebook.com/Howwldesign" target="_blank">
            <img src={Facebook} alt="facebook" />
          </a>
          <a href="https://www.behance.net/howwldesign" target="_blank">
            <img src={Behance} alt="behance" />
          </a>
        </div>
    </div>
    </div>
  {/* <Link className='Scrollme' to="about" spy={true} smooth={true}><HiChevronDown /></Link> */}
    </header>
  )
}

export default Header