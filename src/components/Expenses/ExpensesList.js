import React from 'react';
import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

const ExpensesList = ({ filteredExpenses }) => {
  if (filteredExpenses.length === 0) {
    return <p className='empty-expenses'>No expenses found.</p>;
  }

  return (
    <ul className='expenses-list'>
      {filteredExpenses.map((expense) => {
        return (
          <li key={expense.id}>
            <ExpenseItem
              expenseDate={expense.date}
              expenseTitle={expense.title}
              expensePrice={expense.price}
            ></ExpenseItem>
          </li>
        );
      })}
    </ul>
  );
};

export default ExpensesList;
