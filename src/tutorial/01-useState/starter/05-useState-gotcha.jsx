import { useState } from "react";

const UseStateGotcha = () => {
  const [value, setValue] = useState(0);

  const handleClick = () => {
    setValue((currentValue) => {
      const newValue = currentValue + 1;
      console.log(newValue);
      return newValue;
    });
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
