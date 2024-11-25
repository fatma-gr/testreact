import Affichage from "./Affichage"
export default function Jewlery(props) {
  return (
    <div className="row">
        {
            props.products.filter(function (product) {
        return product.category==="jewelery"
      }).map(function (product,i) {  
        return <Affichage product={product} key={i} />
      })
        }
    </div>
  )
}
