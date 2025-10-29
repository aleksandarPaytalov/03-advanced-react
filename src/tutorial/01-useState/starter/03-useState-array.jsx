import { data } from "../../../data";
import { useState } from "react";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    let newListOfPeople = people.filter((person) => person.id !== id);
    setPeople(newListOfPeople);
  };

  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;

        return (
          <div key={id}>
            <h4>{name}</h4>
            <button type="button" onClick={() => removeItem(id)}>
              remove
            </button>
          </div>
        );
      })}
      <button
        className="btn"
        type="button"
        onClick={() => setPeople([])}
        style={{ marginTop: "2rem" }}
      >
        Clear All
      </button>
    </div>
  );
};

export default UseStateArray;
