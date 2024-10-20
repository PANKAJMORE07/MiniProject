const mongoose = require('mongoose');
require('dotenv').config();

const mongo_url = process.env.MONGO_URL;

const connectDB = async () => {
    try {
        await mongoose.connect(mongo_url);
        console.log('MongoDB connected');
    } catch (error) {

        console.log("Not connected", error);
    }
};

connectDB();