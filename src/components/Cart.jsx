import { useContext, useEffect, useState } from "react"
import { CartContext } from "./CartContext/CartContext"

function Cart (){
    const {cart} = useContext(CartContext)

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
            {cart.map(cartProduct =>{
                const dataProduct = products.find(product => product.id === cartProduct.id)
                return (
                <div key={cartProduct.id}>
                    <h3>{dataProduct?.title}</h3>
                    <span></span>
                </div>
            )}
            )}
            <p>carrito</p>
        </div>
    )
}

export default Cart