import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {ajouter} from './actions';
import { useNavigate } from "react-router-dom";
export default function Ajouter(){
    const lastid = useSelector(data=>data.products.length+1)
    const [nom,setnom]=useState('')
    const [prix,setprix]=useState(0)
    const [quantite,setquantite]=useState(0)
    const [dispatch]=useDispatch
    const [navigate]=useNavigate
    function add(e) {
        e.preventdefault()
        const product ={
            id:parseInt(lastid),
            nom:nom,
            prix:prix(prix),
            quantite:quantite(quantite)
        }
        dispatch(ajouter(product))
        navigate('/')
    }
    return(
        <form onSubmit={add}>
            <input type="number" value={lastid}/>
            <input type="text" onChange={(e)=>setnom(e.target.value)}/>
            <input type="number" onChange={(e)=>setprix(e.target.value)}/>
            <input type="number" onChange={(e)=>setquantite(e.target.value)}/>
            <button className="btn btn-primary">Ajouter</button>
        </form>
    )
}