import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';



import './stylesBlogSection.css';

function TeamCard({ image, name, designation, description, onClickX, onClickLinkedIn, onClickFacebook }) {
  return (
    <div>
        <div className=" max-w-72 bg-white border border-gray-200 rounded-lg shadow-md newhoverEffects">
            <div className='w-auto'>
                <img className="rounded-t-lg" src={image} alt={`${name} cover`} />
            </div>
            <div className="p-5">
                <div>
                    <h5 className="text-base sm:text-lg md:text-2xl font-bold tracking-tight text-gray-900">{name}</h5>
                </div>
                <p className="mb-3 font-medium text-gray-700 text-xs sm:text-sm  md:text-base">{designation}</p>
                <p className="font-normal text-gray-700 text-xs sm:text-sm  md:text-base  text-justify">{description}</p>
                <div className=' mt-3 flex justify-between px-5'>
                    <FontAwesomeIcon icon={faTwitter}  className=' text-blue-500 size-6 cursor-pointer' onClick={onClickX}/>
                    <FontAwesomeIcon icon={faFacebook} className=' text-blue-800 size-6 cursor-pointer' onClick={onClickFacebook} />
                    <FontAwesomeIcon icon={faLinkedin}  className='text-blue-700 size-6 cursor-pointer' onClick={onClickLinkedIn} />
                </div>
            </div>
        </div>
    </div>
  );
}

export default TeamCard;
