const Expense = require('../Models/Expense');

exports.addExpense = async (req, res) => {
  try {
    const { tripId, amount, category, description } = req.body;
    const userId = req.user._id;

    const newExpense = new Expense({
      user: userId,
      trip: tripId,
      amount,
      category,
      description
    });

    await newExpense.save();

    res.status(201).json({
      message: 'Expense added successfully',
      expense: newExpense
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error adding expense',
      error: error.message
    });
  }
};

exports.getExpenses = async (req, res) => {
  try {
    const { tripId } = req.params;
    const userId = req.user._id;

    const expenses = await Expense.find({ user: userId, trip: tripId });

    res.status(200).json({
      expenses
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error fetching expenses',
      error: error.message
    });
  }
};

exports.deleteExpense = async (req, res) => {
  try {
    const { expenseId } = req.params;
    const userId = req.user._id;

    const expense = await Expense.findOneAndDelete({ _id: expenseId, user: userId });

    if (!expense) {
      return res.status(404).json({
        message: 'Expense not found or you do not have permission to delete it'
      });
    }

    res.status(200).json({
      message: 'Expense deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error deleting expense',
      error: error.message
    });
  }
};