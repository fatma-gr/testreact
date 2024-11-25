import Afficher from "./afficher";
export default function Beauty(props) {
  return (
    <div className="row">
        {
            props.products.filter(function (product) {
        return product.category==="beauty"
      }).map(function (product,i) {  
        return <Afficher products={product} key={i} />
      })
        }
    </div>
  )
}
