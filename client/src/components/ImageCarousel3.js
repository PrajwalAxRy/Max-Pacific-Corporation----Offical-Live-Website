import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

import client1 from '../assests/Gallery/gallery-1.jpg'
import client2 from '../assests/Gallery/gallery-2.jpg'
import client3 from '../assests/Gallery/gallery-3.jpg'
import client4 from '../assests/Gallery/gallery-4.jpg'
import client5 from '../assests/Gallery/gallery-5.jpg'
import client6 from '../assests/Gallery/gallery-6.jpg'
import client7 from '../assests/Gallery/gallery-7.jpg'
import client8 from '../assests/Gallery/gallery-8.jpg'
import client9 from '../assests/Gallery/gallery-9.jpg'
import client10 from '../assests/Gallery/gallery-10.jpg'
const responsive = {
    0: { 
      items: 1
    },
    568: { 
      items: 2
    },
    1024: {
      items: 3
    },
};

const items = [
  <div className="item mx-4 h-60 flex justify-center items-center" data-value="1"><img src={client1} alt="Client 1" className='w-2/4' /></div>,
  <div className="item mx-4 h-60 flex justify-center items-center" data-value="2"><img src={client2} alt="Client 2" className='w-2/4' /></div>,
  <div className="item mx-4 h-60 flex justify-center items-center" data-value="3"><img src={client3} alt="Client 3" className='w-2/4' /></div>,
  <div className="item mx-4 h-60 flex justify-center items-center" data-value="4"><img src={client4} alt="Client 4" className='w-2/4' /></div>,
  <div className="item mx-4 h-60 flex justify-center items-center" data-value="5"><img src={client5} alt="Client 5" className='w-2/4' /></div>,
  <div className="item mx-4 h-60 flex justify-center items-center" data-value="6"><img src={client6} alt="Client 6" className='w-2/4' /></div>,
  <div className="item mx-4 h-60 flex justify-center items-center" data-value="7"><img src={client7} alt="Client 7" className='w-2/4' /></div>,
  <div className="item mx-4 h-60 flex justify-center items-center" data-value="8"><img src={client8} alt="Client 8" className='w-2/4' /></div>,
  <div className="item mx-4 h-60 flex justify-center items-center" data-value="9"><img src={client9} alt="Client 9" className='w-2/4' /></div>,
  <div className="item mx-4 h-60 flex justify-center items-center" data-value="10"><img src={client10} alt="Client 10" className='w-2/4' /></div>,
];

const ImageCarousel3 = () => {
    const [activeIndex, setActiveIndex] = useState(0);
  
    const slideNext = () => {
      const prevIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : items.length - 1;
      setActiveIndex(prevIndex);
    };
  
    const slidePrev = () => {
      const nextIndex = activeIndex + 1 < items.length ? activeIndex + 1 : 0;
      setActiveIndex(nextIndex);
    };
  
    return (
      <>
        <AliceCarousel
          mouseTracking
          items={items}
          responsive={responsive}
          animationDuration={1500}
          autoPlay
          autoPlayInterval={0.01}
          infinite={true}
          autoPlayStrategy="none"
          disableDotsControls
          disableButtonsControls
        />

      </>
    );
  };
  
export default ImageCarousel3;
