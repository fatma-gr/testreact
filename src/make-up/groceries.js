import Afficher from "./afficher";
export default function Groceries(props) {
  return (
    <div className="row">
        {
            props.products.filter(function (product) {
        return product.category==="groceries"
      }).map(function (product,i) {  
        return <Afficher products={product} key={i} />
      })
        }
    </div>
  )
}
