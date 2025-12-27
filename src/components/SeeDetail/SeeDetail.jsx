import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router"
import "./SeeDetail.css"
import Navbar from "../Navbar/Navbar"
import { CartContext } from "../CartContext/CartContext"
import { ShoppingCart } from "lucide-react"
import useCount from "../../hook/useCount"
import Quantity from "../Quantity/Quantity"

function SeeDetail () {

    const {productId} = useParams()
    const [product, setProduct] = useState([])
    const {addCart} = useContext(CartContext)
    const {quantity, add, less} = useCount({initial:1, stock:product.stock})
    
    useEffect(() =>{
        (async()=>{
            try {
                const response = await fetch(`/products.json`)
                const product = await response.json()
                const productFind = product.find(product => product.id == productId)
                setProduct(productFind)
            }catch(error) {
                console.log(error)
            }
        })()
    },[])

    const handleAddCart = () => {
        const newProduct = {
            id: product.id,
            quantity: quantity
        }
        addCart(newProduct)
    }

    return (
        <div>
            <nav>
                <Navbar/>
            </nav>
            <div className="product-detail">
                <h2>Nombre: {product.title}</h2>
                <p>{product.description}</p>
                <span>Precio: {product.price} U$S</span>
                <Quantity quantity={quantity} add={add} less={less}/>
                <button onClick={handleAddCart}>
                    <ShoppingCart size={32} strokeWidth={1.75} />
                    Carrito
                </button>
            </div>
        </div>
    )
}

export default SeeDetail