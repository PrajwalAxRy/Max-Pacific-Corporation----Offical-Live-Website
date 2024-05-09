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
        <h1 className='mt-11 font-extrabold text-5xl'>Track Shipment</h1>
        <h2 className='w-3/4 mt-6 font-normal text-2xl text-customBlack text-justify'>Welcome to your source for Logistics Industry Insights & Solutions! Learn interesting facts on industry transformation, covering topics from trends to service excellence and beyond.</h2>
      </div>

      <div className='mt-8 py-8 px-8' style={{backgroundColor: '#F7F7F7'}}>
        <div className='w-11/12 bg-white pl-10 py-8 rounded-lg overflow-hidden mx-auto'>
          <div className=' text-lg font-medium'>Enter Shipment Number:</div>
          <div className='flex gap-6 mt-6'>
            <input type='text' className='w-4/12 p-2 border-2 border-gray-200 rounded-lg' 
              value={inputNumber}
              onChange={handleInputChange} />
            
            <button className=' w-2/12 bg-slate-500 text-white font-medium p-2 rounded-md hover:bg-customBlack transition duration-300'
              onClick={handleTrack} >
              Track
            </button>
          
          </div>

        </div>
      </div>



    </div>
  )
}

export default TrackShipment
