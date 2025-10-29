import { useState } from "react";

const UseStateBasics = () => {
  //console.log(useState());
  //console.log(useState("Test"));
  //const value = useState()[0];
  //const handler = useState()[1];
  //console.log(value);
  //console.log(handler);

  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
    //setCount("Time");
  };

  return (
    <>
      <h4>You clicked {count} times.</h4>
      <button type="button" onClick={handleClick} className="btn">
        Click me
      </button>
    </>
  );
};

export default UseStateBasics;
//
