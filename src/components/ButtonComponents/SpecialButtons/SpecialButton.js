import React from "react";

const SpecialButton = props => {
  return (
    <button className={props.className} onClick={props.onClick}>
      {/* Display a button element rendering the data being passed down from the parent container on props */
        props.value
      }
    </button>
  );
};

export default SpecialButton;
