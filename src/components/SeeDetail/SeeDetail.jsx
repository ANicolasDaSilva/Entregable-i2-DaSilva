import { useEffect, useState } from "react"
import { useParams } from "react-router"

function SeeDetail () {

    const {productId} = useParams()
    const [product, setProduct] = useState("")
    
    useEffect(() =>{
        (async()=>{
            try {
                const response = await fetch(`/products.json`)
                const product = await response.json()
                const productFind = product.find(product => product.id == productId)
                setProduct(productFind)
            }catch(error) {
                console.log(error)
            }
        })()
    },[])

    return (
        <div>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <span>{product.price}</span>
        </div>
    )
}

export default SeeDetail