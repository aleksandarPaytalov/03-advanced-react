import { useState } from "react";

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState("");
  // truthy
  const [name, setName] = useState("susan");
  const [user, setUser] = useState({ name: "john" });
  const [isEditing, setIsEditing] = useState(false);
  return (
    <div>
      <h2>{text || "default value"}</h2>
      <h2>{name && "default value"}</h2>
      <h2>{name || "default value"}</h2>
      <h2>{text && "default value"}</h2>
      <h2>{!text && "default value"}</h2>

      {/* user && <SomeComponent name={user.name} />*/}
      <h2>{/*text ? <SomeComponent name={name} /> : user.name */}</h2>
      <h2 style={{ margin: "2rem 0" }}>Ternary Operator</h2>
      <button className="btn">{isEditing ? "edit" : "add"}</button>
      {user ? (
        <div>
          <h4>Hello there {user.name}</h4>
        </div>
      ) : (
        <div>
          <h2>Please login</h2>
        </div>
      )}
    </div>
  );
};

const SomeComponent = ({ name }) => {
  return <h3>hello there {name}</h3>;
};

export default ShortCircuitExamples;
