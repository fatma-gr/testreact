import axios from "axios";
import { useEffect,useState } from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
export default function Appi() {
    const[products,setproducts]=useState([])
    useEffect(()=>{
        axios.get(`http://freejon.com/api/produits`)
        .then(res=>setproducts(res.data))
    })
    return(
        products.map(function(products,i){
            <p>{products.id}</p>
        })
    )
  
}