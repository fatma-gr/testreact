import { useEffect, useState } from "react";
export default function Firstreact() {
    const[products,setproducts]=useState([])
     useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json()
        .then(res=>setproducts(res))
        .catch(err=>alert(err))
    )
    },[])
    return(
        products.map(function(product,i){
            return(
                <p>{product.title}</p>
            )
        })
    )
}