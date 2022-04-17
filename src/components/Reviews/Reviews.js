import React from 'react'
import { Carousel } from 'react-bootstrap'
import './Reviews.css'

const Reviews = () => {
  return (
    <div>
      <h2 className='text-center my-3'>Our Reviews</h2>
      <section className='container'>
        <Carousel variant='dark' className='carousel-container'>
          <Carousel.Item>
            <img
              className='d-block carousel-img'
              src='https://randomuser.me/api/portraits/men/1.jpg'
              alt='First slide'
            />
            <h3 className='my-3'>Shuvo Chowdhury</h3>
            <p>
              Doctor's behaviour was very nice. Very fast service and welcoming.
            </p>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block carousel-img'
              src='https://randomuser.me/api/portraits/women/1.jpg'
              alt='Second slide'
            />
            <h3 className='my-3'>Mampy Pramanik</h3>
            <p>
              Doctor's office was neat and clean. Everyone at the office had
              smily face.
            </p>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block carousel-img'
              src='https://randomuser.me/api/portraits/men/2.jpg'
              alt='Third slide'
            />
            <h3 className='my-3'>Tushar Pramanik</h3>
            <p>
              Personally I liked the doctor's working experience. Did not feel
              any pain.
            </p>
          </Carousel.Item>
        </Carousel>
      </section>
    </div>
  )
}

export default Reviews
