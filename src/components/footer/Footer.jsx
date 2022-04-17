import React from 'react'
import './footer.css'
import {AiFillGithub} from 'react-icons/ai'
import {FiInstagram} from 'react-icons/fi'
import {GrLinkedinOption} from 'react-icons/gr'


const Footer = () => {
  return (
    <footer>
     
        <ul className='permalinks'>
         <a href="https://github.com/thekalyan001" target='_blank'><AiFillGithub/></a>
          <a href="https://www.linkedin.com/in/kalyanmishra"  target='_blank'><GrLinkedinOption/></a>
          <a href="https://instagram.com/thekalyan001"  target='_blank'><FiInstagram/></a>
      
        </ul>

        <div className="footer__copyright">
          <small>&copy; Kalyan Mishra. All rights reserved.</small>
        </div>
    </footer>
  )
}

export default Footer
