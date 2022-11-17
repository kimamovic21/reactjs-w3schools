import React from 'react';
import { useState } from 'react';

const Car2 = () => {
    const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: "red"
      });
  return (
    <>
      <h2>My {car.brand}</h2>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
    </>
  );
};

export default Car2;
