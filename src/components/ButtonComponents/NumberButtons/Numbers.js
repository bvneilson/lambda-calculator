import React, { useState } from "react";
import { numbers } from '../../../data';
import NumberButton from './NumberButton';

//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders.
/*
import { numbers } from '../../../data'
*/
//Import your array data to from the provided data file

const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [numberState, setNumberState] = useState(numbers);
  function updateDisplay (event) {
    const targetClass = event.target.className;

    if (targetClass === "1") {
      alert('Hey this works');
    }
  }
  return (
    <div className='numbers'>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
       numberState.map(function (number, index) {
         if (number === "0") {
           return <NumberButton className='button number-button zero-button' key={index} number={number} />
         } else {
           return <NumberButton className='button number-button' key={index} number={number} />
         }
       })
     }
    </div>
  );
};

export default Numbers;
