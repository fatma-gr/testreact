import Afficher from "./afficher"
import Slider from "./slider"
export default function Acceuil({ products }) {
    return (
        <div className="container">
            <Slider/>
            {products.map((product, i) => (
                    <Afficher products={product} key={i} />
                ))
            }
        </div>
    )
}