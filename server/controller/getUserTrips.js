const Trip = require("../Models/Trip");

const getUserTrips = async (req, res) => {
  try {
    const userId = req.user._id; // Get the user ID from the authenticated request

    // Fetch all trips associated with the user
    const trips = await Trip.find({ user: userId });

    res.status(200).json({
      message: "User trips retrieved successfully",
      trips: trips
    });
  } catch (error) {
    console.error("Error fetching user trips:", error);
    res.status(500).json({
      error: "Failed to fetch user trips",
      details: error.message
    });
  }
};

module.exports = getUserTrips;