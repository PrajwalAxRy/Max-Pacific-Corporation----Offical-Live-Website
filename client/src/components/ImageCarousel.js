import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

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
      items: 3
    },
};

const items = [
  <div className="item mx-4 h-60 flex justify-center items-center" data-value="1"><img src={client1} alt="Client 1" className='w-2/4' /></div>,
  <div className="item mx-4 h-60 flex justify-center items-center" data-value="2"><img src={client2} alt="Client 2" className='w-2/4' /></div>,
  <div className="item mx-4 h-60 flex justify-center items-center" data-value="3"><img src={client3} alt="Client 3" className='w-2/4' /></div>,
  // Add other items similarly...
];

const ImageCarousel = () => {
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
          animationDuration={2000}
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
  
export default ImageCarousel;
