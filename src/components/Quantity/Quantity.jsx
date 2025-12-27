import "./Quantity.css"

function Quantity ({quantity, less, add}){

    return (
        <div>
            <button onClick={less}> - </button>
            <span> {quantity} </span>
            <button onClick={add}> + </button>
        </div>
    )
}

export default Quantity;