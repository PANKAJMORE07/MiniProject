import React , {useEffect, useState} from 'react';


const LocalCuisine = ({ localCuisine }) => {


  return (
  <div className="bg-white rounded-lg shadow-md p-6">
    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Local Cuisine</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {localCuisine.map((dish, index) => (
        <div key={index} className="border rounded-lg overflow-hidden">
          <div className="p-4">
            <h4 className="font-semibold text-lg mb-2">{dish.name}</h4>
            <p className="text-gray-600 mb-2">{dish.description}</p>
            <p className="text-sm text-gray-500">Estimated cost: {dish.estimatedCost}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
)};

export default LocalCuisine;