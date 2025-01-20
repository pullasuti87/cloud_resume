'use client';

import { useEffect, useState } from 'react';

const Visitors = () => {
  const get = async () => {
    const res = await fetch('/api/visitors');
    const data = await res.json();
  };

  const post = async () => {
    const res = await fetch('/api/visitors', { method: 'POST' });
    const data = await res.json();
    console.log(data);
  };

  const [count, setCount] = useState(0);
  const [error, setError] = useState('');

  useEffect(() => {
    const updateCount = async () => {
      try {
        const response = await fetch('/api/visitors');
        const result = await response.json();

        const visitorCount = result.data[0].count;
        setCount(visitorCount);

        if (!sessionStorage.getItem('counted')) {
          const postRes = await fetch('/api/visitors', {
            method: 'POST',
          });
          const update = await postRes.json();

          setCount(update.data[0].count);
          sessionStorage.setItem('counted', 'true');
        } else {
          setError('failed to session count');
        }
      } catch (e) {
        setError('failed to try count');
        console.error('error:', e);
      }
    };

    updateCount();
  }, []);

  return (
    <div>
      <p>{count}</p>
      <button onClick={get}>yeah</button>
      <button onClick={post}>ppistyeah</button>
    </div>
  );
};

export default Visitors;
