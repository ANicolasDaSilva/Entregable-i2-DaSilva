import ProductDetail from "../ProductDetail/ProductDetail";
import "./ProductListContainer.css";
import { useEffect, useState } from "react";
import Filter from "../Filters/Filter";

function ProductListContainer() {

    const [products,setProducts] = useState([])
    const [category, setCategory] = useState("")
    
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

    let filterProducts;

    if (category) {
        filterProducts = products.filter(product => product.category === category)
    }else {
        filterProducts = products
    }

  return (
    <div>
        <Filter category={category} setCategory={setCategory}/>

        <div className="productListContainer">
            {filterProducts.map(product=> (
            <ProductDetail key={product.id} product={product}/>))}
        </div>
    </div>
  );
}

export default ProductListContainer;
