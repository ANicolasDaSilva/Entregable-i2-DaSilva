import { useEffect, useState } from "react"
import { data } from "react-router";

function Filter (){

    const [filter, setFilter] = useState(data)

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch("/products.json");
                if (filter === data) {             
                    setFilter(await response.json())}
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);



    return(
        <div>
            <label htmlFor="category"> Categoria </label>
            <select>
                <option onClick={()=> setFilter(data)}> Todo </option>
                <option onClick={()=> setFilter("abrigos")}> Abrigos </option>
                <option onClick={()=> setFilter("remeras")}> Remeras </option>
                <option onClick={()=> setFilter("pantalones")}> Pantalones </option>
                <option onClick={()=> setFilter("vestidos")}> Vestidos </option>
                <option onClick={()=> setFilter("camisas")}> Camisas </option>
                <option onClick={()=> setFilter("buzos")}> Buzos </option>
                <option onClick={()=> setFilter("sweaters")}> Sweaters </option>
            </select>

          <div>
            {filter.map(product => (
                <div key={product.id}>
                    <h3>{product.title}</h3>
                    <p>Precio: ${product.price}</p>
                </div>))}
            </div>
        </div>
    )

    
}

export default Filter