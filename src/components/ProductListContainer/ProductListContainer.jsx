import ProductDetail from "../ProductDetail/ProductDetail"
import "./ProductListContainer.css"

function ProductListContainer(){
    
    return(
        <div className="productListContainer">
            <ProductDetail/>
            <ProductDetail/>
            <ProductDetail/>
        </div>
    )
}

export default ProductListContainer