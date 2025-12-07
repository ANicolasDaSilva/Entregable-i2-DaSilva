import { useState } from "react";
import "./Quantity.css"

function Quantity ({stock}){

    const [quantity, setQuantity] = useState(1)

    const less = () => {
        if(quantity > 1){
            setQuantity(quantity -1);
        }
    }

    const add = () => {
        if(quantity < stock){
            setQuantity(quantity + 1)
        }
    }

    return (
        <div>
            <button onClick={less}> - </button>
            <span> {quantity} </span>
            <button onClick={add}> + </button>
        </div>
    )
}

export default Quantity;