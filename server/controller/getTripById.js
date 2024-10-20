const Trip = require("../Models/Trip");

const getTripById = async (req, res) => {
  try {
    const tripId = req.params.id;
    const trip = await Trip.findById(tripId);

    if (!trip) {
      return res.status(404).json({
        message: "Trip not found",
        success: false
      });
    }

    res.status(200).json({
      message: "Trip retrieved successfully",
      success: true,
      trip: trip
    });
  } catch (error) {
    console.error("Error fetching trip:", error);
    res.status(500).json({
      error: "Failed to fetch trip",
      details: error.message,
      success: false
    });
  }
};

module.exports = getTripById;