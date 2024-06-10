import React, { useState } from 'react';

function TrackShipment() {
    const [inputNumber, setInputNumber] = useState('')

    const handleInputChange = (event) => {
      setInputNumber(event.target.value);
    };

    const handleTrack = () => {
      window.open(`https://www.maxpacific.org/Magix/cNoteTracking.htm?CNOTENO=${inputNumber}`, '_blank');
    };
  
  return (
    <div>

      <div className='w-11/12 mx-auto'>
        <h1 className='mt-11 font-extrabold text-2xl md:text-5xl'>Track Shipment</h1>
        <h2 className='w-full sm:w-10/12 md:w-3/4 mt-6 font-normal text-base sm:text-lg md:text-2xl text-customBlack text-justify'>
        Welcome to MPCL Shipment Tracking Portal: Enter your unique tracking number, and gain real time insights into your package’s journey—from dispatch to delivery
        </h2>
      </div>

      <div className='w-full mt-8 py-8' style={{backgroundColor: '#F7F7F7'}}>
        <div className='w-11/12 bg-white pl-10 py-8 rounded-lg overflow-hidden mx-auto'>
          <div className=' text-sm sm:text-base md:text-lg font-medium'>Enter Shipment Number:</div>
          <div className='flex gap-1 sm:gap-3 md:gap-6 mt-6'>
            <input type='text' className='w-5/12 sm:w-5/12 md:w-4/12 p-2 border-2 border-gray-200 rounded-lg' 
              value={inputNumber}
              onChange={handleInputChange} />
            
            <button 
              className={`w-4/12 sm:w-4/12 md:w-2/12 text-white text-xs sm:text-sm md:text-base font-medium p-2 rounded-md transition duration-300 ${
                inputNumber ? 'bg-slate-500 hover:bg-customBlack' : 'bg-gray-300 cursor-not-allowed'
              }`} 
              onClick={handleTrack}
              disabled={!inputNumber}
            >
              Track
            </button>
          
          </div>

        </div>
      </div>
      
    </div>
  )
}

export default TrackShipment