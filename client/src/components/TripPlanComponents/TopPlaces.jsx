import React , {useEffect, useState} from 'react';
import {GetPhotoReference} from '../Images/PhotosAPI';

const TopPlaces = ({ destination, places }) => {
  
  const [photoReferences, setPhotoReferences] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const references = await Promise.all(
          places.map(place => GetPhotoReference(destination, place.name))
        );
        console.log('Photo references:', references);
        setPhotoReferences(references);
      } catch (error) {
        console.error('Error fetching photos:', error);
      }
    };

    fetchPhotos();
  }, [destination, places]);

  return (
  <div className="bg-white rounded-lg shadow-md p-6">
    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Top Places to Visit</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {places.map((place, index) => (
        <div key={index} className="border rounded-lg overflow-hidden">
          <img src={`https://maps.gomaps.pro/maps/api/place/photo?photo_reference=${photoReferences[index]}&maxwidth=400&key=AlzaSy-Qcpa7t4gYVVt4YfpRfhZ2uI_QFWpER0w`}
           alt={place.name} 
           className="w-full h-48 object-cover" />
          <div className="p-4">
            <h4 className="font-semibold text-lg mb-2">{place.name}</h4>
            <p className="text-gray-600 mb-2">{place.description}</p>
            <p className="text-sm text-gray-500">Estimated cost: {place.cost}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
)
};

export default TopPlaces;