import './Card.css';

const Card = ({ children, className }) => {
  const classes = 'card ' + className;
  return <section className={classes}>{children}</section>;
};

export default Card;
