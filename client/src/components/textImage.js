import React from 'react';

const TextImage = ({ title = 'Services', images }) => {
  return (
    <div>
      <div className='w-full min-h-10 pb-16' style={{backgroundColor: '#F7F7F7'}}>
        <div className='text-white px-20 pb-16 justify-center w-11/12 rounded-3xl min-h-4 items-center mx-auto' style={{backgroundColor: '#060B22'}}>
          <div className='text-white text-center text-4xl pt-10' style={{color: 'white', fontFamily: 'Inter', fontWeight: 800}}>
            {title}
          </div>
          <div>
            {images.map((image, index) => (
              <div key={index} className={`flex pt-10 justify-between items-center justify-center mt-16 ${image.direction === 'left' ? '' : 'flex-row-reverse'}`}>
                <div className='w-1/2'>
                  <div className='text-2xl pl-10' style={{color: 'white', fontFamily: 'Inter', fontWeight: 600}}>
                    {image.heading}
                  </div>
                  <div className='flex'>
                    <div className='w-48 bg-orange-600 h-1.5 ml-10 mt-1.5 pl-10'></div>
                    <div className='w-2 bg-orange-600 h-1.5 ml-2 mt-1.5'></div>
                  </div>
                  <div className=' text-justify text-white text-lg pl-10 pr-10 mt-5' style={{fontFamily: 'Inter', fontWeight: 300}}>
                  {image.description.split('<br />').map((text, index) => (
                    <React.Fragment key={index}>
                        {text}
                        <br /> {/* Line break after each segment */}
                    </React.Fragment>
                    ))}
                  </div>
                </div>

                <div>
                  <img className=' rounded-2xl' style={{ height: '450px', width: '600px'}} src={image.url} alt={image.heading} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TextImage;
