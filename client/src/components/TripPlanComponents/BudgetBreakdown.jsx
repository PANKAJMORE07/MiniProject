import React from 'react';

const BudgetBreakdown = ({ budgetBreakdown }) => (
  <div className="bg-white rounded-lg shadow-md p-6">
    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Budget Breakdown</h3>
    <ul className="space-y-2">
      {Object.entries(budgetBreakdown).map(([category, amount], index) => (
        <li key={index} className="flex justify-between items-center">
          <span className="font-medium">{category}:</span>
          <span className="text-gray-600">{amount}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default BudgetBreakdown;