import { useState } from "react"

function Filter (){

    const [filters, setFilters] = useState()

    

    return(
        <div>
            <label htmlFor="category"> Categoria </label>
            <select onClick={()=> filters(category)}>
                <option value="todo"> Todo </option>
                <option value="abrigos"> Abrigos </option>
                <option value="remeras"> Remeras </option>
                <option value="pantalones"> Pantalones </option>
                <option value="vestidos"> Vestidos </option>
                <option value="camisas"> Camisas </option>
                <option value="buzos"> Buzos </option>
                <option value="Sweaters"> Sweaters </option>
            </select>
        </div>
    )
}

export default Filter