import { useState } from "react";

const UseStateObject = () => {
  const [name, setName] = useState("Alex");
  const [age, setAge] = useState(29);
  const [hobby, setHobby] = useState("Learn React Vite");

  const createPerson = () => {
    setName("Gosho");
    setAge(35);
    setHobby("Snowboarding");
  };

  return (
    <div>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h4>Enjoy to: {hobby}</h4>
      <button type="button" className="btn" onClick={createPerson}>
        Change person
      </button>
    </div>
  );
};

export default UseStateObject;
