first delete all the files from src and public folder and create following components
in the src folder

create 3 files 
---------------------------------------
App.jsx,

import React from 'react'

const App = () => {
  return (
    <div>App</div>
  )
}

export default App

-------------------------------------
 index.css 
 
 body{
    background: black;
    color: white;
}
 --------------------and 
 index.js

import ReactDOM from 'react-dom'
import App from './App'
import './index.css'

ReactDOM.render(<App/>,document.querySelector("#root"))

------------------------------------------------------------
now run the npm start 

1.about
2.contact
3.experience
4.testimonials
.
.
.



in the a;; components--
now add 2files filename.jsx and filename.css
and do rafce in the jsx file and import the css file into that 

now we are going to add the componrnt into the order like 
pehle hoga 

now into the App.jsx incude the jsx fragment 
<>
</>

and call in the order you want to implement


change font  font.google.com
select all this option-
Poppins
Light 300
Regular 400
Medium 500
SemiBold 600

@import wale ko select krke
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');
</style>
CSS rules to specify families

font-family: 'Poppins', sans-serif;

after adding all the css to index.css

---------------------------------------------------

Header.jsx header component code 
return (
    <header>
      <div className=".container.header__container">  //id hai container and header__container
        <h5>Hello I'm</h5>
        <h1>Kalyan Mishra</h1>
        <h5 className='text-light'>React Developer</h5> 


        <CTA/>  {/* two btn download and contact*/}

      </div>  
    </header>
  )

create cta.jsx coer to action (in this 2 buttons will be there for download cv and let's talk)

import CV from '../../assets/cv.pdf'  import cv for downloading
 return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>

    </div>
  )

due to classname btn anchor tag converted to btn bcoz in the btn class name this is the code in index.css
.btn{
    width: max-content;
    display: inline-block;
    color: var(--color-primary);
    padding: 0.75rem 1.2rem;
    border-radius: 0.4rem;
    cursor: pointer;
    border: 1px solid var(--color-primary);
    transition: var(--transition);
}


import CTA from './CTA'  in the Header.jsx so  that buttons will come

  create HeaderSocials icon wala jsx file and weite code and for icon goto react icon website
  https://react-icons.github.io/react-icons/

in terminal run
  npm install react-icons --save

  on the website left side me search and click on that icon to copy the name and import that
  like name of linkedin is BsLinkedin

  so imort  import {BsLinkedin} from 'react-icons/bs'

  include like <a href="https://linkedin.com" target="_blank"> <BsLinkedin/> </a>

in the header css stye all this
----------------------------------------------------

1 rem = 16 px



/*----------------Header Image (me)--------------*/

.me{
    background: var(--color--primary); /*image backround clr*/
    width: 22rem;
    height: 30rem;
    position: absolute;
    left: calc(50% - 11rem);
}

instead of  left: calc(50% - 11rem); yu can also do this will work same

left: 50%;
transform: translateX(-50%);

1:03:22- scroll in index.css file

after working on images set the media query for smaller devices and then come to floating buttno style design.


----------------------------------Nav component---------------------
Nav.jsx------
   <nav>

<a href="#"> <AiOutlineHome/> </a>
<a href="#about"> <AiOutlineUser/> </a>
<a href="#experience"> <BiBook/> <AiOutlineHome/> </a>
<a href="#services"> <RiServiceLine/> <AiOutlineHome/> </a>
<a href="#contact"> <BiMessageSquareDetail/>  <AiOutlineHome/> </a>

   </nav>
nav.cs-------

/*background over the nav icon */
nav a.active{
    background: var(--color-bg);
    color: var(--color-white);
}

now on what we click we want to change active class-> for that we're going to use useState hooks for that

nav.jsx
<a href="#" onClick={()=>setActiveNav('#')} className={activeNav==='#'?'active':''}> <AiOutlineHome/> </a>

<a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav === '#about'?'active':''}> <AiOutlineUser/> </a>

className={activeNav === '#about'?'active':''  matlab agar activeNav hai equal hai about class ke to active kr do usko else no class

--------------------about component------------

add division section with 3 cards buttons and awards react icons

css styling part- about.css




--------------------Experience component------------
1:38:32-
in the experience.css part

/*colored grid design */
.experience__container>div{
    background: var(--color-bg-variant);
    padding: 2.4rem 5rem;
    border-radius: 2rem;
    border: 1px solid transparent;
}
.experience__container>div  means both the divs(frontEnd, backend) in the experience__container container


--------------------Sevices component------------
now come services component---
1:53:32


--------------------Portfolio component------------
now come services component---
2:04:11

it contains project with live demo and link of source code 
used image of dribble

<a href="https://github.com/Your_project" className='btn' target='_blank'>Github</a>
<a href="https://github.com/Your_project" className='btn btn-primary' target='_blank'>Live Demo</a>
    target='_blank' to open in a new tab 

    <img src={IMG1} alt=""/> alt= title of the project


we're going to generate portfolio items dynamically using Array Map method , 
create array of some portfolio object- 

so in the data array there are 6 objects
const data=[
  {
    id: 1,
    image: IMG1,
    title: 'Cyypto currency Dashboard & financial Visualization',
    github: 'https://github.com',
    demo: 'https://dribble.com/'
  },
  .
  .
  .

]

each object has a uniqueu key using which we can map trough the data array

now instead of this

 <article className='portfolio__item'>
        <div className="portfolio__item-image">
          <img src={IMG1} alt=""/>
        </div>
          <h3>This is a portfolio item title</h3> 

          <div className="portfolio__item-cta">
          <a href="https://github.com/Your_project" className='btn' target='_blank'>Github</a>
          <a href="https://dribble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>

      </article>



do this ->
//data.map(({id, image, title, github, demo}) destructuring the data object values
{
            data.map(({id, image, title, github, demo})=>{  
              return (
                <article className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={IMG1} alt=""/>
                </div>
                  <h3>This is a portfolio item title</h3> 
        
                  <div className="portfolio__item-cta">
                  <a href="https://github.com/Your_project" className='btn' target='_blank'>Github</a>
                  <a href="https://dribble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
                  </div>
        
              </article>
              )
            })
        }



--------------------testimonial component------------

 2:20:43

instead of this 


 <article className="testimonial">
        <div className="client__avatar">
          <img src={AVTR1} alt="Avatar One"/>
        </div>


        <h5 className='client__name'>Larry Wheeles</h5>
            <small className='client__review'>

              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Possimus, iste amet fugit aliquid repellat architecto ab 
              ea in reprehenderit et esse ex expedita illum earum, totam 
              unde. Maiores, autem earum?

            </small>
      </article>
    
use the data class wala object
using array map method

{
      data.map(({avatar, name, review}, index)=>{  //index is not in our object array so take it outside for key
        return(
        <article key={index} className="testimonial">
        <div className="client__avatar">
          <img src={avatar} alt='Image'/>
        </div>
        <h5 className='client__name'>{name}</h5>
            <small className='client__review'>
              {review}
            </small>
      </article>
        )

      })
}

now let's make slider  for that we're going to use swiper js, swiperjs.com

https://swiperjs.com/react  it uses pagination technique to display the slider

"npm install swiper"

<Swiper className="container testimonials__container">
      {
        data.map(({avatar, name, review}, index)=>{
          return(
          <SwiperSlide key={index} className="testimonial">
          <div className="client__avatar">
            <img src={avatar} alt='Image'/>
          </div>
          <h5 className='client__name'>{name}</h5>
              <small className='client__review'>
                {review}
              </small>
        </SwiperSlide>
          )

        })
      }
</Swiper>


now put the swiper class wala web per jo diya h woh 



--------------------Contact component------------

for sending the form through the email & pswd we're using, https://dashboard.emailjs.com/admin signuP

Add new services->gmail->connect account->create service

email template->create new template 

Subject 🎡 message from React Portfolio by {{{name}}}

content-
Name: {{{name}}}

Email: {{{email}}}

Message: {{{message}}}


goto 
https://www.emailjs.com/docs/examples/reactjs/
 
 to use the emailjs worked in the react run the following in the termnial
npm install emailjs-com --save 


import React, { useRef } from 'react';
import emailjs from 'emailjs-com'
const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };


  in the form change the action="" to ref={form}
  like-
  <form ref={form}>


  copy the service id from emailjs
  service_jwqp99x

  YOUR_SERVICE_ID from email service
  YOUR_TEMPLATE_ID from email template
  YOUR_USER_ID from integration->api niche me hoga usre ID

--------------------Footer component------------

3:05:40

--------------------Footer component------------
3:16:00 deploy to the server 

.dark-theme-variables{
  --color-background: #181a1e;
  --color-white: #202528;
  --color-dark: #edeffd;
  --color-dark-variant: #a3bdcc;
  --color-light: rgba(0, 0, 0, 0.4);
  --box-shadow: 0 2rem 3rem var(--color-light);
}