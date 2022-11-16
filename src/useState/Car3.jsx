import React from 'react';
import { useState } from 'react';

const Car3 = () => {
    const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: "red"
      });

      const updateColor = () => {
        setCar( (previousState) => {
          return {...previousState, color: "blue" }
        });
      }

      const updateColor2 = () => {
        setCar( (previousState) => {
          return {...previousState, color: "yellow" }
        });
      }

  return (
    <>
      <h2>My {car.brand}</h2>
      <p>It is a {car.color} {car.model} from {car.year}.</p>
      <button onClick={updateColor}>Blue</button>
      <button onClick={updateColor2}>Yellow</button>
    </>
  );
};

export default Car3;
