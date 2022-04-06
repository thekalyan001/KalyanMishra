import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.JPG'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.JPG'
import IMG6 from '../../assets/portfolio6.jpg'

const data=[
  {
    id: 1,
    image: IMG1,
    title: 'Personal Portfolio',
    github: 'https://github.com/thekalyan001/KalyanMishra',
    demo: 'https://kalyanm-portfolio.herokuapp.com/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Accu-Weather Web App',
    github: 'https://github.com/thekalyan001/Accu-weather',
    demo: 'https://elated-boyd-d1d86c.netlify.app/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'CityNews Mobile Application',
    github: 'https://github.com/thekalyan001/CityNews',
    demo: 'https://youtu.be/Kuj5x30wO6Q'
  },
  {
    id: 4,
    image: IMG4,
    title: 'ToDo Mobile Application',
    github: 'https://github.com/thekalyan001/MTodoApp',
    demo: 'https://github.com/thekalyan001/MTodoApp'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Dr. Calculator',
    github: 'https://github.com/thekalyan001/DrCalculator',
    demo: 'https://github.com/thekalyan001/DrCalculator'
  },
  {
    id: 1,
    image: IMG6,
    title: 'Vehicle Detection & Counting ML',
    github: 'https://github.com/thekalyan001/Vehicle_detection_and_counting_project',
    demo: 'https://github.com/thekalyan001/Vehicle_detection_and_counting_project'
  }

]
const Portfolio = () => {
  return (
<section id="portfolio">
    <h5>My Recent Work</h5>
    <h2>Projects</h2>

    <div className="container portfolio__container">

        {
            data.map(({id, image, title ,github, demo})=>{
              return (
                <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title}/>
                </div>
                  <h3>{title}</h3> 
        
                  <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                  </div>
        
              </article>
              )
            })
        }

    </div>
</section>
  )
}

export default Portfolio 
