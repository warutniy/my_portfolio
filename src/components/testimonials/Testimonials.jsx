import React from 'react';
import './testimonials.css';
import Certificate_Codecademy_Asyn from '../../assets/Certificate_Codecademy_Asyn.png';
import Certificate_Codecademy_CSS from '../../assets/Certificate_Codecademy_CSS.png';
import Certificate_Codecademy_JS from '../../assets/Certificate_Codecademy_JS.png';
import Certificate_Codecademy_Request from '../../assets/Certificate_Codecademy_Request.png';
import Certificate_Codecademy_SQL from '../../assets/Certificate_Codecademy_SQL.png';

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: Certificate_Codecademy_Asyn,
   
  },

  {
    avatar: Certificate_Codecademy_CSS,
   
  },

  {
    avatar: Certificate_Codecademy_JS,

  },

  {
    avatar: Certificate_Codecademy_Request,

  },

  {
    avatar: Certificate_Codecademy_SQL,

  }
];

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Most recent learning</h5>
      <h2>Certificates</h2>

      <Swiper className='container testimonials__container'
        // install Swiper modules
        modules={[Pagination]}
         
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {
          data.map(({ avatar }, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className='client__avatar'>
                  <img src={avatar} />
                </div>
                
                
              </SwiperSlide>
            );
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials