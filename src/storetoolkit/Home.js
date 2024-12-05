import { useDispatch, useSelector } from "react-redux"
import { supprimer } from "./Productslice";
import { Link } from "react-router-dom";
export default function Home() {
  const products = useSelector(data=>data.products.products)
  const dispatch = useDispatch()
  console.log(products);
  
  return (
    <table className="table">
      <th>ID</th><th>Nom</th><th>Prix</th><th>quantite</th><th>Actions</th>
      {
        products.map(function (pro,i) { 
      return(
        <tr>
          <td>{pro.id}</td> <td>{pro.nom}</td> <td>{pro.prix}</td> <td>{pro.quantite}</td> 
          <td>
            <button onClick={()=>dispatch(supprimer(pro.id))}>supprimer</button>
            <Link className="btn btn-success" to={`/modifier/${pro.id}`}>Modifier</Link>
          </td>
        </tr>
      )
     })
      }
    </table>
  )
}
