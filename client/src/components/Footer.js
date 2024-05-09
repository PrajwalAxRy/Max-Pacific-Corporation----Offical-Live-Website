import React from 'react'
import { NavLink } from 'react-router-dom';

import footer from '../assests/footer.png'


import mailIcon from '../assests/mailIcon.png'
import phoneIcon from '../assests/PhoneIcon.png'
import locationIcon from '../assests/locationIcon.png'


function Footer() {

    const getNavLinkClass = ({ isActive }) => {
        return isActive 
          ? "whitespace-nowrap text-base font-medium text-orange-500 hover:text-orange-500"
          : "whitespace-nowrap text-base font-normal text-white hover:text-orange-500";
    }


  return (
    <div>

        {/* Footer */}
        <div>
          <img src={footer} alt="Footer" className=' w-full'/>

          <div className='w-full min-h-48' style={{backgroundColor: "#060B22"}}>
              <div className='flex w-full justify-between pt-8' style={{paddingLeft: '15%', paddingRight: '15%'}}>
                  <div className=' text-yellow-50'>
                    <div style={{color: 'white', fontSize: '24px', fontFamily: 'Inter', fontWeight: 800}}>Quick Links</div>
                    <div className='flex gap-24'>
                      <div className='mt-5 mb-10'>
                        <div className='mb-3'><NavLink to="/" className={getNavLinkClass}>Home</NavLink></div>
                        <div className='mb-3'><NavLink to="/services" className={getNavLinkClass}>Services</NavLink></div>
                        <div className='mb-3'><NavLink to="/pricingTable" className={getNavLinkClass}>Pricing Table</NavLink></div>
                        <div className='mb-3'><NavLink to="/contact" className={getNavLinkClass}>Contact Us</NavLink></div> 
                      </div>
                      
                      <div className='mt-5 mb-10'>
                        <div className='mb-3'><NavLink to="/about" className={getNavLinkClass}>About Us</NavLink></div>
                        <div className='mb-3'><NavLink to="/getQuote" className={getNavLinkClass}>Request Quote</NavLink></div>
                        <div className='mb-3'><NavLink to="/getQuote" className={getNavLinkClass}>Track Shipment</NavLink></div>
                        <div className='mb-3'><NavLink to="/contact" className={getNavLinkClass}>Contact Us</NavLink></div>
                      </div>

                    </div>
                  </div>

                  <div className=' text-white'>
                    
                    <div>

                      <div className='flex items-center mb-8'>
                          <div><img src={mailIcon} alt='Just an icon' className=' w-12 h-12 mr-2' /></div>
                          <div>
                            <div>Email ID</div>
                            <div className=' -mt-1'>info@mpclcorp.co.in</div>
                          </div>
                        </div>

                        <div className='flex items-center mb-6 '>
                          <div><img src={phoneIcon} alt='Just an icon' className=' w-12 h-12 mr-2' /></div>
                          <div>
                            <div>Phone No</div>
                            <div className=' -mt-1'>+91 9311 112 311</div>
                          </div>
                        </div>

                        <div className='flex items-center '>
                          <div><img src={locationIcon} alt='Just an icon' className=' w-12 h-12 mr-2' /></div>
                          <div>
                            <div>Unit No - 154, 1st Floor, JMD Megapolis,</div>
                            <div className=' -mt-1'>Sector 48, Sohna Road, </div>
                            <div className=' -mt-1'>Gurugram, 122018</div>
                          </div>
                        </div>

                      </div>

                  </div>

              </div>
          </div>
        </div>

    </div>
  )
}

export default Footer