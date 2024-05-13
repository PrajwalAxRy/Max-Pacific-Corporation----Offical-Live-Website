import React from 'react';
import './textImage.css'; // Adjust the path as necessary

const TextImage = ({ title = 'Services', images }) => {
  return (
    <div className="w-full min-h-10 pb-16 bg-gray-100">
      <div className="px-4 md:px-20 pb-16 justify-center w-11/12 rounded-3xl min-h-4 items-center mx-auto bg-customBlack">
        <div className="text-center text-2xl md:text-4xl pt-12 text-white font-bold mb-[-50px]" style={{ fontFamily: 'Inter' }}>
          {title}
        </div>
        <div>
          {images.map((image, index) => (
            <div key={index} className={`flex flex-col md:flex-row pt-10 justify-between items-center mt-16 ${image.direction === 'left' ? '' : 'md:flex-row-reverse'}`}>
              <div className='w-full md:w-1/2'>
                <div className='text-xl md:text-2xl pl-4 md:pl-10 text-white font-semibold' style={{ fontFamily: 'Inter' }}>
                  {image.heading}
                </div>
                <div className='flex'>
                  <div className='bg-orange-600 h-1.5 ml-4 md:ml-10 mt-1.5' style={{ width: '12rem' }}></div>
                  <div className='bg-orange-600 h-1.5 ml-2 mt-1.5' style={{ width: '0.5rem' }}></div>
                </div>
                <div className='text-justify text-white text-xs sm:text-lg md:text-base lg:text-base pl-4 md:pl-10 pr-4 md:pr-10 mt-5' style={{ fontFamily: 'Inter', fontWeight: 300 }}>
                  {image.description.split('<br />').map((text, index) => (
                    <React.Fragment key={index}>
                      {text}
                      <br />
                    </React.Fragment>
                  ))}
                </div>
              </div>
              <div className="w-full md:w-1/2 px-4 md:px-0">
                <img className='rounded-2xl mt-2 w-full h-auto' src={image.url} alt={image.heading} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TextImage;
