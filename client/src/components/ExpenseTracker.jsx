import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

const ExpenseTracker = ({ tripId }) => {
  const [expenses, setExpenses] = useState([]);
  const [newExpense, setNewExpense] = useState({
    amount: '',
    category: '',
    description: ''
  });

  useEffect(() => {
    fetchExpenses();
  }, [tripId]);

  const fetchExpenses = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`http://localhost:3000/api/expenses/${tripId}`, {
        headers: {
          'Authorization': token
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch expenses');
      }

      const data = await response.json();
      setExpenses(data.expenses);
    } catch (error) {
      console.error('Error fetching expenses:', error);
      toast.error('Failed to load expenses');
    }
  };

  const handleInputChange = (e) => {
    setNewExpense({
      ...newExpense,
      [e.target.name]: e.target.value
    });
  };

  const handleAddExpense = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:3000/api/expenses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token
        },
        body: JSON.stringify({
          ...newExpense,
          tripId
        })
      });

      if (!response.ok) {
        throw new Error('Failed to add expense');
      }

      toast.success('Expense added successfully');
      setNewExpense({ amount: '', category: '', description: '' });
      fetchExpenses();
    } catch (error) {
      console.error('Error adding expense:', error);
      toast.error('Failed to add expense');
    }
  };

  const handleDeleteExpense = async (expenseId) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`http://localhost:3000/api/expenses/${expenseId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': token
        }
      });

      if (!response.ok) {
        throw new Error('Failed to delete expense');
      }

      toast.success('Expense deleted successfully');
      fetchExpenses();
    } catch (error) {
      console.error('Error deleting expense:', error);
      toast.error('Failed to delete expense');
    }
  };

  const calculateTotalExpense = () => {
    return expenses.reduce((total, expense) => total + expense.amount, 0);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">Expense Tracker</h3>
      <form onSubmit={handleAddExpense} className="mb-6">
        <div className="flex flex-wrap -mx-3 mb-4">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <input
              type="number"
              name="amount"
              value={newExpense.amount}
              onChange={handleInputChange}
              placeholder="Amount"
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <input
              type="text"
              name="category"
              value={newExpense.category}
              onChange={handleInputChange}
              placeholder="Category"
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <input
              type="text"
              name="description"
              value={newExpense.description}
              onChange={handleInputChange}
              placeholder="Description"
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
          Add Expense
        </button>
      </form>
      <div className="mb-6">
        <h4 className="text-xl font-semibold mb-2">Total Expenses: ${calculateTotalExpense()}</h4>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2">Amount</th>
              <th className="px-4 py-2">Category</th>
              <th className="px-4 py-2">Description</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => (
              <tr key={expense._id}>
                <td className="border px-4 py-2">${expense.amount}</td>
                <td className="border px-4 py-2">{expense.category}</td>
                <td className="border px-4 py-2">{expense.description}</td>
                <td className="border px-4 py-2">{new Date(expense.date).toLocaleDateString()}</td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => handleDeleteExpense(expense._id)}
                    className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExpenseTracker;