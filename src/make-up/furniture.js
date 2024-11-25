import Afficher from "./afficher";
export default function Furniture(props) {
  return (
    <div className="row">
        {
            props.products.filter(function (product) {
        return product.category==="furniture"
      }).map(function (product,i) {  
        return <Afficher products={product} key={i} />
      })
        }
    </div>
  )
}
