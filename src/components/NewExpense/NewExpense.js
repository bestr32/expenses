import React from 'react';
import Card from '../UI/Card';
import '../Expenses/ExpenseItem.css';
// import styles from '../NewExpense/NewExpense.module.css';
import './NewExpense.css';

const NewExpense = ({ onSaveExpenseData }) => {
  const [displayForm, setDisplayForm] = React.useState(false);
  const [enteredTitle, setEnteredTitle] = React.useState('');
  const [enteredPrice, setEnteredPrice] = React.useState('');
  const [enteredDate, setEnteredDate] = React.useState(
    new Date().toISOString().substring(0, 10)
  );

  const resetForm = () => {
    setEnteredTitle('');
    setEnteredPrice('');
    setEnteredDate(new Date().toISOString().substring(0, 10));
  };

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const priceChangeHandler = (event) => {
    setEnteredPrice(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      price: +enteredPrice,
      date: new Date(enteredDate),
    };

    onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredPrice('');
  };

  return (
    <Card className='expense-item expense-form'>
      {displayForm === true ? (
        <form onSubmit={submitHandler}>
          <div className='expense-item__date expense-form__date'>
            <input
              className='expense-form__date--input'
              type='date'
              min='2019-01-01'
              max='2022-12-31'
              name='date'
              value={enteredDate}
              onChange={dateChangeHandler}
            />
          </div>
          <div className='expense-item__description'>
            <input
              className='expense-form__title--input'
              type='text'
              name='title'
              id='title'
              placeholder='Title'
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
            <div className='expense-item__price expense-form__price'>
              <input
                className='expense-form__price--input'
                type='number'
                min='0.01'
                max='99999'
                step='0.01'
                name='price'
                placeholder='0.01'
                value={enteredPrice}
                onChange={priceChangeHandler}
              />
              USD
            </div>
          </div>
          <div className='flex-centerize'>
            <button
              className='btn'
              type='button'
              onClick={() => {
                setDisplayForm(false);
                resetForm();
              }}
            >
              Cancel
            </button>
            <button className='btn' type='submit'>
              Add Expense
            </button>
          </div>
        </form>
      ) : (
        <div className='flex-centerize'>
          <button
            style={{ marginTop: '1rem' }}
            className='btn'
            onClick={() => setDisplayForm(true)}
          >
            Add New Expense
          </button>
        </div>
      )}
    </Card>
  );
};

export default NewExpense;
