 import ProductDetail from "../ProductDetail/ProductDetail";
import "./ProductListContainer.css";
import { useEffect, useState } from "react";

function ProductListContainer() {

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
    <div className="productListContainer">
        {
            products.map((product)=>{
                return <ProductDetail key={product.id} product={product}/>
            })

        }
    </div>
  );
}

export default ProductListContainer;
