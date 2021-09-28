import './ExpenseItem.css';
import Card from '../UI/Card';

const ExpenseItem = ({ expenseDate, expenseTitle, expensePrice }) => {
  return (
    <Card className='expense-item'>
      <div className='expense-item__date'>{expenseDate.toDateString()}</div>
      <div className='expense-item__description'>
        <h1>{expenseTitle}</h1>
        <div className='expense-item__price'>${expensePrice}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
