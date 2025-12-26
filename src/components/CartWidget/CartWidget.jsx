import { Link } from "react-router"
import "./CartWidget.css"
import { ShoppingBasket } from "lucide-react"
import { useContext } from "react"
import { CartContext } from "../CartContext/CartContext"

function CartWidget (){

    const {totalQuantity} = useContext(CartContext)
    
    return (
        <div>
            <Link to={"/cart"} className="cartWidget">
                <ShoppingBasket size={48} />
                <span className="counter">
                    {totalQuantity}
                </span>
            </Link>
        </div>
    )
}

export default CartWidget