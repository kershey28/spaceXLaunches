import classes from './Particle.module.css';

const Particle = ({ style }) => {
  return (
    <div className={`${classes.container} ${style}`}>
      <div className={classes.box}>
        <div className={classes['big-blob']}></div>
        <div className={classes.blob1}></div>
        <div className={classes.blob2}></div>
      </div>
      <svg className={classes.svg}>
        <filter id="gooey" className={classes.filter}>
          <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
          <feColorMatrix
            in="blur"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 25 -18"
            result="contrast"
          />
        </filter>
      </svg>
    </div>
  );
};

export default Particle;
