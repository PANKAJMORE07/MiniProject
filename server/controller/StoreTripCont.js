const Trip = require("../Models/Trip");

const storeTrip = async (req, res) => {
  try {
    console.log('Received trip data:', req.body); 
    const tripData = req.body;
    const userId = req.user._id; // Assuming you have user authentication middleware

    // Create a new Trip instance
    const newTrip = new Trip({
      ...tripData,
      user: userId
    });

    // Save the trip to the database
    const savedTrip = await newTrip.save();

    res.status(201).json({
      message: "Trip stored successfully",
      trip: savedTrip
    });
  } catch (error) {
    console.error("Error storing trip:", error);
    console.error("Error details:", error.errors);  // Add this line for mongoose validation errors
    res.status(500).json({
      error: "Failed to store trip",
      details: error.message,
      validationErrors: error.errors  // Add this line
    });
  }
};

module.exports = storeTrip;
