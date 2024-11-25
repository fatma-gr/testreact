import { useSelector } from "react-redux"
import Affichage from "./Affichage"
export default function Products() {
    const products = useSelector(data=>data.products)
  return (
    <table className="table">
        <tr><th>id</th><th>nom</th><th>prix</th><th>quantity</th><th>actions</th></tr>
        {
            products.map(function (product,i) {
        return (
            <Affichage product={product} key={i} />
        )
      })
        }
    </table>
  )
}
