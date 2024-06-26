
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

import toUseBg from '../assests/useTransporation.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelopeOpen, faLocationDot ,faArrowRightFromBracket,faRoute, faChartSimple, faTruckPickup, faComment, faFileClipboard, faMoneyCheck, faDownload, faMapMarkerAlt, faMapLocation } from "@fortawesome/free-solid-svg-icons";

import googleMaps from '../assests/googleMaps.png'

const Contact = () => {

  const { register, handleSubmit, formState: {errors} } = useForm();

  const [clicked, setClicked] = useState(false);

  console.log("errors", errors)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: '',
    reason: ''
  });

  const listIndex = ["Get Quote","General Queries", "Feedback", "Complaints", "Others"];
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  //TODO: Here we will write our code to submit the form and sent data to the server.
  const handleFormSubmit = async (data) => {
    try {
      console.log('Submitting form data:', data); // Added for debugging
      const response = await axios.post('http://localhost:3001/send-email', data);
      console.log('Email sent successfully:', response.data);
      //Add an alert that the email is sent
      alert('Email sent successfully');
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Email sent unsuccessfully');
    }
  };

  const handleClickMap = () => {
    // Navigate to Google Maps URL in a new tab
    window.open('https://www.google.co.in/maps/place/MAX+PACIFIC+CORPORATION+LTD.+(MPCL)/@28.419624,77.035232,17z/data=!3m1!4b1!4m6!3m5!1s0x390d17fb741ff7ad:0x85082512912bc80a!8m2!3d28.419624!4d77.0378069!16s%2Fg%2F11by_mxjb4?entry=ttu', '_blank');
    // Update state to indicate the click
    setClicked(true);
  };

  return (

    <div className='w-full flex items-center justify-center' style={{ backgroundColor: 'rgba(31, 41, 55, 0.3)', fontFamily: "Helvetica, Arial, sans-serif" }}>
    {/* <div className='w-full h-screen flex items-center justify-center -mt-3' style={{ height: 'calc(100vh - 75px)', backgroundImage: `url(${toUseBg})`, backgroundSize: 'cover', backgroundPosition: 'center', fontFamily: "Helvetica, Arial, sans-serif" }}> */}
      <div className=" w-9/12 rounded-md block md:flex justify-center px-10 mt-10 mb-10 p-5 gap-5 bg-white py-16">
        <div className="w-full md:w-1/2  space-y-4">
          <h1 className="text-lg md:text-2xl font-bold text-blue-950">Contact Us</h1>
          <p className="text-gray-800  text-sm md:text-base">We're here to help and answer any question you might have. We look forward to hearing from you. 
            <br />
            <br />
            For any queries, please feel free to contact us through the following channels:
              <div className="bg-orange-100 border-l-8 text-xs sm:text-base md:text-lg border-orange-500 px-4 py-3 mb-5 w-auto sm:w-10/12 mt-5">
              <FontAwesomeIcon className="h-3 w-3 sm:h-4 sm:w-4 items-center justify-center mr-2 text-orange-600" icon={faPhone} />
                <strong className="text-orange-600">Phone No:</strong> <span className="text-gray-800 text-nowrap">+91 9311-776-886</span>
              </div>

              <div className="bg-orange-100 border-l-8 border-orange-500 text-xs sm:text-base md:text-lg px-4 py-3 mb-5 w-auto sm:w-10/12">
                <FontAwesomeIcon className="h-3 w-3 sm:h-5 sm:w-5 items-center justify-center mr-2 text-orange-600" icon={faEnvelopeOpen} />
                <strong className="text-orange-600">Email ID:</strong> <span className="text-gray-800">info@mpclgroup.com</span>
              </div> 

              <div className="bg-orange-100 border-l-8 border-orange-500 text-xs sm:text-base md:text-lg px-4 py-3 w-auto sm:w-10/12">
              <FontAwesomeIcon className="h-3 w-3 sm:h-5 sm:w-5 items-center justify-center -mt-1 mr-2 text-orange-600" icon={faLocationDot} />
                <strong className="text-orange-600 overflow-hidden">Location:</strong> <span className="text-gray-700 text-nowrap">JMD Megapolis</span>
                <img src={googleMaps} onClick={handleClickMap} className='cursor-pointer items-center justify-center h-5 sm:h-6 md:h-8 inline ml-3'  alt="Link redirecting to Google Maps" />
              </div> 

          </p>
        </div>


        <form onSubmit={handleSubmit(handleFormSubmit)} className="w-full md:w-1/2 mt-10 md:mt-0 space-y-4">
          <div className='flex gap-5'>
            <label className="block text-blue-950 font-bold flex-1">
              Name:
              <input {...register("username", {
                required: 'Username is required',
                minLength: {
                  value: 3,
                  message: 'Username should be minimum 3 characters'
                },
                maxLength: {
                  value: 30,
                  message: 'Username should be maximum 30 characters'
                }
              })} placeholder='Username' className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
              <p className=' text-red-500 text-xs pt-1 pl-1'>{errors.username?.message}</p>
            </label>

            <label className="block text-blue-950 font-bold flex-1">
              Phone No:
              <input {...register("phoneNumber", {
                  required: 'Enter a valid phone number of 10 digits',
                  pattern: {
                    value: /^\d{10}$/,
                    message: 'Enter a valid phone number of 10 digits'
                  }
                })} placeholder='xxxx-xxx-xxx' className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />

              <p className=' text-red-500 text-xs pt-1 pl-1'>{errors.phoneNumber?.message}</p>
            </label>
          </div>
          
          <label className="block text-blue-950 font-bold">
            Email:
            <input {...register("email", {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: 'Write a email address'
              }  
            })} placeholder='xxxx@yyy.zz' type="email" id="email" name="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
            <p className=' text-red-500 text-xs pt-1 pl-1'>{errors.email?.message}</p>
          </label>
          
          <label className="block">
            <p className='text-blue-950 font-bold'>Category</p>
            <select {...register("reason")} name="reason" value={formData.reason} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
              {listIndex.map(reason => (
                <option key={reason} value={reason}>{reason}</option>
              ))}
            </select>
          </label>

          <label className="block text-blue-950 font-bold">
            Description:
            <textarea {...register("description", {
              required: 'Please enter your message'
            })} placeholder='Enter your message' name="description" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></textarea>
            <p className=' text-red-500 text-xs pt-1 pl-1'>{errors.description?.message}</p>
          </label>
          
          <button className=" w-full mx-auto w-80 shadow bg-orange-400 hover:bg-orange-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type='submit'>
          Submit
          </button>      
        </form>

      </div>
    </div>
  );
}

export default Contact