import Filter from "./Filters/Filter";
import Navbar from "./Navbar/Navbar";
import ProductListContainer from "./ProductListContainer/ProductListContainer";

function Container(){
    return(
        
        <div>
            <Navbar/>
            <ProductListContainer/>
        </div>
    )
}

export default Container