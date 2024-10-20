const express = require('express');
require('./connection/connect.js');
const authRoutes = require('./routes/auth.js');
const profileRoutes = require('./routes/Profile.js');
const generateTripRoutes = require('./routes/Generate-Trip.js');

const cors = require('cors');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.use("/auth", authRoutes);
app.use("/profile", profileRoutes);
app.use("/api", generateTripRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
