import React, { useState } from 'react';
import axios from 'axios';
import FreightCharge from '../components/freightCharge';

import Lottie from 'react-lottie';
import animationData from '../assests/loading.json';

function FreightCalculator() {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [weight, setWeight] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const [freightCharge, setFreightCharge] = useState(0);
  const [documentCharge, setDocumentCharge] = useState(0);
  const [FOVCharge, setFOVCharge] = useState(0);
  const [ToPayCharge, setToPayCharge] = useState(0);
  const [ODACharge, setODACharge] = useState(0);
  const [taxableAmount, setTaxableAmount] = useState(0);
  const [GSTCharge, setGSTCharge] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  
  const [breakdown, setBreakdown] = useState(false);
  const [breakdownText, setBreakdownText] = useState('See Breakdown');
  const [servicable, setServicable] = useState(true);

  const rows = [
    { productName: 'Freight Charges', cost: freightCharge },
    { productName: 'Document Charges', cost: documentCharge },
    { productName: 'FOV Charges', cost: FOVCharge },
    { productName: 'To Pay Charge', cost: ToPayCharge },
    { productName: 'ODA Charge', cost: ODACharge },
    { productName: 'Taxable Amount', cost: taxableAmount },
    { productName: 'GST', cost: GSTCharge },
    { productName: 'Total Cost', cost: totalCost },
  ];

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMinYMid slice', // Adjusted from 'xMidYMid slice' to 'xMinYMid slice'
    },
  };

  const validateInputs = () => {
    if (!origin || !destination) {
      setError('Pincode for both origin and destination fields required.');
      return false;
    }
    if (origin.length !== 6 || destination.length !== 6 || isNaN(origin) || isNaN(destination)) {
      setError('Please enter a valid 6 digit pincode.');
      return false;
    }
    if (!weight || isNaN(weight) || weight <= 0 || weight > 9999) {
      setError('Please enter a valid weight in Kgs.');
      return false;
    }
    setError('');
    return true;
  };

  const handleSubmit = async () => {
    if (validateInputs()) {
      setLoading(true); // Set loading to true when the API call starts
      try {
        const obj = {
          CID: "MAXPACIFIC",
          ORIGIN: origin.toString(),
          DESTINATION: destination.toString(),
          WEIGHT: weight.toString(),
        };
        const response = await axios.get('http://www.maxpacific.net/Magix/rest/operation/freightCalc.htm', {
          params: obj,
        });
  
        const data = response.data[0];
        console.log(data);
  
        if (data.Response === 'Failed') {
          setServicable(false);
        } else {
          setServicable(true);
          setFreightCharge(Number(data.FreightCharge));
          setDocumentCharge(Number(data.DocCharge));
          setFOVCharge(Number(data.FovCharge));
          setToPayCharge(data.ToPayCharge);
          setODACharge(data.OdaCharge);
          setTaxableAmount(data.TaxableAmt);
          setGSTCharge(data.GstAmt);
          setTotalCost(data.NetFreight);
        }
      } catch (error) {
        setError('Failed to fetch data from the API.');
        console.error(error);
      } finally {
        setLoading(false); // Set loading to false when the API call completes
      }
    }
  };

  const handleBreakdown = () => {
    setBreakdown(!breakdown);
    setBreakdownText(breakdown ? 'See Breakdown' : 'Hide Breakdown');
  };

  return (
    <div>
      <div className='w-11/12 mx-auto'>
        <h1 className='mt-11 font-extrabold text-2xl md:text-5xl'>Freight Charges</h1>
        <h2 className='w-full sm:w-10/12 md:w-3/4 mt-6 font-normal text-base sm:text-lg md:text-2xl text-customBlack text-justify'>
          Our Freight Charge Calculator simplifies the process of estimating shipping costs for your cargo. Input the relevant details - such as weight, dimensions, origin, and destination - and instantly receive an estimated freight quote.
        </h2>
      </div>

      <div className='w-full mt-8 py-8' style={{ backgroundColor: '#F7F7F7' }}>
        <div className='w-11/12 bg-white pl-10 py-8 rounded-lg overflow-hidden mx-auto'>
          <div className='text-lg sm:text-2xl lg:text-3xl font-medium pl-2 mx-auto text-center mb-14' style={{ fontFamily: '"Roboto Mono", monospace', fontOpticalSizing: 'auto', fontWeight: '500', fontStyle: 'normal' }}>Freight Calculator</div>

          <div className='flex flex-col md:flex-row md:justify-between items-center mt-8 gap-12 mx-auto pr-10 '>
            <div className='mb-4 sm:mb-0 w-full sm:w-10/12 md:w-1/4 mx-auto md:mx-0'>
              <p className='text-xs sm:text-base md:text-lg text-customBlack pl-2' style={{ fontFamily: '"Roboto Mono", monospace', fontOpticalSizing: 'auto', fontWeight: '400', fontStyle: 'normal' }}>Origin</p>
              <input
                type='text'
                value={origin}
                onChange={(e) => setOrigin(e.target.value)}
                className='border-b-2 border-gray-300 p-2 w-full focus:outline-none focus:border-blue-500'
                placeholder='Enter origin pincode'
              />
            </div>

            <div className='mb-4 sm:mb-0 w-full sm:w-10/12 md:w-1/4 mx-auto md:mx-0'>
              <p className='text-xs sm:text-base md:text-lg text-customBlack pl-2' style={{ fontFamily: '"Roboto Mono", monospace', fontOpticalSizing: 'auto', fontWeight: '400', fontStyle: 'normal' }}>Destination</p>
              <input
                type='text'
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className='border-b-2 border-gray-300 p-2 w-full focus:outline-none focus:border-blue-500'
                placeholder='Enter destination pincode'
              />
            </div>

            <div className='mb-4 sm:mb-0 w-full sm:w-10/12 md:w-1/4 mx-auto md:mx-0'>
              <p className='text-xs sm:text-base md:text-lg text-customBlack pl-2' style={{ fontFamily: '"Roboto Mono", monospace', fontOpticalSizing: 'auto', fontWeight: '400', fontStyle: 'normal' }}>Weight (Kgs) </p>
              <input
                type='text'
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className='border-b-2 border-gray-300 p-2 w-full focus:outline-none focus:border-blue-500'
                placeholder='Enter weight in kgs'
              />
            </div>

            <div className='mb-4 sm:mb-0 w-full sm:w-10/12 md:w-1/4 mx-auto md:mx-0'>
              <button
                onClick={handleSubmit}
                className=' bg-slate-700 hover:bg-customBlack w-full text-white text-xs sm:text-sm md:text-base lg:text-lg font-medium px-8 py-3 rounded-md transition duration-300'
                style={{ fontFamily: '"Roboto Mono", monospace', fontOpticalSizing: 'auto', fontWeight: '400', fontStyle: 'normal' }}>
                Get Freight
              </button>
            </div>
          </div>

          {error && <div className='text-red-500 mt-4'>{error}</div>}
          {loading ? (
            <div className='flex items-center justify-center'>
              <p className='text-orange-600 mt-12  ' style={{ fontFamily: '"Roboto Mono", monospace', fontOpticalSizing: 'auto', fontSize: '1.5rem', fontWeight: '900', fontStyle: 'normal', letterSpacing: '0em' }}>
                Please Wait 
              </p>
              <div className='flex justify-start ml-5 mt-12'>
                <Lottie options={defaultOptions} height={30} width={30} />
              </div>
            </div>
            
          ) : (
            servicable ? (
              totalCost !== 0 && (
                <div className='mb-4 pr-6 sm:mb-0 w-full sm:w-10/12 md:w-full mx-auto md:mx-0'>
                  <p className='mt-8 md:mt-16 text-base sm:text-xl md:text-2xl text-customBlack' style={{ fontFamily: '"Roboto Mono", monospace', fontOpticalSizing: 'auto', fontWeight: '500', fontStyle: 'normal' }}>
                    Your Total Freight Cost for {weight} Kgs
                  </p>
                  <div className='flex items-center gap-8 mt-2 '>
                    <p className=' text-lg sm:text-2xl md:text-4xl text-green-600' style={{ fontFamily: '"Roboto Mono", monospace', fontOpticalSizing: 'auto', fontWeight: '900', fontStyle: 'normal', letterSpacing: '0em' }}>
                      ₹{totalCost}/- Only
                    </p>
                  <div className='underline underline-offset-4 text-slate-400 cursor-pointer text-xs sm:text-base' onClick={handleBreakdown}>
                      {breakdownText}
                    </div>
                  </div>
                  {breakdown && (
                    <div className='mt-8 pr-0 md:pr-10'>
                      <div className='mt-6'>
                        <FreightCharge rows={rows} />
                      </div>
                    </div>
                  )}
                </div>
              )
            ) : (
            <div className='mb-4 pr-6 sm:mb-0 w-full sm:w-10/12 md:w-full mx-auto md:mx-0'>
              <p className='mt-8 md:mt-16 text-base sm:text-xl md:text-2xl text-customBlack' style={{ fontFamily: '"Roboto Mono", monospace', fontOpticalSizing: 'auto', fontWeight: '500', fontStyle: 'normal' }}>
                Your Total Freight Cost for {weight} Kgs
              </p>

              <p className='mt-2 md:mt-4 text-xl sm:text-2xl md:text-4xl text-red-600' style={{ fontFamily: '"Roboto Mono", monospace', fontOpticalSizing: 'auto', fontWeight: '900', fontStyle: 'normal', letterSpacing: '0em' }}>
                  Area Not Servicable
              </p>
            </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default FreightCalculator;


