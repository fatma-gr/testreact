import  { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ajouter } from './Productslice'

export default function Ajouter() {
    const lastid = useSelector(data=>data.products.products.length+1)
    const [nom,setnom]=useState("")
    const [prix,setprix]=useState(0)
    const [quantite,setquantite]=useState(0)
    const dispatch = useDispatch()
    function ajouterpro(e) { 
        e.preventDefault()
        const product = {
            id:lastid,
            nom:nom,
            prix:Number(prix),
            quantite:parseInt(quantite)
        }
        dispatch(ajouter(product))
        
     }
  return (
    <form onSubmit={ajouterpro}>
        <input type='text' value={lastid}  />
        <input type='text' onChange={(e)=>setnom(e.target.value)} />
        <input type='text' onChange={(e)=>setprix(e.target.value)} />
        <input type='text' onChange={(e)=>setquantite(e.target.value)} />
        <button>Ajouter</button>
    </form>
  )
}
