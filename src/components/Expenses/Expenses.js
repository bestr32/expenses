import React from 'react';

import './Expenses.css';
import Card from '../UI/Card';
import ExpensesList from './ExpensesList';
import NewExpense from '../NewExpense/NewExpense';
import ExpenseFilter from './ExpenseFilter';
import ExpensesChart from './ExpensesChart';

const Expenses = ({ expenses, addExpenseData }) => {
  const [filter, setFilter] = React.useState('2020');

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = { ...enteredExpenseData, id: Math.random().toString() };

    addExpenseData(expenseData);
  };

  const saveExpenseFilterHandler = (enteredFilter) => {
    setFilter(enteredFilter);
  };

  let filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filter
  );

  return (
    <Card className='expenses'>
      <NewExpense onSaveExpenseData={saveExpenseDataHandler}></NewExpense>
      <ExpenseFilter
        selected={filter}
        onSaveFilter={saveExpenseFilterHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <hr />

      <ExpensesList filteredExpenses={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
