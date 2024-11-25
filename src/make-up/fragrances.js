import Afficher from "./afficher";
export default function Fragrances(props) {
  return (
    <div className="row">
        {
            props.products.filter(function (product) {
        return product.category==="fragrances"
      }).map(function (product,i) {  
        return <Afficher products={product} key={i} />
      })
        }
    </div>
  )
}
