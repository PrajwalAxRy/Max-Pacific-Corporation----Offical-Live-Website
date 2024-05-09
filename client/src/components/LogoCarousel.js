import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faUser, faCircleChevronRight, faCircleChevronLeft, faCircleRight, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";


import client1 from '../assests/client1.png'
import client2 from '../assests/client2.png'
import client3 from '../assests/client3.png'
import client4 from '../assests/client4.png'
import client5 from '../assests/client5.png'
import client6 from '../assests/client6.png'
import client7 from '../assests/client7.png'

const responsive = {
    0: { 
      items: 1
    },
    568: { 
      items: 2
    },
    1024: {
      items: 3,
      itemsFit: 'contain' // Note: `itemsFit` is not a standard option for AliceCarousel as of the last update.
    },
};

const items = [
  <div className="item mx-4  h-60 flex justify-center items-center" data-value="1"> <img className=' w-2/4' src={client1} alt="Logo1" /></div>,
  <div className="item mx-4 h-60 flex justify-center items-center" data-value="2"> <img className=' w-2/4' src={client2} alt="Logo1" /></div>,
  <div className="item mx-4 h-60 flex justify-center items-center" data-value="3"> <img className=' w-2/4' src={client3} alt="Logo1" /></div>,
  <div className="item mx-4 h-60 flex justify-center items-center" data-value="4"><img className=' w-2/4' src={client4} alt="Logo1" /></div>,
  <div className="item mx-4 h-60 flex justify-center items-center" data-value="5"><img className=' w-2/4' src={client5} alt="Logo1" /></div>,
  <div className="item mx-4 h-60 flex justify-center items-center" data-value="6"><img className=' w-2/5' src={client6} alt="Logo1" /></div>,
  <div className="item mx-4 h-60 flex justify-center items-center" data-value="7"><img className=' w-2/4' src={client7} alt="Logo1" /></div>,
  <div className="item mx-4  h-60 flex justify-center items-center" data-value="1"> <img className=' w-2/4' src={client1} alt="Logo1" /></div>,
    <div className="item mx-4 h-60 flex justify-center items-center" data-value="2"> <img className=' w-2/4' src={client2} alt="Logo1" /></div>,
    <div className="item mx-4 h-60 flex justify-center items-center" data-value="3"> <img className=' w-2/4' src={client3} alt="Logo1" /></div>,
    <div className="item mx-4 h-60 flex justify-center items-center" data-value="4"><img className=' w-2/4' src={client4} alt="Logo1" /></div>,
    <div className="item mx-4 h-60 flex justify-center items-center" data-value="5"><img className=' w-2/4' src={client5} alt="Logo1" /></div>,
    <div className="item mx-4 h-60 flex justify-center items-center" data-value="6"><img className=' w-2/5' src={client6} alt="Logo1" /></div>,
    <div className="item mx-4 h-60 flex justify-center items-center" data-value="7"><img className=' w-2/4' src={client7} alt="Logo1" /></div>,
    <div className="item mx-4  h-60 flex justify-center items-center" data-value="1"> <img className=' w-2/4' src={client1} alt="Logo1" /></div>,
    <div className="item mx-4 h-60 flex justify-center items-center" data-value="2"> <img className=' w-2/4' src={client2} alt="Logo1" /></div>,
    <div className="item mx-4 h-60 flex justify-center items-center" data-value="3"> <img className=' w-2/4' src={client3} alt="Logo1" /></div>,
    <div className="item mx-4 h-60 flex justify-center items-center" data-value="4"><img className=' w-2/4' src={client4} alt="Logo1" /></div>,
    <div className="item mx-4 h-60 flex justify-center items-center" data-value="5"><img className=' w-2/4' src={client5} alt="Logo1" /></div>,
    <div className="item mx-4 h-60 flex justify-center items-center" data-value="6"><img className=' w-2/5' src={client6} alt="Logo1" /></div>,
    <div className="item mx-4 h-60 flex justify-center items-center" data-value="7"><img className=' w-2/4' src={client7} alt="Logo1" /></div>
];

const LogoCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
  
    const slideNext = () => {
      const nextIndex = activeIndex + 1 < items.length ? activeIndex + 1 : 0;
      setActiveIndex(nextIndex);
    };
  
    const slidePrev = () => {
      const prevIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : items.length - 1;
      setActiveIndex(prevIndex);
    };
  
    return (
      <>
        <AliceCarousel
          mouseTracking
          items={items}
          responsive={responsive}
          animationDuration={2000}
          autoPlay
          // activeIndex={activeIndex}
          autoPlayInterval={0.01}
          infinite={true}
          disableDotsControls
          // onSlideChanged={(e) => setActiveIndex(e.item)}
          disableButtonsControls // Disables the default navigation buttons
        />
        {/* <div className="carousel-controls flex justify-center items-center space-x-8 pb-10">
            <FontAwesomeIcon icon={faChevronLeft} onClick={slidePrev} className='w-4 h-3 cursor-pointer text-gray-500 rounded-full border border-gray-500 px-2 py-2.5 border-2 hover:text-orange-600 hover:border-orange-600'/>
            <FontAwesomeIcon icon={faChevronRight} onClick={slideNext} className='w-4 h-3  cursor-pointer text-gray-500 rounded-full border border-gray-500 px-2 py-2.5 border-2 hover:text-orange-600 hover:border-orange-600'/>
        </div> */}
      </>
    );
  };
  
  export default LogoCarousel;