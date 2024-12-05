import { useDispatch, useSelector } from "react-redux";
import { supprimer } from "./action";

export default function Cart() {
    const panier = useSelector((data) => data.panier);
    
    const dispatch = useDispatch();
    
    const totals = panier.reduce((total, pro) => {
        return total += pro.price * pro.quantity
    }, 0);

    return (
        <div className="my-5" id="cart-wrapper">
            <div className="card shadow-lg" id="custom-cart-card">
                <div className="card-body">
                    <table className="table table-bordered table-hover" id="custom-cart-table">
                        <thead id="cart-header">
                            <tr>
                                <th id="product-column">Product</th>
                                <th id="price-column">Price</th>
                                <th id="quantity-column">Quantity</th>
                                <th id="action-column">Action</th>
                            </tr>
                        </thead>
                        <tbody id="cart-items-body">
                            {panier.map((products, i) => (
                                <tr key={i}>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <span>{products.title}</span>
                                        </div>
                                    </td>
                                    <td>{products.price}</td>
                                    <td>
                                        <p>{products.quantity}</p>
                                    </td>
                                    <td>
                                        <button onClick={() => dispatch(supprimer(products.id))} className="btn btn-danger">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="d-flex justify-content-between mt-4" id="cart-total-section">
                        <h4 id="cart-total-label">Total</h4>
                        <h4 id="cart-total-price">{totals}$</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}
