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
      <h2>{text ? <SomeComponent name={name} /> : user.name}</h2>
    </div>
  );
};

const SomeComponent = ({ name }) => {
  return <h2>hello there {name}</h2>;
};

export default ShortCircuitExamples;
