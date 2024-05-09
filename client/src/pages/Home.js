import React from 'react'
import Button from '../components/Button'; 
import mainImage from '../assests/landingPageImage.png'
import isoTrust from '../assests/ISOTrust.png'
import footer from '../assests/footer.png'
import Services from '../components/textImage';
import DataLayout from '../components/DataLayout';
import BlogSection from '../components/BlogSection';


import mailIcon from '../assests/mailIcon.png';
import phoneIcon from '../assests/PhoneIcon.png';
import locationIcon from '../assests/locationIcon.png';

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
      description: 'Lorem ipsum dolor sit amet, <br /> A diam sollicitudin tempor id eu nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br /> Facilisis sed odio morbi quis commodo. Purus in mollis nunc sed id semper risus. <br /> Nunc congue nisi vitae suscipit tellus mauris. A diam sollicitudin tempor id eu nisl. Magna etiam tempor orci eu lobortis. Tortor consequat id porta nibh venenatis cras sed felis. Gravida dictum fusce ut placerat orci  ' ,
      direction: 'left' 
    },

    { 
      url: transportation, 
      heading: 'Transportation', 
      description: 'Lorem ipsum dolor sit amet. Nunc congue nisi vitae suscipit tellus mauris. <br /> A diam sollicitudin tempor id eu nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br /> Facilisis sed odio morbi quis commodo. Purus in mollis nunc sed id semper risus. <br /> Nunc congue nisi vitae suscipit tellus mauris. A diam sollicitudin tempor id eu nisl. Magna etiam tempor orci eu lobortis. Tortor consequat id porta nibh venenatis cras sed felis. Gravida dictum fusce ut placerat orci  ', 
      direction: 'right' 
    },

    { 
      url: warehouse, 
      heading: 'Warehousing', 
      description: 'Lorem ipsum dolor sit amet, Purus in mollis nunc sed id semper risus. Nunc congue nisi vitae suscipit tellus mauris. <br /> A diam sollicitudin tempor id eu nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br /> Facilisis sed odio morbi quis commodo. Purus in mollis nunc sed id semper risus. <br /> Nunc congue nisi vitae suscipit tellus mauris. A diam sollicitudin tempor id eu nisl. Magna etiam tempor orci eu lobortis. Tortor consequat id porta nibh venenatis cras sed felis. Gravida dictum fusce ut placerat orci  ',
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

  const banner = {
    background: 'rgba(217, 217, 217, 0.20)',
    height: '37px',
    width: '357px',
    color: 'white', 
    fontSize: '25.89px', 
    fontFamily: 'Inter', 
    fontWeight: 400, 
    borderLeft: '10px solid orange',
    paddingLeft: '-10px', // Add paddingLeft with value of -5px
    textAlign: "center",
    justifyContent: "center" // Add justify content center
  }

//   <div style={{ width: '8px', height: '37px', left: '0px', top: '0px', position: 'absolute', background: '#E8923F' }}></div>
//   <div style={{ left: '24px', top: '2px', position: 'absolute', color: 'white', fontSize: '25.89px', fontFamily: 'Inter', fontWeight: 400, lineHeight: '34.96px', wordWrap: 'break-word' }}>
//     Welcome to Max Pacific
//   </div>

  const carouselItems = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight"];

  return (
    <div>
        <div style={backgroundStyle}>
          <div className="w-3/6 z-10 h-4/5 ml-20 text-red-600">
            <div className='w-full h-1/3'></div>
            <div style={banner}>
              Welcome To Max Pacific
            </div>
            <div style={{color: 'white', fontSize: '46.29px', fontFamily: 'Inter', fontWeight: 800, lineHeight: '60px' ,wordWrap: 'break-word', marginTop: '20px'}}>Your gateway<br/>to all your Logistics Solution</div>

            <div style={{width: '70%', marginTop: '30px' ,color: 'white', textAlign: 'justify', fontSize: '16px', fontFamily: 'Inter', fontWeight: 300, lineHeight: '24.24px', wordWrap: 'break-word'}}>
              In augue ligula, feugiat ut nulla consequat. Ut est lacus, molestie in arcu no, iaculis vehicula ipsum. Nunc faucibus, nisl id dapibus finibus, enim diam interdum nulla, sed laoreet risus lectus. 
            </div>
            
            <div className=' flex gap-10 mt-10'>
            <Button text="Track Shipment" link='/TrackShipment'/>
            <Button text="Request Quote" link='/contact' />
            </div>
          </div>
        </div>

        <div className="flex justify-between px-20 mt-16 mb-16">
          <div>
            <span style={{color: '#060B22', fontSize: '32px', fontFamily: 'Inter', fontWeight: 500, lineHeight: '48.49px', wordWrap: 'break-word'}}>Trusted Partners</span>
            <br />
            <div className=' leading-7' style={{width: '60%', color: 'black', fontSize: '16px', fontFamily: 'Inter', fontWeight: 300, textAlign: 'justify', marginTop: '10px'}}>Since 2005, MPCL has been dedicated to delivering top-notch services, transforming the logistics sector. In under seven years, we've become a key player, covering 6000+ pincodes in India with a team of 500+ professionals. With ISO 9001:2000 certification, we ensure excellence in every service, from logistics and warehousing to transportation solutions.</div>
          </div>
          <div>
            <img className=' h-40 w-72'  src={isoTrust} alt="" />
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

        <BlogSection/>

    </div>
  )
}

export default Home