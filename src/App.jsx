import './App.css'
import { BrowserRouter, Routes, Route } from "react-router";
import Container from "./components/Container"
import Contacts from './components/Contacts/Contacts';
import SeeDetail from './components/SeeDetail/SeeDetail';
import Cart from './components/Cart/Cart';
import CartProvider from './components/CartContext/CartContext';

function App() {
  return (
    <>
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Container/>}/>
          <Route path='/contact' element={<Contacts/>}/>
          <Route path="/see-detail/:productId" element={<SeeDetail/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
    </CartProvider>
    </>
  )
}

export default App
