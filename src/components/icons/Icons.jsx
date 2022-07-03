import svg from '../../assets/svg/sprite.svg';
import classes from './Icons.module.css';

export const IconClock = ({ style }) => {
  return (
    <svg className={`${style} ${classes.icon}`}>
      <use href={`${svg}#icon-clock`}></use>
    </svg>
  );
};

export const IconYoutube = ({ style }) => {
  return (
    <svg className={`${style} ${classes.icon}`}>
      <use href={`${svg}#icon-youtube`}></use>
    </svg>
  );
};

export const IconRocket = ({ style }) => {
  return (
    <svg className={`${style} ${classes.icon}`}>
      <use href={`${svg}#icon-rocket`}></use>
    </svg>
  );
};

export const IconError = ({ style }) => {
  return (
    <div className={`${style} ${classes.container}`}>
      <svg className={`${style} ${classes.iconAccent}`}>
        <use href={`${svg}#icon-warning`}></use>
      </svg>
      <span className={classes.text}>Something went wrong...</span>
    </div>
  );
};

export const IconNoMore = ({ style }) => {
  return (
    <div className={`${style} ${classes.container}`}>
      <svg className={`${style} ${classes.iconAccent}`}>
        <use href={`${svg}#icon-reddit`}></use>
      </svg>
      <span className={classes.text}>No more to render...</span>
    </div>
  );
};
