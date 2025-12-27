import { useContext, useEffect, useState } from "react"
import { CartContext } from "../CartContext/CartContext"
import "./Cart.css"
import Navbar from "../Navbar/Navbar"
import { Link } from "react-router"

function Cart (){
    const {cart, deleteCart} = useContext(CartContext)

        const [products,setProducts] = useState([])
        
        useEffect(() => {
            (async () => {
                try {
                    const response = await fetch("/products.json");
                    const data = await response.json()                
                    setProducts(data)
                } catch (error) {
                    console.log(error);
                }
            })();
        }, []);

    return (
        <div>
            <nav>
                <Navbar/>  
            </nav>
            
            {cart.map(cartProduct =>{
                const dataProduct = products.find(product => product.id === cartProduct.id)
                return (
                <div key={cartProduct.id} className="cart-select">
                    <h3>{dataProduct?.title}</h3>   
                    <span>{dataProduct?.price} U$S</span>
                    <button onClick={() => deleteCart(cartProduct.id)}> Eliminar del carrito </button>
                </div>
            )}
            )}
        </div>
        
    )
}

export default Cart