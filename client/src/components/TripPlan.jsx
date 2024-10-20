import React from 'react';
import AboutDestination from './TripPlanComponents/AboutDestination';
import TopPlaces from './TripPlanComponents/TopPlaces';
import RecommendedHotels from './TripPlanComponents/RecommendedHotels';
import Itinerary from './TripPlanComponents/Itinerary';
import BestTimeToVisit from './TripPlanComponents/BestTimeToVisit';
import LocalCuisine from './TripPlanComponents/LocalCuisine';
import BudgetBreakdown from './TripPlanComponents/BudgetBreakdown';

const TripPlan = ({ plan }) => {
  if (!plan) return null;

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">Your Trip Plan to {plan.destination}</h2>
        
        <div className="flex flex-col  gap-8">
          <AboutDestination destination={plan.destination} about={plan.about}/>
          <TopPlaces destination={plan.destination} places={plan.topPlaces} />
          <RecommendedHotels destination={plan.destination} hotels={plan.hotels} />
          <Itinerary itinerary={plan.itinerary} />
          <BestTimeToVisit bestTimeToVisit={plan.bestTimeToVisit} />
          <LocalCuisine localCuisine={plan.localCuisine} />
          <BudgetBreakdown budgetBreakdown={plan.budgetBreakdown} />
        </div>
      </div>
    </div>
  );
};

export default TripPlan;