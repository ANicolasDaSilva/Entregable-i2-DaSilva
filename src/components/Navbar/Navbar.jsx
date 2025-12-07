import "./Navbar.css"
import Filters from "../Filters/Filter";
import CartWidget from "../Cartwidget/CartWidget"

function Navbar() {
  return (
    
      <nav className="navbar">
        <ul>
          <li> Baul </li>
          <li> Contacto </li>
        </ul>
        <Filters/>
        <CartWidget/>
      </nav>
    
  );
}

export default Navbar
