import React, { useState } from "react";
import { numbers } from '../../../data';
import NumberButton from './NumberButton';

//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders.
/*
import { numbers } from '../../../data'
*/
//Import your array data to from the provided data file

const Numbers = props => {
  // STEP 2 - add the imported data to state
  const [numberState, setNumberState] = useState(numbers);
  function changeNum (event) {
    const targetClass = event.target.className;

    if (targetClass === "button number-button") {
      props.setDisplayNum(event.target.innerHTML)
    } else {
      props.setDisplayNum(0);
    }
  }
  return (
    <div className='numbers'>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
       numberState.map(function (number, index) {
         if (number === "0") {
           return <NumberButton className='button number-button zero-button' key={index} number={parseInt(number)} onClick={changeNum} />
         } else {
           if (number !== ".") {
             return <NumberButton className='button number-button' key={index} number={parseInt(number)} onClick={changeNum} />
           } else {
             return <NumberButton className='button number-button' key={index} number={number} onClick={changeNum} />
           }
         }
       })
     }
    </div>
  );
};

export default Numbers;
