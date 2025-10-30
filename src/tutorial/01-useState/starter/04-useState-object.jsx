import { useState } from "react";

const UseStateObject = () => {
  const [person, newPerson] = useState({
    name: "Alex",
    age: 35,
    hobby: "learning Vite",
  });

  // const [name, setName] = useState("Alex");
  // const [age, setAge] = useState(29);
  // const [hobby, setHobby] = useState("Learn React Vite");

  const createPerson = () => {
    // setName("Gosho");
    // setAge(35);
    // setHobby("Snowboarding");
    // newPerson({ name: "ivan", age: 29, hobby: "snowboarding" });
    newPerson({ ...person, name: "ivan", age: 22 });
  };

  return (
    <div>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h4>Enjoy to: {person.hobby}</h4>
      <button type="button" className="btn" onClick={createPerson}>
        Change person
      </button>
    </div>
  );
};

export default UseStateObject;
//
