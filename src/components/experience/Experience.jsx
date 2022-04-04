import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id="experience">
      
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        <div className="experience__frontend">
          <h3>Development & Technologies</h3>
          <div className="experience__content">


            <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/> { /* react icon*/}
              
                <div>
                  <h4>ReactJs</h4>
                  <small className='text-light'>Experienced</small>
                </div>
            </article>


            <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/> { /* react icon*/}
                
                <div>
                  <h4>Android</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
            </article>


            <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/> { /* react icon*/}
                
                <div>
                  <h4>JavaScript</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
            </article>


            <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/> { /* react icon*/}
               <div>
                 <h4>BootStrap</h4>
                 <small className='text-light'>Experienced</small>
               </div>
            </article>


            <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/> { /* react icon*/}
                <div>
                  <h4>API Integration</h4>
                  <small className='text-light'>Experienced</small>
                </div>
            </article>

            <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/> { /* react icon*/}
                <div>
                  <h4>Firebase</h4>
                  <small className='text-light'>Experienced</small>
                </div>
            </article>
            

          </div>
        </div>


        {/*----------------------------------------------------------*/}
        <div className="experience__backend">
        <h3>Languages & Coding</h3>
          <div className="experience__content">


            <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/> { /* react icon*/}
                <div>
                  <h4>C/C++</h4>
                  <small className='text-light'>Experienced</small>
                </div>
            </article>


            <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/> { /* react icon*/}
                <div>
                  <h4>Kotlin</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
            </article>

            <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/> { /* react icon*/}
                <div>
                  <h4>HTML & CSS</h4>
                  <small className='text-light'>Experienced</small>
                </div>
            </article>

            <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/> { /* react icon*/}
                <div>
                  <h4>SQL</h4>
                  <small className='text-light'>Experienced</small>
                </div>
            </article>

            <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/> { /* react icon*/}
                <div>
                  <h4> Data Structures</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
            </article>


            <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/> { /* react icon*/}
                <div>
                  <h4>Algorithms</h4>
                  <small className='text-light'>Experienced</small>
                </div>
            </article>

            
            
        </div>
        </div>
      </div>
    </section>
  )
}

export default Experience  