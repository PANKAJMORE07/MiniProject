import React from 'react';

const Itinerary = ({ itinerary }) => {
  // Check if itinerary is an array and not empty
  const hasItinerary = Array.isArray(itinerary) && itinerary.length > 0;

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">Itinerary</h3>
      {hasItinerary ? (
        <div className="space-y-6">
          {itinerary.map((day, index) => (
            <div key={index} className="border-b pb-4 last:border-b-0">
              <h4 className="font-semibold text-lg mb-2">Day {index + 1}</h4>
              <ul className="space-y-2">
                <li><span className="font-medium">Morning:</span> {day.morning}</li>
                <li><span className="font-medium">Afternoon:</span> {day.afternoon}</li>
                <li><span className="font-medium">Evening:</span> {day.evening}</li>
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <p>No itinerary available.</p>
      )}
    </div>
  );
};

export default Itinerary;
