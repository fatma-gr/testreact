import Afficher from "./afficher"
export default function Acceuil({ products }) {
    return (
        <div className="container">
            {products.map((product, i) => (
                    <Afficher products={product} key={i} />
                ))
            }
        </div>
    )
}