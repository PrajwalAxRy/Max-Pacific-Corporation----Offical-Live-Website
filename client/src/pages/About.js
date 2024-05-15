import React from 'react'

import warehouseImage from '../assests/ServicesPage/warehouseImage.png'
import traffic from '../assests/AboutPage/trafficImage.jpg'
import mission from '../assests/AboutPage/Mission.png'

import Lottie from 'react-lottie';
import firstAnimationData  from '../assests/ServicesPage/TruckAnimation.json';
import secondAnimationData from '../assests/ServicesPage/Support.json';
import thirdAnimationData from '../assests/ServicesPage/Secure.json'

import './aboutPage.css'



function About() {
  
  const secondOptions = {
    loop: true,
    autoplay: true,
    animationData: secondAnimationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };


  const thirdOptions = {
    loop: true,
    autoplay: true,
    animationData: thirdAnimationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div>

      <div className='w-11/12 mx-auto mb-10'>
        <h1 className='mt-11 font-extrabold text-2xl md:text-5xl text-center'>About Us</h1>
        <h2 className=' mt-2 sm:mt-6 font-normal text-sm sm:text-lg md:text-2xl text-customBlack text-center'>Welcome to your source for Logistics Industry Insights & Solutions! Learn interesting facts on industry transformation, covering topics from trends to service excellence and beyond.</h2>
      </div>


      <div className='w-11/12 mx-auto block sm:flex pt-0 md:pt-10 pb-10'>

        <div className='w-full sm:w-1/2'>

            <div className=' text-base sm:text-lg md:text-3xl text-orange-700 pt-2 sm:pt-6 md:pt-10' style={{ fontFamily: '"Roboto Mono", monospace',
                                                        fontOpticalSizing: 'auto',
                                                        fontWeight: '500', // Replace <weight> with the desired numeric value or keyword
                                                        fontStyle: 'normal',
                                                        letterSpacing: '0.25em',
                                                      }}>
                          Why Max Pacific ?
            </div>
                        
            <div className='mt-4 md:mt-16 text-base sm:text-xl md:text-4xl text-justify pr-0 sm:pr-14' style={{ fontFamily: '"Inter", monospace',
                                                        fontOpticalSizing: 'auto',
                                                        fontWeight: '700', 
                                                        fontStyle: 'normal',
                                                        letterSpacing: '0.05em',
                                                      }}>
                          Transform your business with the power of our Logistics Services
            </div>

            <div className='mt-4 md:mt-10 pr-0 sm:pr-8 md:pr-20 text-sm sm:text-base md:text-xl leading-2 md:leading-10 text-justify'>
                          MPCL can help you transform from A to B in just a matter of days. Our industry leading and industry defining technology can help you get your products to your customers faster than ever before. Other than this, We can also do shit tons of other things which I'd rather not talk about but we sure can do it. Hehe
            </div>
            
        </div>

        <div className='w-full sm:w-1/2 mt-4 min-h-44' style={{backgroundImage: `url(${traffic})`,
                                                      backgroundSize: 'cover',
                                                      backgroundRepeat: 'no-repeat',
                                                      backgroundPosition: 'center',
                                                      }}>
        </div>

      </div>

      <div className='w-11/12 mx-auto text-center'>
          
                                                        
          <div className='text-xl md:text-3xl text-orange-700 pt-10' style={{ fontFamily: '"Roboto Mono", monospace',
                                                        fontOpticalSizing: 'auto',
                                                        fontWeight: '500', // Replace <weight> with the desired numeric value or keyword
                                                        fontStyle: 'normal',
                                                        letterSpacing: '0.25em',
                                                      }}>
                          Our Values
          </div>
          
          <div className='w-[95%] mx-auto min-h-10 mt-8 shadow-2xl rounded-xl px-10 mb-10 border-orange-600 border-2'>
          <div className='block md:flex gap-16'>
              <div className='w-full'>
              <div className='lottie-container'>
                      <Lottie
                          options={{
                            loop: true,
                            autoplay: true,
                            animationData: firstAnimationData,
                            rendererSettings: {
                              preserveAspectRatio: 'xMidYMid slice'
                            }
                          }}
                        />
                    </div>

                    <div className=' -mt-3 sm:-mt-6 mb-2 text-sm sm:text-lg text-left pl-0 sm:pl-2' style={{ fontFamily: '"Roboto Mono", monospace',
                                                  fontOpticalSizing: 'auto',
                                                  fontWeight: '700', 
                                                  fontStyle: 'normal',
                                                  letterSpacing: '0.25em',
                                                }}>
                      Fast Delivery
                    </div>

                    <div className='w-full h-0.5 bg-orange-600'></div>

                    <div>
                      <p className='mt-4 sm:mt-6 mb-4 sm:mb-14 text-sm sm:text-base leading-6 sm:leading-8 text-justify pr-6'>
                      We pride ourselves on providing industry-leading, rapid delivery services to our customers. 
                      Our commitment to swift delivery is unmatched, ensuring that you receive your orders faster than ever before.
                      </p>
                    </div>
                </div>
                

                <div className='w-full'>
                    <div className='lottie-container'>
                      <Lottie
                          options={{
                            loop: true,
                            autoplay: true,
                            animationData: secondAnimationData,
                            rendererSettings: {
                              preserveAspectRatio: 'xMidYMid slice'
                            }
                          }}
                        />
                    </div>

                    <div className='-mt-3 sm:-mt-6 mb-2 text-sm sm:text-lg text-left pl-0 sm:pl-2' style={{ fontFamily: '"Roboto Mono", monospace',
                                                  fontOpticalSizing: 'auto',
                                                  fontWeight: '700', 
                                                  fontStyle: 'normal',
                                                  letterSpacing: '0.25em',
                                                }}>
                      24/7 Support
                    </div>

                    <div className='w-full h-0.5 bg-orange-600'></div>

                    <div>
                      <p className='mt-4 sm:mt-6 mb-4 sm:mb-14 text-sm sm:text-base leading-6 sm:leading-8 text-justify pr-6'>
                      We pride ourselves on providing industry-leading, rapid delivery services to our customers. 
                      Our commitment to swift delivery is unmatched, ensuring that you receive your orders faster than ever before.
                      </p>
                    </div>
                </div>


                <div className='w-full'>
                    <div className='lottie-container'>
                      <Lottie
                          options={{
                            loop: true,
                            autoplay: true,
                            animationData: thirdAnimationData,
                            rendererSettings: { 
                              preserveAspectRatio: 'xMidYMid slice'
                            }
                          }}
                        />
                    </div>

                    <div className='-mt-3 sm:-mt-6 mb-2 text-sm sm:text-lg text-left pl-0 sm:pl-2' style={{ fontFamily: '"Roboto Mono", monospace',
                                                  fontOpticalSizing: 'auto',
                                                  fontWeight: '700', 
                                                  fontStyle: 'normal',
                                                  letterSpacing: '0.25em',
                                                }}>
                      Secured Service
                    </div>

                    <div className='w-full h-0.5 bg-orange-600'></div>

                    <div>
                      <p className='mt-4 sm:mt-6 mb-4 sm:mb-14 text-sm sm:text-base leading-6 sm:leading-8 text-justify pr-6'>
                      We pride ourselves on providing industry-leading, rapid delivery services to our customers. 
                      Our commitment to swift delivery is unmatched, ensuring that you receive your orders faster than ever before.
                      </p>
                    </div>
                </div>
                
              </div>
              
          </div>


      </div>

       <div className='w-10/12 mx-auto pt-16 pb-10 flex items-center'>
           <div className='w-full sm:w-10/12 md:w-1/2'>
                <div className='text-lg md:text-3xl text-orange-700'  style={{ fontFamily: '"Roboto Mono", monospace',
                                                  fontOpticalSizing: 'auto',
                                                  fontWeight: '700', 
                                                  fontStyle: 'normal',
                                                  letterSpacing: '0.25em',
                                                }}>
                  Our Vision
                </div>

                <div>
                    <p className='mt-3 md:mt-6 mb-5 md:mb-14 text-base  md:text-lg leading-6 md:leading-8 text-justify pr-6'>
                      We pride ourselves on providing industry-leading, rapid delivery services to our customers. 
                      Our commitment to swift delivery is unmatched, ensuring that you receive your orders faster than ever before.
                    </p>
                </div>

                <div className='text-lg md:text-3xl text-orange-700'  style={{ fontFamily: '"Roboto Mono", monospace',
                                                  fontOpticalSizing: 'auto',
                                                  fontWeight: '700', 
                                                  fontStyle: 'normal',
                                                  letterSpacing: '0.25em',
                                                }}>
                  Our Mission
                </div>

                <div>
                    <p className='mt-3 md:mt-6 mb-14 text-base md:text-lg leading-6 md:leading-8 text-justify pr-6'>
                      We pride ourselves on providing industry-leading, rapid delivery services to our customers. 
                      Our commitment to swift delivery is unmatched, ensuring that you receive your orders faster than ever before.
                    </p>
                </div>

            </div>  
            <div className='hidden sm:block w-1/2 ml-0 md:ml-10 '>
                <div className='w-5/6 h-5/6 mx-auto'>
                  <img src={mission} alt="" />
                </div>
            </div>
            

       </div>               
    </div>
  )
}

export default About



// Path: client/src/pages/Contact.js