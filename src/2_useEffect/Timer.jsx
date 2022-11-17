import React, { useEffect, useState } from 'react';

const Timer = () => {
  const [count, setCount] = useState(0);
  console.log(count);

  useEffect( () => {
        setTimeout(() => {
            setCount((count) => count + 1);
      }, 1000);
  }, []);

  return (
    <> 
        <h2>I've rendered {count} times!</h2>
    </>
  );
};

export default Timer;
