import "./CartWidget.css"
import { ShoppingBasket } from "lucide-react"

function CartWidget (){
    return (
        <button className="cartWidget">
            <ShoppingBasket size={48} />
        </button>
    )
}

export default CartWidget