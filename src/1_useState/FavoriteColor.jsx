import React from 'react';
import { useState } from 'react';

const FavoriteColor = () => {
  const [color, setColor] = useState("red");
  console.log(color);

  return (
    <>
        <h2>My favorite color is {color}!</h2>
        <button onClick={() => setColor("blue")}>Blue</button>
    </>
  )
}

export default FavoriteColor;
