'use client';

import { useEffect, useState } from 'react';

const Visitors = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const updateCount = async () => {
      try {
        const response = await fetch('/api/visitors');
        const result = await response.json();

        const visitorCount = result.data[0].count;
        setCount(Number(visitorCount));

        if (
          sessionStorage.getItem('counted') == undefined ||
          !sessionStorage.getItem('counted')
        ) {
          const postResponse = await fetch('/api/visitors', { method: 'POST' });
          const updatedResponse = await fetch('/api/visitors');
          const updatedResult = await updatedResponse.json();

          const updated = updatedResult.data[0].count;
          setCount(Number(updated));
        }
      } catch (e) {
        console.error('error:', e);
      }
    };
    updateCount();
  }, []);

  return (
    <div>
      <p>{count}</p>
    </div>
  );
};

export default Visitors;
