import Affichage from "./Affichage"
export default function Electrinics(props) {
  return (
    <div className="row">
        {
            props.products.filter(function (product) {
        return product.category==="electronics"
      }).map(function (product,i) {  
        return <Affichage product={product} key={i} />
      })
        }
    </div>

    )
}
