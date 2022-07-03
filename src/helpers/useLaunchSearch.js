import axios from 'axios';
import { useEffect, useState } from 'react';

const useLaunchSearch = (query, pageNumber) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [launches, setLaunches] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  // when query changes, reset launches array
  useEffect(() => {
    setLaunches([]);
  }, [query]);

  // handling query to fetch data
  useEffect(() => {
    setLoading(true);
    setError(false);

    let cancel;
    const limit = 10;
    const offsetConfig = limit * pageNumber - limit;

    const options = {
      params: {
        mission_name: query,
        limit,
        offset: offsetConfig,
      },
      cancelToken: new axios.CancelToken(c => (cancel = c)),
    };

    // fetch data
    axios
      .get(`https://api.spacexdata.com/v3/launches`, options)
      .then(res => {
        setLaunches(prevLaunches => {
          return [
            ...new Set([...prevLaunches, ...res.data.map(launch => launch)]),
          ];
        });

        setHasMore(res.data.length > 0);
        setLoading(false);
      })
      .catch(e => {
        if (axios.isCancel(e)) return;
        setError(true);
      });

    // cleanup
    return () => cancel();
  }, [query, pageNumber]);
  return { loading, error, launches, hasMore };
};

export default useLaunchSearch;
