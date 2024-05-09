import React from 'react';
import './stylesBlogSection.css';

function TeamCard({ image, name, designation, description, onClick }) {
  return (
    <div onClick={onClick}>
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
            </div>
        </div>
    </div>
  );
}

export default TeamCard;
