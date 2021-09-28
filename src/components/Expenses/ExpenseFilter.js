import React from 'react';
import Card from '../UI/Card';
import './ExpenseFilter.css';

const ExpenseFilter = ({ selected, onSaveFilter }) => {
  //   const [filteredYear, setFilteredYear] = React.useState('');

  const onSaveFilterHandler = (event) => {
    // setFilteredYear(event.target.value);
    // onSaveFilter(filteredYear);

    onSaveFilter(event.target.value);
  };

  return (
    <Card className='filter-box'>
      <div>
        <h2>Filter by year</h2>
        <select onChange={onSaveFilterHandler} value={selected}>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
      <div></div>
    </Card>
  );
};

export default ExpenseFilter;
