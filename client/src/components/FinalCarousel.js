import React from 'react'

import Slider from "react-slick";

import client1 from '../assests/client1.png'
import client2 from '../assests/client2.png'
import client3 from '../assests/client3.png'
import client4 from '../assests/client4.png'
import client5 from '../assests/client5.png'
import client6 from '../assests/client6.png'
import client7 from '../assests/client7.png'


function FinalCarousel() {

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
            },
            {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
            }
        ]
        };

  return (
    <div className="slider-container">
        <Slider {...settings}>
            


            <div className="item mx-4  h-80 flex justify-center items-center"> <img className=' w-2/4' src={client1} alt="Logo1" /></div>
            <div className="item mx-4 h-80 flex justify-center items-center"> <img className=' w-2/4' src={client2} alt="Logo1" /></div>
            <div className="item mx-4 h-80 flex justify-center items-center"> <img className=' w-2/4' src={client3} alt="Logo1" /></div>
            <div className="item mx-4 h-80 flex justify-center items-center"><img className=' w-2/4' src={client4} alt="Logo1" /></div>
            <div className="item mx-4 h-80 flex justify-center items-center"><img className=' w-2/4' src={client5} alt="Logo1" /></div>
            <div className="item mx-4 h-80 flex justify-center items-center"><img className=' w-2/5' src={client6} alt="Logo1" /></div>
            <div className="item mx-4 h-80 flex justify-center items-center"><img className=' w-2/4' src={client7} alt="Logo1" /></div>
        </Slider>
    </div>
  )
}

export default FinalCarousel