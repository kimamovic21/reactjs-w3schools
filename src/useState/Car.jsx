import React from 'react';
import { useState } from 'react';

const Car = () => {
    const [brand, setBrand] = useState("Ford");
    const [model, setModel] = useState("Mustang");
    const [year, setYear] = useState("1964");
    const [color, setColor] = useState("red");
    console.log(brand);
    console.log(model);
    console.log(year);
    console.log(color);
  return (
    <>
        <h2>My {brand}</h2>
        <p>It is a {color} {model} from {year}.</p>
    </>
  );
};

export default Car;
