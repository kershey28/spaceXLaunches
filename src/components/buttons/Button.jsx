import classes from './Button.module.css';

const Button = ({ onClick, text, style }) => {
  return (
    <button className={`${classes.container} ${style}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
