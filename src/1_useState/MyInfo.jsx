import React from 'react';
import { useState } from 'react';

const MyInfo = () => {

  const [info, setInfo] = useState({
    firstName: 'Kerim',
    lastName: 'Imamovic',
    years: 25,
    city: 'Sarajevo',
  });

  const updateInfo = () => {
    setInfo( (previousState) => {
        return {
            ...previousState,
            city: 'New York',
        };
    });
  };

  return (
    <> 
        <h2>Some informations about me</h2>
        <h3>My full name is {info.firstName} {info.lastName}.</h3>
        <p>I am {info.years} years old. I come from {info.city}.</p>
        <button onClick={updateInfo}>Update Info</button>
    </>
  );
};

export default MyInfo;
