import React, { useEffect, useState } from 'react';

const EffectCleanup = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let timer = setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  
    return () => clearTimeout(timer)
    }, [] );
  
    return <h1>I've rendered {count} times!</h1>;
   
};

export default EffectCleanup;
