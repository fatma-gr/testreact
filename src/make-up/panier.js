import { useDispatch, useSelector } from "react-redux";
import { supprimer } from "./action";
import { useState } from "react";

export default function Panier() {
    const panier = useSelector((data) => data.panier);
    
    const dispatch = useDispatch();
    const [quantity, setQuantities] = useState({});

    // const handle = (id, value) => {
    //     setQuantities((prev) => ({
    //         ...prev,
    //         [id]: value
    //     }));
    // };

    const totals = panier.reduce((total, pro) => {
        return total += pro.price*quantity;
    }, 0);

    return (
            <div className="container my-5" id="cart-container">
                <h2 className="text-center mb-4" id="cart-header">Cart</h2>
                <div className="card shadow-sm" id="cart-card">
                    <div className="card-body">
                        <table className="table table-bordered table-hover" id="cart-table">
                            <thead id="cart-table-header">
                                <tr>
                                    <th id="product-column">Product</th>
                                    <th id="price-column">Price</th>
                                    <th id="quantity-column">Brand</th>
                                    <th id="actions-column">Action</th>
                                </tr>
                            </thead>
                            <tbody id="cart-table-body">
                                {panier.map((products) => (
                                    <tr key={products.id}>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <td>{products.title}</td>
                                            </div>
                                        </td>
                                        <td>{products.price}</td>
                                        <td>
                                            <p>{products.quantity}</p>
                                        </td>
                                        <td>
                                            <button onClick={() => dispatch(supprimer(products.id))} className="btn btn-danger">
                                                حذف
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <div className="d-flex justify-content-between mt-4" id="total-section">
                            <h4 id="total-label">total</h4>
                            <h4 id="total-price">{totals}</h4>
                        </div>
                    </div>
                </div>
            </div>
    );
}