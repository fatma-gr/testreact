import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ajouter } from "./actions"
import { useNavigate } from "react-router-dom"
export default function Ajouter() {
    const lastid = useSelector(data=>data.products.length+1)
    const [nom,setnom]=useState('')
    const [prix,setprix]=useState(0)
    const [quantity,setquantity]=useState(0)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    function add(e) {
        e.preventDefault()
        const product = {
            id:parseInt(lastid),
            nom:nom,
            prix:Number(prix),
            quantity:parseInt(quantity)
        }
        dispatch(ajouter(product))
        navigate('/')
      }
  return (
    <form onSubmit={add}>
        <input type="number" value={lastid}  />
        <input type="text"   onChange={(e)=>setnom(e.target.value)} />
        <input type="number" onChange={(e)=>setprix(e.target.value)} />
        <input type="number" onChange={(e)=>setquantity(e.target.value)} />
        <button className="btn btn-primary">Ajouter</button>
    </form>
  )
}
