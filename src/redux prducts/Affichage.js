import { useDispatch } from "react-redux"
import { supprimer } from "./actions"
import { Link } from "react-router-dom"

export default function Affichage(props) {
  
  const dispatch  = useDispatch()
  return (
    <tr>
    <td>{props.product.id}</td>
    <td>{props.product.nom}</td>
    <td>{props.product.prix}</td>
    <td>{props.product.quantity}</td>
    <Link className="btn btn-success" to={`/modifier/${props.product.id}`} >Modifier</Link>
    <td><button className="btn btn-danger" onClick={()=>{dispatch(supprimer(props.product.id))}}>supprimer</button></td>
    </tr>
  )
}
