import { useEffect, useState } from "react"
export default function Rechercherinput() {
const [products,setproducts]=useState([])
const [product,setproduct]=useState({})
const [value,setvalue]=useState("")
useEffect(()=>{
    fetch(`https://fakestoreapi.com/products`)
    .then(res=>res.json())
    .then(res=>{setproducts(res)
    }).catch(err=>alert('erreur'))
    
},[])
function rechercher(e) { 
    e.preventDefault()
    setproduct(products.find(function (product) { return product.title===value  }))
 }
  return (
    <>
    <form onSubmit={rechercher}>
        <input type="text" onChange={(e)=>{setvalue(e.target.value)}} className="form-control" />
        <button className="btn btn-primary">rechercher</button>
    </form><br></br>
    <div className="card" style={{width:"18rem"}}>
    <img src={product.image} className="card-img-top" alt={product.title} />
    <div className="card-body">
    <h5 className="card-title">{product.title}</h5>
    <p className="card-text">{product.description}</p>
    <a href="#" className="btn btn-primary">avoir plus</a>
    </div>
    </div>
    </>
  )
}
