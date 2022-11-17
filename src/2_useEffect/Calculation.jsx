import React, { useEffect, useState } from 'react';

const Calculation = () => {

  //  useState hook
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);
  console.log(count);
  console.log(calculation);

  //  useEffect hook
  useEffect( () => {
    setCalculation( () => count * 2 );
  }, [count] );

  return (
    <>
        <p>Count: {count}</p>
        
        <button style={{marginRight: '20px', width: '40px'}}
                onClick={ () => setCount((c) => c + 1)}>
            +
        </button>
        <button style={{width: '40px'}}
                onClick={ () => setCount((c) => c - 1)}>
            -
        </button>

        <p>Calculation: {calculation}</p>
    </>
  );
};

export default Calculation;
