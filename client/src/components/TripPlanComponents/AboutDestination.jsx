import React , {useEffect, useState} from 'react';
import {GetPhotoReference} from '../Images/PhotosAPI';

const AboutDestination = ({ destination, about }) => {
   
  const [photoReference, setPhotoReference] = useState(null);
    
   useEffect(() => {
        const fetchPhoto = async () => {
          try {
           
            const photoReference = await GetPhotoReference(destination, destination);
            console.log(photoReference);
            setPhotoReference(photoReference);

            
          } catch (error) {
            console.error('Error fetching photo:', error);
          }
        };
    
        fetchPhoto();
      }, [destination]);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={`https://maps.gomaps.pro/maps/api/place/photo?photo_reference=${photoReference}&maxwidth=400&key=AlzaSy-Qcpa7t4gYVVt4YfpRfhZ2uI_QFWpER0w`} alt={destination} className="w-full h-64 md:h-80 object-cover" />
      <div className="p-6">
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">About {destination}</h3>
      <p className="text-gray-600">{about}</p>
    </div>
  </div>
  )
};

export default AboutDestination;