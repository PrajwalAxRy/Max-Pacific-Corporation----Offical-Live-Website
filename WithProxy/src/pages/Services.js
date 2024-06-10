import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import './servicesAnimation.css';
import './servicesShadow.css';
import './aboutPage.css';

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
        <h1 className='mt-11 font-extrabold text-2xl md:text-5xl'>Services</h1>
        <h2 className='w-full sm:w-10/12 md:w-3/4 mt-6 font-normal text-sm sm:text-lg md:text-2xl text-customBlack text-justify '>Transform your online business with seamless logistics solutions. Improve customer satisfaction and drive conversions with reliable, timely deliveries that exceed expectations.</h2>
      </div>

      {/* This is the tabs thing */}
        <div className='w-11/12 mx-auto pt-8'>
          <div className=" flex justify-center relative">
            <ul className="flex gap-0 sm:gap-4 md:gap-12 -mb-px text-xs sm:text-base md:text-xl font-bold text-center">
              <li>
                <button ref={el => tabsRef.current['logistics'] = el}
                        className={`inline-block p-4 rounded-t-lg ${activeTab === 'logistics' ? ' border-orange-500 text-orange-500' : ' border-transparent hover:text-gray-600 hover:border-orange-300'}`}
                        onClick={() => setActiveTab('logistics')}>
                  Logistics Services
                </button>
              </li>
              <li>
                <button ref={el => tabsRef.current['transportation'] = el}
                        className={`inline-block p-4 rounded-t-lg ${activeTab === 'transportation' ? ' border-orange-500 text-orange-500' : 'border-b-2 border-transparent hover:text-gray-600 hover:border-orange-300'}`}
                        onClick={() => setActiveTab('transportation')}>
                  Transportation
                </button>
              </li>
              <li>
                <button ref={el => tabsRef.current['warehousing'] = el}
                        className={`inline-block p-4 rounded-t-lg ${activeTab === 'warehousing' ? ' border-orange-500 text-orange-500' : 'border-b-2 border-transparent hover:text-gray-600 hover:border-orange-300'}`}
                        onClick={() => setActiveTab('warehousing')}>
                  Warehousing
                </button>
              </li>
            </ul>
            <div className="absolute bottom-0 bg-orange-500 h-0.5" style={{ ...indicatorStyle, transition: 'left 0.5s ease, width 0.5s ease' }}></div>
          </div>
      </div>
      

      <div className='w-11/12 pb-10 mb-10 mx-auto border-t border-orange-500 rounded-xl' style={{backgroundColor: '#F7F7F7'}}>
        <div className='relative w-full overflow-visible'>
        <div className={`p-6 rounded-lg mt-8 block md:flex mx-auto w-[95%] custom-shadow ${activeTab === 'logistics' ? 'z-20 fadeIn active' : 'z-10'}`} style={{backgroundColor:"#FFF5EA"}}>
                    <div className='w-full md:w-1/2'>
                        <div className='text-xs sm:text-base md:text-xl text-orange-700' style={{ fontFamily: '"Roboto Mono", monospace',
                                                        fontOpticalSizing: 'auto',
                                                        fontWeight: '500', // Replace <weight> with the desired numeric value or keyword
                                                        fontStyle: 'normal',
                                                        letterSpacing: '0.25em',
                                                      }}>
                          Logistics <span className='pl-3'>Services</span>
                        </div>
                        
                        <div className='mt-6 md:mt-16 text-base sm:text-xl md:text-4xl text-justify pr-4 sm:pr-8 md:pr-14' style={{ fontFamily: '"Inter", monospace',
                                                        fontOpticalSizing: 'auto',
                                                        fontWeight: '700', 
                                                        fontStyle: 'normal',
                                                        letterSpacing: '0.05em',
                                                      }}>
                          From Origin to Destination: MPCL Is Your Trusted Logistics Partner. 
                        </div>

                        <div className='mt-4 md:mt-10 pr-4 sm:pr-10 md:pr-20 text-sm sm:text-base md:text-xl leading-5 md:leading-10 text-justify'>
                        MPCL streamlines your supply chain, eliminating inventory backlog and ensuring on-time deliveries.  Our cutting-edge logistics network gets your products to customers faster than ever, boosting customer satisfaction and solidifying your brand reputation.
                        </div>

                        <button
                          className="hidden md:block mt-8 shadow-orange-500 font-bold shadow-2xl bg-blue-950 text-white rounded-full py-2 w-1/3 hover:bg-black focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50 button-float"
                          onClick={handleClickScheduleDemo}
                        >
                            Contact Us
                        </button>

                    </div>
                      
                    <div className='w-full md:w-1/2 mt-6 md:mt-0' style={{backgroundImage: `url(${warehouseImage})`,
                                                    backgroundSize: 'cover',
                                                    backgroundRepeat: 'no-repeat',
                                                    backgroundPosition: 'center',
                                                    minHeight: '200px'
                                                    }}>
                     </div>

                     <button
                          className="block md:hidden mt-8 shadow-orange-500 font-bold shadow-2xl bg-blue-950 text-white rounded-full py-2 w-2/3 hover:bg-black focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50 button-float"
                          onClick={handleClickScheduleDemo}
                        >
                            Contact Us
                      </button>
              </div>     
                <div className='absolute top-3 left-1'>
                  <div className={`p-6 rounded-lg mx-auto w-[95%] custom-shadow-two z-40 ${activeTab === 'transportation' || activeTab === 'warehousing' ? 'fadeIn block md:flex' : 'hidden'}`} style={{backgroundColor:"#FFF5EA"}}>
                      <div className='w-full md:w-1/2'>
                            <div className='text-xs sm:text-base md:text-xl text-orange-700' style={{ fontFamily: '"Roboto Mono", monospace',
                                                            fontOpticalSizing: 'auto',
                                                            fontWeight: '500',
                                                            fontStyle: 'normal',
                                                            letterSpacing: '0.25em',
                                                          }}>
                              Transportation
                            </div>
                        
                            <div className='mt-6 md:mt-16 text-base sm:text-xl md:text-4xl text-justify pr-4 sm:pr-8 md:pr-14' style={{ fontFamily: '"Inter", monospace',
                                                            fontOpticalSizing: 'auto',
                                                            fontWeight: '700', 
                                                            fontStyle: 'normal',
                                                            letterSpacing: '0.05em',
                                                          }}>
                              Seamless Movement and Elevated Success: Choose MPCL Transportation
                            </div>

                            <div className='mt-4 md:mt-10 pr-4 sm:pr-10 md:pr-20 text-sm sm:text-base md:text-xl leading-5 md:leading-10 text-justify'>
                            MPCL ensures efficient and reliable delivery, leveraging cutting-edge technology and an extensive network. Experience real-time shipment tracking and customized solutions tailored to your needs. Choose MPCL for faster, smarter, and more sustainable transportation solutions.
                            </div>

                            <button
                              className="hidden md:block mt-8 shadow-orange-500 font-bold shadow-2xl bg-blue-950 text-white rounded-full py-2 w-1/3 hover:bg-black focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50 button-float"
                              onClick={handleClickScheduleDemo}
                            >
                                Contact Us
                            </button>
                      </div>
                      
                        <div className='w-full md:w-1/2 mt-6 md:mt-0' style={{backgroundImage: `url(${warehouseImage})`,
                                                      backgroundSize: 'cover',
                                                      backgroundRepeat: 'no-repeat',
                                                      backgroundPosition: 'center',
                                                      minHeight: '200px'
                                                      }}>
                        </div>

                        <button
                          className="block md:hidden mt-8 shadow-orange-500 font-bold shadow-2xl bg-blue-950 text-white rounded-full py-2 w-2/3 hover:bg-black focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50 button-float"
                          onClick={handleClickScheduleDemo}
                        >
                            Contact Us       
                        </button>
                  </div>
                </div>

                <div className='absolute -top-2 left-2' >

                <div className={`p-6 rounded-lg mt-8 mx-auto w-[95%] custom-shadow-three z-50 ${activeTab === 'warehousing' ? 'fadeIn block md:flex' : 'hidden'}`} style={{backgroundColor:"#FFF5EA"}}>
                        <div className='w-full md:w-1/2'>
                                  <div className='text-xs sm:text-base md:text-xl text-orange-700' style={{ fontFamily: '"Roboto Mono", monospace',
                                                                  fontOpticalSizing: 'auto',
                                                                  fontWeight: '500', // Replace <weight> with the desired numeric value or keyword
                                                                  fontStyle: 'normal',
                                                                  letterSpacing: '0.25em',
                                                                }}>
                                    Warehouse <span className='pl-3'>Services</span>
                                  </div>
                                  
                                  <div className='mt-6 md:mt-16 text-base sm:text-xl md:text-4xl text-justify pr-4 sm:pr-8 md:pr-14' style={{ fontFamily: '"Inter", monospace',
                                                                  fontOpticalSizing: 'auto',
                                                                  fontWeight: '700', 
                                                                  fontStyle: 'normal',
                                                                  letterSpacing: '0.05em',
                                                                }}>
                                    Unlock Business Efficiency: Streamlined Warehousing Solutions by MPCL.
                                  </div>

                                  <div className='mt-4 md:mt-10 pr-4 sm:pr-10 md:pr-20 text-sm sm:text-base md:text-xl leading-5 md:leading-10 text-justify'>
                                    Free up valuable space and focus on what truly matters. MPCL's secure warehousing solutions keep your products safe, organized, and ready to ship. We handle everything from storage to fulfillment, ensuring a seamless experience so you can keep your customers happy.
                                  </div>

                                  <button
                                    className="hidden md:block mt-8 shadow-orange-500 font-bold shadow-2xl bg-blue-950 text-white rounded-full py-2 w-1/3 hover:bg-black focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50 button-float"
                                    onClick={handleClickScheduleDemo}
                                  >
                                      Contact Us
                                  </button>
                                </div>
                                
                                <div className='w-full md:w-1/2 mt-6 md:mt-0' style={{backgroundImage: `url(${warehouseImage})`,
                                                              backgroundSize: 'cover',
                                                              backgroundRepeat: 'no-repeat',
                                                              backgroundPosition: 'center',
                                                              minHeight: '200px'
                                                              }}>  
                                </div>

                                <button
                                  className="block md:hidden mt-8 shadow-orange-500 font-bold shadow-2xl bg-blue-950 text-white rounded-full py-2 w-2/3 hover:bg-black focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50 button-float"
                                  onClick={handleClickScheduleDemo}
                                >
                                    Contact Us
                                </button>
                        </div>
                </div>
          </div>





















          {/* <div className='w-[95%] mx-auto min-h-10 mt-14 shadow-2xl rounded-xl px-10' style={{backgroundColor: '#FFF5EA'}}>
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

              
              
              
          </div> */}

<div className='w-[95%] mx-auto min-h-10 mt-20 sm:mt-14 md:mt-7 shadow-2xl rounded-xl px-10 border-2' style={{backgroundColor:"#FFF5EA"}}>
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
                      <p className='mt-4 sm:mt-6 mb-4 sm:mb-4 text-sm sm:text-base leading-6 sm:leading-8 text-justify pr-6'>
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
                      <p className='mt-4 sm:mt-6 mb-4 sm:mb-4 text-sm sm:text-base leading-6 sm:leading-8 text-justify pr-6'>
                      We never sleep, so your business doesn't have to. MPCL offers industry-leading, 24/7 support to ensure your needs are met around the clock. No matter the time, our dedicated team is here to assist you.
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
                      <p className='mt-4 sm:mt-6 mb-6 text-sm sm:text-base leading-6 sm:leading-8 text-justify pr-6'>
                      Your peace of mind is our priority. MPCL offers industry-leading secure services, ensuring your valuables reach their destination safely and protected. We go the extra mile to guarantee the security of your goods.
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
