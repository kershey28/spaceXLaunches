import classes from './Link.module.css';

const Link = ({ href, onClick, text, style }) => {
  return (
    <a
      href={href}
      className={`${classes.container} ${style}`}
      onClick={onClick}
    >
      {text}
    </a>
  );
};

export default Link;
