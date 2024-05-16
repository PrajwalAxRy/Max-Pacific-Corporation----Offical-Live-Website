import React from 'react'
import Button from '../components/Button'; 
import mainImage from '../assests/landingPageImage.png'
import isoTrust from '../assests/ISOTrust.png'
import footer from '../assests/footer.png'
import Services from '../components/textImage';
import DataLayout from '../components/DataLayout';
import BlogSection from '../components/BlogSection';

import './Banner.css';

import mailIcon from '../assests/mailIcon.png';
import phoneIcon from '../assests/PhoneIcon.png';
import locationIcon from '../assests/locationIcon.png';
import googleMaps from '../assests/googleMaps.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import { NavLink } from 'react-router-dom';


import client1 from '../assests/client1.png'
import client2 from '../assests/client2.png'
import client3 from '../assests/client3.png'
import client4 from '../assests/client4.png'
import client5 from '../assests/client5.png'
import client6 from '../assests/client6.png'
import client7 from '../assests/client7.png'

import transportation from '../assests/Services/transportation.png'
import warehouse from '../assests/Services/warehouse.png'
import logistics from '../assests/Services/logistics.jpg'

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import LogoCarousel from '../components/LogoCarousel';
import FinalCarousel from '../components/FinalCarousel';
// import MyCarousel from '../components/MyCarousel';

function Home() { 

  const images = [
    { 
      url: logistics, 
      heading: 'Logistics Services', 
      description: `Max Pacific Corporation Limited specializes in expert logistics and transportation of heavy machinery across India's metros. We manage and engineer the entire process from origin to destination, ensuring precision in every detail. Our dedicated team works tirelessly to guarantee your goods are delivered efficiently and safely. <br /> Choose Max Pacific for the best logistics services tailored to meet your needs and exceed expectations. ` ,
      direction: 'left' 
    },

    { 
      url: transportation, 
      heading: 'Transportation', 
      description: `At Max Pacific Corporation Limited, we excel in providing premium transportation solutions that ensure your goods and heavy machinery are moved swiftly and safely across India's dynamic cityscapes. Our professional team leverages advanced logistics technology and robust processes to deliver exceptional service and reliability. We tailor our transportation strategies to fit the unique demands of each client, emphasizing timely deliveries and secure handling at every step. With Max Pacific, your logistics needs are met with precision and care, helping your business achieve smooth operational success. `, 
      direction: 'right' 
    },

    { 
      url: warehouse, 
      heading: 'Warehousing', 
      description: `Max Pacific Corporation Limited offers state-of-the-art warehouse services, providing secure, scalable solutions tailored to your specific needs. Our facilities are strategically located to optimize logistics efficiency, ensuring quick access and distribution across India. With advanced inventory management systems and a dedicated team of logistics professionals, we guarantee the safekeeping and swift handling of your goods and enhance your supply chain, minimize costs, and improve overall operational agility. ` ,
      direction: 'left'  
    }

  ];


  const backgroundStyle = {
    backgroundImage: `url(${mainImage})`,
    backgroundPosition: 'center', // Center the background image
    backgroundSize: 'cover', // Cover the entire div
    backgroundRepeat: 'no-repeat', // Do not repeat the image
    height: '100vh', // Set the height to full viewport height
    marginTop: '-5rem', // Adjust the margin as needed
  };



//   <div style={{ width: '8px', height: '37px', left: '0px', top: '0px', position: 'absolute', background: '#E8923F' }}></div>
//   <div style={{ left: '24px', top: '2px', position: 'absolute', color: 'white', fontSize: '25.89px', fontFamily: 'Inter', fontWeight: 400, lineHeight: '34.96px', wordWrap: 'break-word' }}>
//     Welcome to Max Pacific
//   </div>

  const carouselItems = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight"];

  return (
    <div className='pt-20'>
        <div style={backgroundStyle}>
          <div className="w-4/6 z-10 h-4/5 ml-20 text-red-600">
            <div className='w-full h-1/3'></div>
            <div className="banner">
              Welcome To Max Pacific
            </div>
            <div className='textBanner'>Your gateway<br/>to all your Logistics Solution</div>

            <div className='secondaryBanner'>
              Max Pacific Corporation Limited, excels in providing innovative logistics and transportation solutions designed to exceed customer expectations and enhance efficiency. 
            </div>
            
            <div className='btn'>
              <Button text="Track Shipment" link='/TrackShipment'/>
              <Button text="Request Quote" link='/contact' />
            </div>
          </div>
        </div>

        <div className="flex px-5 sm:px-10 md:px-20 mt-16 mb-16 items-center justify-center">
          <div>
            <span className='headerTwo'>Trusted Partners</span>
            <br />
            <div className='contentTwo'>Since 2005, MPCL has been dedicated to delivering top-notch services, transforming the logistics sector. In under seven years, we've become a key player, covering 6000+ pincodes in India with a team of 500+ professionals. With ISO 9001:2015 certification, we ensure excellence in every service, from logistics and warehousing to transportation solutions.</div>
          </div>
          <div>
            <img className='imageTwo'  src={isoTrust} alt="" />
          </div>
        </div>
        
        <div className='pb-10' style={{backgroundColor: '#F7F7F7'}}>
          <div className=' text-center pt-10' style={{color: '#060B22', fontSize: '32px', fontFamily: 'Inter', fontWeight: 500, lineHeight: '48.49px', wordWrap: 'break-word'}}>Our Clients</div>
          <LogoCarousel/> 
        </div>

        <Services title="Our Services"
        images={images}/>

        <DataLayout/> 
        


        <div className=' h-20 w-full' style={{backgroundColor: '#F7F7F7'}}></div>
        
        {/* <FinalCarousel /> */}
        {/* <div className="App">
          <MyCarousel items={carouselItems} />
        </div> */}

        <div className="hidden lg:block">
          <BlogSection />
        </div>

    </div>
  )
}

export default Home