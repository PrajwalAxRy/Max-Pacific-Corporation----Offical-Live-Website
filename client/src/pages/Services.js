import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import './servicesAnimation.css';
import './servicesShadow.css';

import Lottie from 'react-lottie';
import firstAnimationData  from '../assests/ServicesPage/TruckAnimation.json';
import secondAnimationData from '../assests/ServicesPage/Support.json';
import thirdAnimationData from '../assests/ServicesPage/Secure.json'

import warehouseImage from '../assests/ServicesPage/warehouseImage.png'

function Services() {
  const [activeTab, setActiveTab] = useState('transportation');
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const tabsRef = useRef({});

  const navigate = useNavigate();

  const handleClickScheduleDemo = () => {
    navigate('/Contact');
  }

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

  // Update the indicator style upon tab change
  useEffect(() => {
    const activeTabEl = tabsRef.current[activeTab];
    if (activeTabEl) {
      setIndicatorStyle({
        left: activeTabEl.offsetLeft,
        width: activeTabEl.offsetWidth,
      });
    }
  }, [activeTab]);
  return (
    <div>
      {/* Width 11/12 dena bacha hai */}
      <div className='w-11/12 mx-auto'>
        <h1 className='mt-11 font-extrabold text-5xl'>Services</h1>
        <h2 className='w-3/4 mt-6 font-normal text-2xl text-customBlack text-justify'>Transform your online business with seamless logistics solutions. Improve customer satisfaction and drive conversions with reliable, timely deliveries that exceed expectations.</h2>
      </div>

      {/* This is the tabs thing */}
        <div className='w-11/12 mx-auto pt-8'>
          <div className=" flex justify-center relative">
            <ul className="flex flex-wrap gap-12 -mb-px text-xl font-bold text-center">
              <li>
                <button ref={el => tabsRef.current['logistics'] = el}
                        className={`inline-block p-4 rounded-t-lg ${activeTab === 'logistics' ? 'border-b-2 border-orange-500 text-orange-500' : 'border-b-2 border-transparent hover:text-gray-600 hover:border-orange-300'}`}
                        onClick={() => setActiveTab('logistics')}>
                  Logistics Services
                </button>
              </li>
              <li>
                <button ref={el => tabsRef.current['transportation'] = el}
                        className={`inline-block p-4 rounded-t-lg ${activeTab === 'transportation' ? 'border-b-2 border-orange-500 text-orange-500' : 'border-b-2 border-transparent hover:text-gray-600 hover:border-orange-300'}`}
                        onClick={() => setActiveTab('transportation')}>
                  Transportation
                </button>
              </li>
              <li>
                <button ref={el => tabsRef.current['warehousing'] = el}
                        className={`inline-block p-4 rounded-t-lg ${activeTab === 'warehousing' ? 'border-b-2 border-orange-500 text-orange-500' : 'border-b-2 border-transparent hover:text-gray-600 hover:border-orange-300'}`}
                        onClick={() => setActiveTab('warehousing')}>
                  Warehousing
                </button>
              </li>
            </ul>
            <div className="absolute bottom-0 bg-orange-500 h-0.5" style={{ ...indicatorStyle, transition: 'left 0.5s ease, width 0.5s ease' }}></div>
          </div>
      </div>
      

      <div className='w-11/12 pb-10 mb-10 mx-auto border-t border-orange-500 rounded-xl' style={{backgroundColor: '#F7F7F7'}}>
            
          {/* THIS IS FOR THE LOGISTICS SERVICES */}
          {/*  TODO: ADD A STACKED VIEW FOR DIFFERENT CARDS */}
          <div className='relative w-full overflow-visible'>

          <div className={`p-6 rounded-lg mt-8 flex mx-auto w-[95%] custom-shadow ${activeTab === 'logistics' ? 'z-20 active' : 'z-10'}`} style={{backgroundColor:"#FFF5EA"}}>
                    <div className='w-1/2'>
                        <div className=' text-xl text-orange-700' style={{ fontFamily: '"Roboto Mono", monospace',
                                                        fontOpticalSizing: 'auto',
                                                        fontWeight: '500', // Replace <weight> with the desired numeric value or keyword
                                                        fontStyle: 'normal',
                                                        letterSpacing: '0.25em',
                                                      }}>
                          Logistics <span className='pl-3'>Services</span>
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
                          MPCL can help you transform from A to B in just a matter of days. Our industry leading and industry defining technology can help you get your products to your customers faster than ever before.
                        </div>

                        <button
                          className=" mt-8 shadow-orange-500 font-bold shadow-2xl bg-blue-950 text-white rounded-full py-2 w-1/3 hover:bg-black focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50 button-float"
                          onClick={handleClickScheduleDemo}
                        >
                            Contact Us
                        </button>

                    </div>
                      
                    <div className='w-1/2' style={{backgroundImage: `url(${warehouseImage})`,
                                                    backgroundSize: 'cover',
                                                    backgroundRepeat: 'no-repeat',
                                                    backgroundPosition: 'center',
                                                    minHeight: '560px'
                                                    }}>
                     </div>
              </div>

              {/* THIS IS FOR TRANSPORTATION */}
              {/* THIS IS FOR THE TRANSPORTATION SERVICES */}
                <div className='absolute top-3 left-1'>
                <div className={`p-6 rounded-lg flex mx-auto w-[95%] custom-shadow-two z-40 ${activeTab === 'transportation' || activeTab === 'warehousing' ? 'fadeIn' : 'hidden'}`} style={{backgroundColor:"#FFF5EA"}}>
                      <div className='w-1/2'>
                            <div className=' text-xl text-orange-700' style={{ fontFamily: '"Roboto Mono", monospace',
                                                            fontOpticalSizing: 'auto',
                                                            fontWeight: '500', // Replace <weight> with the desired numeric value or keyword
                                                            fontStyle: 'normal',
                                                            letterSpacing: '0.25em',
                                                          }}>
                              Transportation <span className='pl-3'>Services here</span>
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
                              MPCL can help you transform from A to B in just a matter of days. Our industry leading and industry defining technology can help you get your products to your customers faster than ever before.
                            </div>

                            <button
                              className=" mt-8 shadow-orange-500 font-bold shadow-2xl bg-blue-950 text-white rounded-full py-2 w-1/3 hover:bg-black focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50 button-float"
                              onClick={handleClickScheduleDemo}
                            >
                                Contact Us
                            </button>
                      </div>
                      
                        <div className='w-1/2' style={{backgroundImage: `url(${warehouseImage})`,
                                                      backgroundSize: 'cover',
                                                      backgroundRepeat: 'no-repeat',
                                                      backgroundPosition: 'center',
                                                      minHeight: '560px'
                                                      }}>
                        </div>
                  </div>
                </div>

                <div className='absolute -top-2 left-2' >

                <div className={`p-6 rounded-lg mt-8 flex mx-auto w-[95%] custom-shadow-three z-50 ${activeTab === 'warehousing' ? 'fadeIn' : 'hidden'}`} style={{backgroundColor:"#FFF5EA"}}>
                        <div className='w-1/2'>
                                  <div className=' text-xl text-orange-700' style={{ fontFamily: '"Roboto Mono", monospace',
                                                                  fontOpticalSizing: 'auto',
                                                                  fontWeight: '500', // Replace <weight> with the desired numeric value or keyword
                                                                  fontStyle: 'normal',
                                                                  letterSpacing: '0.25em',
                                                                }}>
                                    Warehouse <span className='pl-3'>Services</span>
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
                                    MPCL can help you transform from A to B in just a matter of days. Our industry leading and industry defining technology can help you get your products to your customers faster than ever before.
                                  </div>

                                  <button
                                    className=" mt-8 shadow-orange-500 font-bold shadow-2xl bg-blue-950 text-white rounded-full py-2 w-1/3 hover:bg-black focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50 button-float"
                                    onClick={handleClickScheduleDemo}
                                  >
                                      Contact Us
                                  </button>
                                </div>
                                
                                <div className='w-1/2' style={{backgroundImage: `url(${warehouseImage})`,
                                                              backgroundSize: 'cover',
                                                              backgroundRepeat: 'no-repeat',
                                                              backgroundPosition: 'center',
                                                              minHeight: '560px'
                                                              }}>  
                                </div>
                        </div>
                </div>
          </div>


          <div className='w-[95%] mx-auto min-h-10 mt-14 shadow-2xl rounded-xl px-10' style={{backgroundColor: '#FFF5EA'}}>
          <div className='flex gap-16'>
              <div className='w-full'>
                    <Lottie options={firstOptions} height={100} width={100} style={{ marginLeft: '-20px' }} />

                    <div className=' -mt-6 mb-2 text-lg' style={{ fontFamily: '"Roboto Mono", monospace',
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

                    <div className=' -mt-6 mb-2 text-lg' style={{ fontFamily: '"Roboto Mono", monospace',
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

                    <div className=' -mt-6 mb-2 text-lg' style={{ fontFamily: '"Roboto Mono", monospace',
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


    </div>
  );
}

export default Services;
