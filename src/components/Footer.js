import React from 'react'
import Logo from "../assets/logo-a-white.png"
import LinkedIn from "../assets/Artboard 6.png"
import Facebook from "../assets/Artboard 5.png"
import Behance from "../assets/Artboard 7.png"

const Footer = () => {
  return (
    <footer>
        <div className="footer-center">
       <div className="footer-one">
       <a href="/"> <img src={Logo} alt="logo" /> </a>
       <h3>B-103, Behind Triveni Commercial Complex Panchsheel Vihar,New Delhi, Delhi 110017
</h3>
           </div> 
           <div className="footer-two">
          <div class="contact">
            <h5>FOR JOB ENQUIRY</h5>
            <p>jobs.howwldesign@gmail.com</p>
          </div>
          <div class="contact">
            <h5>FOR BUSINESS ENQUIRY</h5>
            <p>bd.howwldesign@gmail.com</p>
          </div>
          <div class="contact">
            <h5>CONTACT</h5>
            <p>+91 8595583144</p>
          </div>
           </div>
           <div className="footer-three">
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
    </footer>
  )
}

export default Footer