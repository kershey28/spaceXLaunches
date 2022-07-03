import React, { useRef, useCallback } from 'react';

import Card from './Card';
import Spinner from '../spinner/Spinner';
import { IconError, IconNoMore } from '../icons/Icons';

import useLaunchSearch from '../../helpers/useLaunchSearch';
import classes from './Cards.module.css';

const Cards = ({ query, pageNumber, setPageNumber }) => {
  const { launches, hasMore, loading, error } = useLaunchSearch(
    query,
    pageNumber
  );
  const observer = useRef();

  const lastLaunchElementRef = useCallback(
    node => {
      // guard clauses
      if (loading) return;
      if (observer.current) observer.current.disconnect();

      const observerCallback = entries => {
        if (entries[0].isIntersecting && hasMore) {
          // if last Element is Intersecting, render next page
          setPageNumber(prevPageNumber => prevPageNumber + 1);
        }
      };
      const options = { root: null, threshold: 1 };

      observer.current = new IntersectionObserver(observerCallback, options);
      if (node) observer.current.observe(node);
    },
    [loading, hasMore, setPageNumber]
  );

  return (
    <ul className={classes.container}>
      {launches.map((launch, i) => {
        // Check if it's the Last Element per Page
        if (launches.length === i + 1) {
          return (
            <Card
              key={i}
              ref={lastLaunchElementRef}
              name={launch.mission_name}
              details={launch?.details}
              success={launch?.launch_success}
              upcoming={launch?.upcoming}
              date={launch?.launch_date_local}
              patch={launch.links?.mission_patch_small}
              videoLink={launch.links?.video_link}
              articleLink={launch.links?.article_link}
            />
          );
        }

        // Else, render without a Ref
        return (
          <Card
            key={i}
            name={launch.mission_name}
            details={launch?.details}
            success={launch?.launch_success}
            upcoming={launch?.upcoming}
            date={launch?.launch_date_local}
            patch={launch.links?.mission_patch_small}
            videoLink={launch.links?.video_link}
            articleLink={launch.links?.article_link}
          />
        );
      })}

      {/* Showing render status */}
      {!hasMore && !loading && <IconNoMore />}
      {loading && <Spinner />}
      {error && <IconError />}
    </ul>
  );
};

export default Cards;
