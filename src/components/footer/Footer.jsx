import React from 'react'
import './footer.css'
import {AiFillGithub} from 'react-icons/ai'
import {FiInstagram} from 'react-icons/fi'
import {GrLinkedinOption} from 'react-icons/gr'

const Footer = () => {
  return (
    <footer>
        <a href="#" className='footer__logo'>thekalyan001</a>
        <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>   
        <li><a href="#testimonials" >Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>   
        </ul>

        <div className="footer__socials">
          <a href="https://github.com/thekalyan001" target='_blank'><AiFillGithub/></a>
          <a href="https://www.linkedin.com/in/kalyanmishra"  target='_blank'><GrLinkedinOption/></a>
          <a href="https://instagram.com/thekalyan001"  target='_blank'><FiInstagram/></a>
        </div>

        <div className="footer__copyright">
          <small>&copy; Kalyan Mishra. All rights reserved.</small>
        </div>
    </footer>
  )
}

export default Footer