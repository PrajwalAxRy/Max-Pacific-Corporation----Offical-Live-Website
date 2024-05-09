import React from 'react'

import warehouseImage from '../assests/ServicesPage/warehouseImage.png'
import traffic from '../assests/AboutPage/trafficImage.jpg'
import mission from '../assests/AboutPage/Mission.png'

import Lottie from 'react-lottie';
import firstAnimationData  from '../assests/ServicesPage/TruckAnimation.json';
import secondAnimationData from '../assests/ServicesPage/Support.json';
import thirdAnimationData from '../assests/ServicesPage/Secure.json'



function About() {

  const firstOptions = {
    loop: true,
    autoplay: true,
    animationData: firstAnimationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  
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
        <h1 className='mt-11 font-extrabold text-5xl text-center'>About Us</h1>
        <h2 className='mt-6 font-normal text-2xl text-customBlack text-center'>Welcome to your source for Logistics Industry Insights & Solutions! Learn interesting facts on industry transformation, covering topics from trends to service excellence and beyond.</h2>
      </div>


      <div className='w-11/12 mx-auto flex pt-10 pb-10'>

        <div className='w-1/2'>

            <div className=' text-3xl text-orange-700 pt-10' style={{ fontFamily: '"Roboto Mono", monospace',
                                                        fontOpticalSizing: 'auto',
                                                        fontWeight: '500', // Replace <weight> with the desired numeric value or keyword
                                                        fontStyle: 'normal',
                                                        letterSpacing: '0.25em',
                                                      }}>
                          Why Max Pacific ?
            </div>
                        
            <div className='mt-16 text-4xl text-justify pr-14' style={{ fontFamily: '"Inter", monospace',
                                                        fontOpticalSizing: 'auto',
                                                        fontWeight: '700', 
                                                        fontStyle: 'normal',
                                                        letterSpacing: '0.05em',
                                                      }}>
                          Transform your business with the power of our Logistics Services
            </div>

            <div className='mt-10 pr-20 text-xl leading-10 text-justify'>
                          MPCL can help you transform from A to B in just a matter of days. Our industry leading and industry defining technology can help you get your products to your customers faster than ever before. Other than this, We can also do shit tons of other things which I'd rather not talk about but we sure can do it. Hehe
            </div>
            
        </div>

        <div className='w-1/2' style={{backgroundImage: `url(${traffic})`,
                                                      backgroundSize: 'cover',
                                                      backgroundRepeat: 'no-repeat',
                                                      backgroundPosition: 'center',
                                                      minHeight: '560px'
                                                      }}>
        </div>

      </div>

      <div className='w-11/12 mx-auto text-center'>
          
                                                        
          <div className=' text-3xl text-orange-700 pt-10' style={{ fontFamily: '"Roboto Mono", monospace',
                                                        fontOpticalSizing: 'auto',
                                                        fontWeight: '500', // Replace <weight> with the desired numeric value or keyword
                                                        fontStyle: 'normal',
                                                        letterSpacing: '0.25em',
                                                      }}>
                          Our Values
          </div>
          
          <div className='w-[95%] mx-auto min-h-10 mt-8 shadow-2xl rounded-xl px-10 mb-10 border-orange-600 border-2'>
          <div className='flex gap-16'>
              <div className='w-full'>
                    <Lottie options={firstOptions} height={100} width={100} style={{ marginLeft: '-20px' }} />

                    <div className=' -mt-6 mb-2 text-lg text-left pl-2' style={{ fontFamily: '"Roboto Mono", monospace',
                                                  fontOpticalSizing: 'auto',
                                                  fontWeight: '700', 
                                                  fontStyle: 'normal',
                                                  letterSpacing: '0.25em',
                                                }}>
                      Fast Delivery
                    </div>

                    <div className='w-full h-0.5 bg-orange-600'></div>

                    <div>
                      <p className='mt-6 mb-14 text-base   leading-8 text-justify pr-6'>
                      We pride ourselves on providing industry-leading, rapid delivery services to our customers. 
                      Our commitment to swift delivery is unmatched, ensuring that you receive your orders faster than ever before.
                      </p>
                    </div>
                </div>
                

                <div className='w-full'>
                    <Lottie options={secondOptions} height={100} width={100} style={{ marginLeft: '-20px' }} />

                    <div className=' -mt-6 mb-2 text-lg  text-left pl-2' style={{ fontFamily: '"Roboto Mono", monospace',
                                                  fontOpticalSizing: 'auto',
                                                  fontWeight: '700', 
                                                  fontStyle: 'normal',
                                                  letterSpacing: '0.25em',
                                                }}>
                      24/7 Support
                    </div>

                    <div className='w-full h-0.5 bg-orange-600'></div>

                    <div>
                      <p className='mt-6 mb-14 text-base   leading-8 text-justify pr-6'>
                      We pride ourselves on providing industry-leading, rapid delivery services to our customers. 
                      Our commitment to swift delivery is unmatched, ensuring that you receive your orders faster than ever before.
                      </p>
                    </div>
                </div>


                <div className='w-full'>
                    <Lottie options={thirdOptions} height={100} width={100} style={{ marginLeft: '-20px' }} />

                    <div className=' -mt-6 mb-2 text-lg text-left pl-2' style={{ fontFamily: '"Roboto Mono", monospace',
                                                  fontOpticalSizing: 'auto',
                                                  fontWeight: '700', 
                                                  fontStyle: 'normal',
                                                  letterSpacing: '0.25em',
                                                }}>
                      Secured Service
                    </div>

                    <div className='w-full h-0.5 bg-orange-600'></div>

                    <div>
                      <p className='mt-6 mb-14 text-base   leading-8 text-justify pr-6'>
                      We pride ourselves on providing industry-leading, rapid delivery services to our customers. 
                      Our commitment to swift delivery is unmatched, ensuring that you receive your orders faster than ever before.
                      </p>
                    </div>
                </div>
                
              </div>
              
          </div>


      </div>

       <div className='w-10/12 mx-auto pt-16 pb-10 flex'>
           <div className='w-1/2'>
                <div className=' text-3xl text-orange-700'  style={{ fontFamily: '"Roboto Mono", monospace',
                                                  fontOpticalSizing: 'auto',
                                                  fontWeight: '700', 
                                                  fontStyle: 'normal',
                                                  letterSpacing: '0.25em',
                                                }}>
                  Our Vision
                </div>

                <div>
                    <p className='mt-6 mb-14 text-lg   leading-8 text-justify pr-6'>
                      We pride ourselves on providing industry-leading, rapid delivery services to our customers. 
                      Our commitment to swift delivery is unmatched, ensuring that you receive your orders faster than ever before.
                    </p>
                </div>

                <div className=' text-3xl text-orange-700'  style={{ fontFamily: '"Roboto Mono", monospace',
                                                  fontOpticalSizing: 'auto',
                                                  fontWeight: '700', 
                                                  fontStyle: 'normal',
                                                  letterSpacing: '0.25em',
                                                }}>
                  Our Mission
                </div>

                <div>
                    <p className='mt-6 mb-14 text-lg   leading-8 text-justify pr-6'>
                      We pride ourselves on providing industry-leading, rapid delivery services to our customers. 
                      Our commitment to swift delivery is unmatched, ensuring that you receive your orders faster than ever before.
                    </p>
                </div>

            </div>  
            <div className='w-1/2 pl-10 '>
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