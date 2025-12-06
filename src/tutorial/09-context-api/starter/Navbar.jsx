import { useState, createContext } from "react";
import NavLinks from "./NavLinks";
import { use } from "react";

export const NavbarContext = createContext();

const Navbar = () => {
  const [user, setUser] = useState({ name: "bob" });
  const logout = () => {
    setUser(null);
  };
  return (
    <NavbarContext.Provider value={{ user, logout }}>
      <na>
        <nav className="navbar">
          <h5>CONTEXT API</h5>
          <NavLinks />
        </nav>
      </na>
    </NavbarContext.Provider>
  );
};
export default Navbar;
