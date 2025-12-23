import "./Navbar.css"
import Filters from "../Filters/Filter";
import CartWidget from "../Cartwidget/CartWidget"
import { NavLink } from "react-router";

function Navbar() {
  return (
    
      <nav className="navbar">
        <ul>
          <li> Baul </li>
          <li> <NavLink to="./contact"> Contactos </NavLink> </li>
        </ul>
        <Filters/>
        <CartWidget/>
      </nav>
    
  );
}

export default Navbar
