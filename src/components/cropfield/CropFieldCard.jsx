// src/components/ParcelCard.js
import React from 'react';

const CropFieldCard = ({ name, location, timeSpent, totalTime, progress }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-gray-500">{location}</p>
      <div className="my-2">
        <span className="text-red-500 text-xl font-bold">{timeSpent}</span>
        <span className="text-gray-400"> / {totalTime}</span>
      </div>
      <div className="relative pt-1">
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
          <div style={{ width: `${progress}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"></div>
        </div>
      </div>
      <div className="text-right">
        <span className="text-gray-600">{progress}%</span>
      </div>
    </div>
  );
};

export default CropFieldCard;
