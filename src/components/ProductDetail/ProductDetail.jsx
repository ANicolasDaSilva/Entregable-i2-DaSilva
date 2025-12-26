import { useNavigate } from "react-router"
import Quantity from "../Quantity/Quantity"
import "./ProductDetail.css"
import { ShoppingCart } from "lucide-react"
import { Eye } from "lucide-react"
import { useContext } from "react"
import { CartContext } from "../CartContext/CartContext"
import useCount from "../../hook/useCount"

function ProductDetail ({product}){

    const navigate = useNavigate()
    const {addCart} = useContext(CartContext)
    const {quantity, less, add} = useCount({initial:1, stock:product.stock})

    const navigateSeeDetail = () => {
        navigate(`/see-detail/${product.id}`)
    }

    const handleAddCart = () => {
        const newProduct = {
            id: product.id,
            quantity: quantity
        }
        addCart(newProduct)
    }

    return(
        <div className="productDetail">
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <Quantity quantity={quantity} less={less} add={add}/>
            <span>{product.price} U$S </span>
            <div  className="btn-cart">
                <button>
                    <ShoppingCart size={32} strokeWidth={1.75} />
                    Carrito
                </button>
                <button onClick={navigateSeeDetail}>
                    <Eye size={32} strokeWidth={1.75} onClick={navigateSeeDetail}/>
                    Ver detalles
                </button>
            </div>
        </div>
    )
}

export default ProductDetail