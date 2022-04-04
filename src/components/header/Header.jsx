import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>👋🏻 Hey there, I'm</h5>
        <h1>Kalyan Mishra</h1>
        <h5 className="text-light">React Developer</h5>


        <CTA/>  {/* two btn download and contact*/}
        <HeaderSocials/>



        <div className="me">
          <img src={ME} alt="me"/>
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>  



    </header>
  )
}

export default Header