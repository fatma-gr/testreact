import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { modifier } from './Productslice'
export default function Modifier() {
    const {id} = useParams()
    const product = useSelector(data=>data.products.products.find(function (pro) { 
        return pro.id===parseInt(id)
         }))
         const [nom,setnom]=useState(product.nom)
         const [prix,setprix]=useState(product.prix)
         const [quantite,setquantite]=useState(product.quantite)
         const dispatch=useDispatch()
         function modifierpro(e) { 
            e.preventDefault()
            const p = {
                id:product.id,
                nom:nom,
                prix:Number(prix),
                quantite:parseInt(quantite)
            }
            dispatch(modifier(p))
            
          }
  return (
    <form onSubmit={modifierpro}>
        <input type='text' value={product.id}  />
        <input type='text' value={nom} onChange={(e)=>setnom(e.target.value)} />
        <input type='text' value={prix} onChange={(e)=>setprix(e.target.value)} />
        <input type='text' value={quantite} onChange={(e)=>setquantite(e.target.value)} />
        <button>Modifier</button>
    </form>
  )
}
