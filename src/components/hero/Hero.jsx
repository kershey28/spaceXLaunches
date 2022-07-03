import classes from './Hero.module.css';
import heroImg from '../../assets/img/hero.png';
import heroSmallImg from '../../assets/img/hero-small.png';

const Hero = ({ style }) => {
  // Image switcher optimization
  const phoneMediaQuery = window.matchMedia('(max-width: 600px)');
  const img = phoneMediaQuery.matches ? heroSmallImg : heroImg;

  return (
    <div className={`${classes.container} ${style}`}>
      <img src={img} alt="moon" className={classes.heroImg} />
    </div>
  );
};

export default Hero;
