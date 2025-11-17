import { useState } from "react";

const UserChallenge = () => {
  const [user, setUser] = useState(null);

  const login = () => {
    setUser({ name: "Aleksandar Paytalov" });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <div>
      {user ? (
        <div>
          <h4>Wellcome back: {user.name}</h4>
          <button className="btn" onClick={logout}>
            logout
          </button>
        </div>
      ) : (
        <div>
          <h4>Please login by pressing bellow button.</h4>
          <button className="btn" onClick={login}>
            login
          </button>
        </div>
      )}
    </div>
  );
};

export default UserChallenge;
