import { useNavigate } from "react-router"
import Quantity from "../Quantity/Quantity"
import "./ProductDetail.css"
import { ShoppingCart } from "lucide-react"
import { Eye } from "lucide-react"

function ProductDetail ({product}){

    const navigate = useNavigate()
    const navigateSeeDetail = () => {
        navigate(`/see-detail/${product.id}`)
    }

    return(
        <div className="productDetail">
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <Quantity stock = {product.stock}/>
            <span>{product.price} U$S </span>
            <div  className="btn-cart">
                <button>
                    <ShoppingCart size={32} strokeWidth={1.75} />
                    Carrito
                </button>
                <button>
                    <Eye size={32} strokeWidth={1.75} onClick={navigateSeeDetail}/>
                    Ver detalles
                </button>
            </div>
        </div>
    )
}

export default ProductDetail