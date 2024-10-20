import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const UserProfile = () => {
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserTrips = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch('http://localhost:3000/api/user-trips', {
          headers: {
            'Authorization': token
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch user trips');
        }

        const data = await response.json();
        setTrips(data.trips);
      } catch (error) {
        console.error('Error fetching user trips:', error);
        setError('Failed to load trips. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchUserTrips();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Your Trips</h1>
      {trips.length === 0 ? (
        <p>You haven't created any trips yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trips.map((trip) => (
            <div key={trip._id} className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-2">{trip.destination}</h2>
              <p className="text-gray-600 mb-2">Duration: {trip.duration} days</p>
              <p className="text-gray-600 mb-4">Budget: ${trip.budget}</p>
              <Link to={`/trip/${trip._id}`} className="text-blue-500 hover:underline">
                View Details
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserProfile;