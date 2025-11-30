import "./ProductDetail.css"
import { ShoppingCart } from "lucide-react"

function ProductDetail ({product}){
    return(
        <div className="productDetail">
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <span>{product.price} $</span>
            <button className="btn-cart">
                <ShoppingCart size={32} strokeWidth={1.75} />
                Carrito
            </button>
        </div>
    )
}

export default ProductDetail