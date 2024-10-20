import axios from 'axios';

const MAPBOX_ACCESS_TOKEN = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

export async function fetchHotelImages(hotelName, destination) {
  try {
    console.log(`Fetching images for ${hotelName} in ${destination}`);
    
    if (!MAPBOX_ACCESS_TOKEN) {
      console.error('MAPBOX_ACCESS_TOKEN is not set');
      return [];
    }

    const geocodingUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
      `${hotelName} ${destination}`
    )}.json?access_token=${MAPBOX_ACCESS_TOKEN}&limit=1`;

    console.log('Geocoding URL:', geocodingUrl);

    const geocodingResponse = await axios.get(geocodingUrl);

    console.log('Geocoding response:', JSON.stringify(geocodingResponse.data, null, 2));

    if (geocodingResponse.data.features.length === 0) {
      console.log('No location found for the hotel');
      return [];
    }

    const [longitude, latitude] = geocodingResponse.data.features[0].center;

    console.log(`Hotel coordinates: ${longitude}, ${latitude}`);

    // Generate static map images using Mapbox Static Images API
    const imageUrls = [
      `https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/${longitude},${latitude},14,0/400x300?access_token=${MAPBOX_ACCESS_TOKEN}`,
      `https://api.mapbox.com/styles/v1/mapbox/satellite-v9/static/${longitude},${latitude},14,0/400x300?access_token=${MAPBOX_ACCESS_TOKEN}`,
      `https://api.mapbox.com/styles/v1/mapbox/light-v10/static/${longitude},${latitude},14,0/400x300?access_token=${MAPBOX_ACCESS_TOKEN}`
    ];

    console.log('Generated image URLs:', imageUrls);

    return imageUrls;
  } catch (error) {
    console.error('Error fetching hotel images:', error.message);
    if (error.response) {
      console.error('Error response:', error.response.data);
    }
    return [];
  }
}

export const generateTripPlan = async ({ destination, duration, budget, travelStyle, interests }) => {
  try {
    console.log('Sending request to generate trip plan:', { destination, duration, budget, travelStyle, interests });
    const response = await fetch('http://localhost:5000/api/generate-trip-plan', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ destination, duration, budget, travelStyle, interests }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Server responded with an error:', errorData);
      throw new Error(errorData.error || 'Failed to generate trip plan');
    }

    const data = await response.json();
    console.log('Received trip plan:', data);
    return data;
  } catch (error) {
    console.error('Error generating trip plan:', error);
    throw error;
  }
};


