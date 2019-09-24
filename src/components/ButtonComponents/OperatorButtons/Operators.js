import React, {useState} from "react";
import { operators } from '../../../data';
import OperatorButton from './OperatorButton';

//import any components needed

//Import your array data to from the provided data file

const Operators = props => {
  // STEP 2 - add the imported data to state
  const [operatorState, changeOperatorState] = useState(operators);

  function addOperator (event) {
    const operator = event.target.innerHTML;
    if (operator === '=') {
      props.setDisplayNum(eval(props.displayNum));
    } else {
      props.setDisplayNum(`${props.displayNum} ${operator} `)
    }
  }
  return (
    <div className='operators'>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
       operatorState.map(function (operator, index) {
         return <OperatorButton className='button operator-button' key={index} char={operator.char} value={operator.value} onClick={addOperator} />
       })
     }
    </div>
  );
};

export default Operators;
