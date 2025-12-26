import { createContext, useEffect, useState } from "react"

export const CartContext = createContext()

function CartProvider ({children}){

    const [cart, setCart] = useState([])
    const [totalQuantity, setTotalQuantity] = useState(0)

    useEffect(()=>{
        setTotalQuantity(cart.reduce((acc, product) => acc + product.quantity, 0))
    },[cart])

    const addCart = (newProduct) => {
        const productFound = cart.find(product => product.id === newProduct.id)

        if (productFound){
            setCart(cart.map(product => {
                if(product.id === newProduct.id){
                    product.quantity = product.quantity + newProduct.quantity
                    return
                }
                return product
            }))
            return 
        }

        setCart([...cart, newProduct])
    }

    const deleteCart = (id) => {
        setCart(cart.filter(product => product.id !== id))
    }

    return (
        <CartContext.Provider value = {{cart, totalQuantity, addCart, deleteCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider