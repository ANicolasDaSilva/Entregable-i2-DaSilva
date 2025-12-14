import "./Navbar.css"
import Filters from "../Filters/Filter";
import CartWidget from "../Cartwidget/CartWidget"
import { NavLink } from "react-router";

function Navbar() {
  return (
    
      <nav className="navbar">
        <ul>
          <li> Baul </li>
          <li> <NavLink to={"/src/components/Contacts/Contacts.jsx"}> Contacto</NavLink> </li>
        </ul>
        <Filters/>
        <CartWidget/>
      </nav>
    
  );
}

export default Navbar
