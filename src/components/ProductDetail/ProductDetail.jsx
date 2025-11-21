import "./ProductDetail.css"
import { ShoppingCart } from "lucide-react"

function ProductDetail (){
    return(
        <div className="productDetail">
            <h3>Nombre</h3>
            <p>descripcion</p>
            <span>precio $</span>
            <button className="btn-cart">
                <ShoppingCart size={32} strokeWidth={1.75} />
                Carrito
            </button>
        </div>
    )
}

export default ProductDetail