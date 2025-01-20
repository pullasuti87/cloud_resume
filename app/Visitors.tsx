'use client';

import { useEffect, useState } from 'react';

const Visitors = () => {
  const [count, setCount] = useState<number | undefined>();

  useEffect(() => {
    const updateCount = async () => {
      try {
        const postResponse = await fetch('/api/visitors', { method: 'POST' });
        const response = await fetch('/api/visitors');
        const result = await response.json();

        const visitorCount = result.data[0].count;
        setCount(Number(visitorCount));
      } catch (e) {
        console.error('error:', e);
      }
    };
    updateCount();
  }, []);

  if (count === undefined) {
    return <div>...</div>;
  }

  return (
    <div>
      <p>{count}</p>
    </div>
  );
};

export default Visitors;
