import "./Navbar.css"
import CartWidget from "../Cartwidget/CartWidget"

function Navbar() {
  return (
    
      <nav className="navbar">
        <ul>
          <li> Tools </li>
          <li> Contacto </li>
        </ul>
        <CartWidget/>
      </nav>
    
  );
}

export default Navbar
