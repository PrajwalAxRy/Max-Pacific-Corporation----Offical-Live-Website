import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';



import './stylesBlogSection.css';

function TeamCard({ image, name, designation, description, onClickX, onClickLinkedIn, onClickFacebook }) {
  return (
    <div>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md newhoverEffects">
            <div>
                <img className="rounded-t-lg" src={image} alt={`${name} cover`} />
            </div>
            <div className="p-5">
                <div>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900">{name}</h5>
                </div>
                <p className="mb-3 font-medium text-gray-700">{designation}</p>
                <p className="font-normal text-gray-700">{description}</p>
                <div className=' mt-3 flex justify-evenly'>
                    <FontAwesomeIcon icon={faTwitter} size="2x" className=' text-blue-500' onClick={onClickX}/>
                    <FontAwesomeIcon icon={faFacebook} size="2x" className=' text-blue-800' onClick={onClickFacebook} />
                    <FontAwesomeIcon icon={faLinkedin} size="2x" className='text-blue-700' onClick={onClickLinkedIn} />
                </div>
            </div>
        </div>
    </div>
  );
}

export default TeamCard;
