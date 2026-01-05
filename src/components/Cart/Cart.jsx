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

        const totalPrice = cart.reduce((acc, cartProduct) =>{
            const dataProduct = products.find(product => product.id === cartProduct.id)
            
            if (!dataProduct) return acc

            return acc + dataProduct.price * cartProduct.quantity
        },0)

    return (
        <div>
            <nav>
                <Navbar/>  
            </nav>
            
            <div className="cart">
                {cart.map(cartProduct =>{
                    const dataProduct = products.find(product => product.id === cartProduct.id)
                    return (
                    <div key={cartProduct.id} className="cart-select">
                        <h3>{dataProduct?.title}</h3>   
                        <span>{dataProduct?.price} U$S</span>
                        <span> Cantidad seleccionada: {cartProduct?.quantity}</span>
                        <button onClick={() => deleteCart(cartProduct.id)} className="delete-btn"> Eliminar del carrito </button>
                    </div>
                )}
                )}

            <div className="total">
                <h2>Total: {totalPrice} U$S</h2>
                <button onClick={() => alert("¡Compra realizada!")} className="buy-btn"> Comprar </button>
            </div>
            </div>
        </div>
        
    )
}

export default Cart