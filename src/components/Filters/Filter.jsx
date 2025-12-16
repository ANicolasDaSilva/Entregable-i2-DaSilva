import { useEffect, useState } from "react"

function Filter (){

    const [category, setCategory] = useState()

    useEffect(() => {
        document.title = `Categoria: ${category}`
        console.log(`Categoría seleccionada: ${category}`)
    }, [category])

    const categorySelector = (category) => {
        setCategory(category)
    }

    return(
        <div>
            <label> {category} Categorias: </label>
            <select>
                <option onClick={()=> categorySelector("Abrigos")}> Abrigos </option>
                <option onClick={()=> categorySelector("Remeras")}> Remeras </option>
                <option onClick={()=> categorySelector("Pantalones")}> Pantalones </option>
                <option onClick={()=> categorySelector("Vestidos")}> Vestidos </option>
                <option onClick={()=> categorySelector("Camisas")}> Camisas </option>
                <option onClick={()=> categorySelector("Buzos")}> Buzos </option>
                <option onClick={()=> categorySelector("Sweaters")}> Sweaters </option>
            </select>
        </div>
    )
}

export default Filter