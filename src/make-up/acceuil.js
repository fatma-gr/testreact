import Affiche from "./afficher";

export default function Acceuil({ products }) {
    return (
        <div className="container">
            {products.map((product, i) => (
                    <Affiche products={product} key={i} />
                ))
            }
        </div>
    )
}