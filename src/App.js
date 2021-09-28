import './App.css';
import React from 'react';

import Expenses from './components/Expenses/Expenses';

const App = () => {
  const [expenses, setExpenses] = React.useState([
    {
      id: 'e1',
      title: 'Toilet Paper',
      price: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', price: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      price: 294.6,
      date: new Date(2021, 2, 28),
    },
  ]);

  const addExpenseHandler = (expenseData) => {
    setExpenses((prevExpenses) => [...prevExpenses, expenseData]);
  };

  return (
    <>
      <h1 className='top-heading'>Expenses Tracker</h1>
      <Expenses
        expenses={expenses}
        addExpenseData={addExpenseHandler}
      ></Expenses>
    </>
  );
};

export default App;
