import "./Filter.css"

function Filters ({category, setCategory}) {

    return(
        <div className="category-bar">
            <label className="category"> Categorias: </label>
            <select onChange={(e) => setCategory(e.target.value)} value={category} className="category-select">
                <option value ="" > Todo </option>
                <option value ="Abrigos"> Abrigos </option>
                <option value ="Remeras"> Remeras </option>
                <option value ="Pantalones"> Pantalones </option>
                <option value ="Vestidos"> Vestidos </option>
                <option value ="Camisas"> Camisas </option>
                <option value ="Buzos"> Buzos </option>
                <option value ="Sweaters"> Sweaters </option>
            </select>
        </div>
    )
}

export default Filters