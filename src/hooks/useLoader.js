import { useState, useEffect } from 'react';

import LoadSpinner from 'components/LoadSpinner';
import Notification from 'components/Notification';

const STATUS = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

function useLoader({ callback, initData }) {
  const [status, setStatus] = useState(STATUS.IDLE);
  const [data, setData] = useState(initData);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      setStatus(STATUS.PENDING);
      try {
        const data = await callback();
        setData(data);
        setStatus(STATUS.RESOLVED);
      } catch (error) {
        setStatus(STATUS.REJECTED);
        setError(error);
      }
    })();
  }, [callback]);

  const Loader = () => {
    if (status === STATUS.PENDING) {
      return <LoadSpinner />;
    }

    if (status === STATUS.REJECTED) {
      return <Notification message={error.message} />;
    }

    return null;
  };

  return { data, isLoaded: status === STATUS.RESOLVED, Loader };
}

export default useLoader;
