import { useState } from "react";

const UseStateGotcha = () => {
  const [value, setValue] = useState(0);

  const handleClick = () => {
    setTimeout(() => {
      setValue((currentState) => {
        return currentState + 1;
      });
    }, 3000);
    console.log("button clicked!");
  };

  return (
    <>
      <h4>{value}</h4>
      <button type="button" className="btn" onClick={handleClick}>
        Increment
      </button>
    </>
  );
};

export default UseStateGotcha;
