import React, {useState} from "react";
import { specials } from '../../../data';
import SpecialButton from './SpecialButton';

//import any components needed

//Import your array data to from the provided data file

const Specials = props => {
  // STEP 2 - add the imported data to state
  const [specialState, changeSpecialState] = useState(specials);

  function doSpecial (event) {
    const special = event.target.innerHTML;

    if (special === 'C') {
      props.setDisplayNum(0);
    }
  }

  return (
    <div className='specials'>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
       specialState.map(function (special, index) {
         return <SpecialButton className='button special-button' key={index} value={special} onClick={doSpecial} />
       })
     }
    </div>
  );
};

export default Specials;
