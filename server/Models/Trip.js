const mongoose = require('mongoose');

const topPlaceSchema = new mongoose.Schema({
  name: String,
  description: String,
  cost: String
});

const hotelSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: String
});

const itineraryItemSchema = new mongoose.Schema({
  day: String,
  morning: String,
  afternoon: String,
  evening: String
});

const localCuisineSchema = new mongoose.Schema({
  name: String,
  description: String,
  cost: String
});

const budgetBreakdownSchema = new mongoose.Schema({
  accommodation: String,
  food: String,
  activities: String,
  transportation: String,
  miscellaneous: String
});

const tripSchema = new mongoose.Schema({
  destination: {
    type: String,
   
  },
  budget: {
    type: Number,
    
  },
  duration: {
    type: Number,
    
  },
  travelStyle: {
    type: String,
     
  },
  activities: {
    type: [String],
  },
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  about: String,
  topPlaces: [topPlaceSchema],
  hotels: [hotelSchema],
  itinerary: [itineraryItemSchema],
  bestTimeToVisit: String,
  localCuisine: [localCuisineSchema],
  budgetBreakdown: budgetBreakdownSchema,
  
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

const Trip = mongoose.model('Trip', tripSchema);

module.exports = Trip;
