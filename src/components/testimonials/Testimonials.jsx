import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

/*swiper js*/
// import Swiper core and required modules
import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data=[
  { 
    avatar: AVTR2,
    name: 'Akshay Saini',
    review: 'Done two projects with him and we learned alot about how things works and how we complete works by dividing into components.'
  },
  { 
    avatar: AVTR1,
    name: 'Tina Snow',
    review: 'Very good experience & clarity in the field of development. team working is really appreciateable.'
  },
  { 
    avatar: AVTR3,
    name: 'Larry Wheeles',
    review: 'Kalyan is a very helpful person, if i have any doubt he explain it in crystal clear way & has capablity to complete thnigs faster.'
  }
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      
      <h5>What people says</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
       modules={[Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       >
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

    </section>
  )
}

export default Testimonials