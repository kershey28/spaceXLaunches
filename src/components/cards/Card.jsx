import React, { useState } from 'react';

import Button from '../buttons/Button';
import Link from '../links/Link';
import { IconClock, IconYoutube, IconRocket } from '../icons/Icons';

import useElementOnScreen from '../../helpers/useElementOnScreen';
import checkDatePassed from '../../helpers/checkDatePassed';

import classes from './Card.module.css';

const Card = (
  { name, details, patch, success, upcoming, date, videoLink, articleLink },
  ref
) => {
  // state
  const [showDetails, setShowDetails] = useState(false);

  // observer
  const [elementRef, isElementAppeared] = useElementOnScreen({
    root: null,
    threshold: 1,
  });

  // observer class
  const classElement = isElementAppeared
    ? classes.moveInBottom
    : classes.hidden;

  // handler
  const clickDetailsHandler = () => {
    setShowDetails(!showDetails);
  };

  // conditional variables
  const textBtn = showDetails ? 'Hide details' : 'See details';
  const gapClass = showDetails ? classes.gapReg : classes.gapMini;
  let successClass = success ? classes.successBtn : classes.failedBtn;
  successClass = upcoming ? classes.upcomingBtn : successClass;

  return (
    <li
      className={`${classes.container} ${classElement} ${gapClass}`}
      ref={ref}
    >
      <div className={classes.headingBox} ref={elementRef}>
        <h1 className={`${classes.name} heading-1`}>{name}</h1>
        {showDetails && (
          <div className={classes.dateBox}>
            <div className={classes.date}>{`${checkDatePassed(date)} `}</div>
            <IconClock />
          </div>
        )}
      </div>

      {/* Render Launch status */}
      {upcoming && <div className={classes.upcoming}>Upcoming</div>}
      {success && !upcoming && <div className={classes.success}>Success</div>}
      {!success && !upcoming && <div className={classes.failed}>Failed</div>}

      {/* Show Launch details */}
      {showDetails && (
        <>
          {patch && (
            <img
              src={patch}
              alt={`patch of ${name}`}
              className={classes.patch}
            />
          )}
          {!patch && <div>No image yet.</div>}

          <div className={classes.detailsBox}>
            <div className={classes.links}>
              <div className={classes.videoBox}>
                <Link style={classes.video} text="Video" href={videoLink} />
                <IconYoutube style={classes.videoIcon} />
              </div>
              <div className={classes.articleBox}>
                <Link
                  style={classes.article}
                  text="Article"
                  href={articleLink}
                />
                <IconRocket style={classes.articleIcon} />
              </div>
            </div>

            <div className={classes.details}>{details}</div>
          </div>
        </>
      )}

      <Button
        onClick={clickDetailsHandler}
        text={textBtn}
        style={successClass}
      />
    </li>
  );
};

export default React.forwardRef(Card);
