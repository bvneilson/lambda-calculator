import React, {useState} from "react";

const Display = () => {

  const [outputNum, setOutputNum] = useState(0);
  
  return <div className="display">{outputNum}</div>;
};

export default Display;
