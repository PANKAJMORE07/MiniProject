import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TripPlan from './TripPlan';
import ExpenseTracker from './ExpenseTracker';

const TripDetails = () => {
  const [trip, setTrip] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchTripDetails = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch(`http://localhost:3000/api/trip/${id}`, {
          headers: {
            'Authorization': token
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch trip details');
        }

        const data = await response.json();
        setTrip(data.trip);
      } catch (error) {
        console.error('Error fetching trip details:', error);
        setError('Failed to load trip details. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchTripDetails();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Trip Details</h1>
      {trip && <TripPlan plan={trip} />}
      {trip && <ExpenseTracker tripId={trip._id} />}
    </div>
  );
};

export default TripDetails;