import { useEffect } from "react";
import ProductDetail from "../ProductDetail/ProductDetail";
import "./ProductListContainer.css";
import { useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore"

function ProductListContainer() {

    const [products,setProducts] = useState([])

    useEffect(() => {
        (async () => {
            try {
                const db = getFirestore(app);
                const productsCollection = collection(db, "products");
                const productsSnapshot = await getDocs(productsCollection)

                const productsDb = productsSnapshot.docChanges.map(doc => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                })
                setProducts(productsDb)
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
