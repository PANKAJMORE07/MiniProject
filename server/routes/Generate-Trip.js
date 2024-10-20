const express = require('express');
const router = express.Router();
const generateTrip = require('../controller/GenerateTrip');
const { ensureAuthentication } = require('../Middlewares/Auth');
const storeTrip = require('../controller/StoreTripCont');
const getUserTrips = require('../controller/getUserTrips');
const getTripById = require('../controller/getTripById');
const { addExpense, getExpenses, deleteExpense } = require('../controller/ExpenseController');

// Generate Trip
router.post('/generate-trip-plan', generateTrip);
router.post('/store-trip', ensureAuthentication, storeTrip);
router.get('/user-trips', ensureAuthentication, getUserTrips);
router.get('/trip/:id', ensureAuthentication, getTripById);

//Expense Routes
router.post('/expenses', ensureAuthentication, addExpense);
router.get('/expenses/:tripId', ensureAuthentication, getExpenses);
router.delete('/expenses/:expenseId', ensureAuthentication, deleteExpense);

module.exports = router;
