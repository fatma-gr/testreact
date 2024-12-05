import { useParams } from "react-router-dom"
import { useDispatch } from "react-redux"
import { ajouter } from "./action"
import { useState } from "react"
import NotFound from "./notfound"
export default function Product(props) {
    const { id } = useParams()
    const dispatch = useDispatch()
    const [quantity, setQuantity] = useState(1)
    const product = props.products.find((p) => p.id === parseInt(id))
    function buy(e){
        e.preventDefault()
        if (product) {
            const produit = {id: product.id,type: product.title,size: product.category,price: product.price,quantity: parseInt(quantity),
            }
            dispatch(ajouter(produit))
        }
    }
    return (
        <div className="container">
            {product?(
                <div className="product-container">
                    <div className="product-image">
                        <img src={product.image} alt="Product" style={{ width: "250px" }} />
                    </div>
                    <div className="product-content">
                        <form onSubmit={buy} className="form">
                            <div className="product-details">
                                <h2>{product.title}</h2>
                                <p><strong>Category:</strong> {product.category}</p>
                                <p><strong>Description:</strong> {product.description}</p>
                                <p><strong>Price:</strong> ${product.price}</p>
                                <div className="quantity-container">
                                    <label htmlFor="quantity">Quantity: </label>
                                    <input type="number" id="quantity" min="1" value={quantity} onChange={e => setQuantity(e.target.value)}
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary">Buy</button>
                            </div>
                        </form>
                    </div>
                </div>
            ):(<NotFound />)}
        </div>
    )
}
