import React from "react";
import helloWorld from "../../../App"

const NumberButton = props => {

  return (
    <button className={props.className}>
      {/* Display a button element rendering the data being passed down from the parent container on props */
        props.number
      }
    </button>
  );
};

export default NumberButton;
