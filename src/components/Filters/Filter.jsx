import { useState } from "react"
// import { data } from "react-router";

function Filter (){

    /* const productFilter = data.filter(product => {
    const [filters, setFilters] = useState("all")
        if (filters === "all"){
            setFilters(data)
        }
        return product.category === filters;
    })*/

    return(
        <div>
            <label htmlFor="category"> Categoria </label>
            <select onChange={(e)=> {setFilters(e.target.value)}}>
                <option onClick={()=> setFilters("all")}> Todo </option>
                <option onClick={()=> setFilters("abrigos")}> Abrigos </option>
                <option onClick={()=> setFilters("remeras")}> Remeras </option>
                <option onClick={()=> setFilters("pantalones")}> Pantalones </option>
                <option onClick={()=> setFilters("vestidos")}> Vestidos </option>
                <option onClick={()=> setFilters("camisas")}> Camisas </option>
                <option onClick={()=> setFilters("buzos")}> Buzos </option>
                <option onClick={()=> setFilters("sweaters")}> Sweaters </option>
            </select>
            

        </div>
    )
}

export default Filter