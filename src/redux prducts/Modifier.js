import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { modifier } from "./actions"
export default function Modifier() {
    const {id} = useParams()
    const product = useSelector(data=>data.products.find(function (product) {
        return product.id===parseInt(id)
      }))
      const [nom,setnom]=useState(product.nom)
      const [prix,setprix]=useState(product.prix)
      const [quantity,setquantity]=useState(product.quantity)
      const dispatch=useDispatch()
      const navigate= useNavigate()
      function modify(e) { 
        e.preventDefault()
        const productm = {
            id:product.id,
            nom:nom,
            prix:Number(prix),
            quantity:parseInt(quantity)
        }
            dispatch(modifier(productm))
            navigate('/')
       }
  return (
    <form onSubmit={modify}>
        <input type="text" value={product.id} />
        <input type="text" onChange={(e)=>setnom(e.target.value)} value={nom} />
        <input type="text" onChange={(e)=>setprix(e.target.value)} value={prix} />
        <input type="text" onChange={(e)=>setquantity(e.target.value)} value={quantity} />
        <button>Modifier</button>
    </form>
  )
}
