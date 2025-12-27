import "./Navbar.css"
import CartWidget from "../CartWidget/CartWidget"
import { NavLink } from "react-router";

function Navbar() {
  return (
    
      <nav className="navbar">
        <ul>
          <li> <NavLink to="./"> Baul </NavLink> </li>
          <li> <NavLink to="./contact"> Contactos </NavLink> </li>
        </ul>
        <CartWidget/>
      </nav>
    
  );
}

export default Navbar
