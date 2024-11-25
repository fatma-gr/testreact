import { useEffect, useState } from "react"
export default function Api() {
const [product,setproduct]=useState({})
const [id,setid]=useState(1)
const [value,setvalue]=useState(1)
useEffect(()=>{
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then(res=>res.json())
    .then(res=>{setproduct(res);console.log(res);
    }).catch(err=>alert('erreur'))
    
},[id])
function rechercher(e) { 
    e.preventDefault()
    setid(value)
 }
  return (
    <>
    <form onSubmit={rechercher}>
        <input type="text" onChange={(e)=>{setvalue(e.target.value)}} className="form-control" />
        <button className="btn btn-primary">rechercher</button>
    </form>
    <br></br>
    <div className="card" style={{width:"18rem"}}>
    <img src={product.image} className="card-img-top" alt={product.title} />
    <div className="card-body">
    <h5 className="card-title">{product.title}</h5>
    <p className="card-text">{product.description}.</p>
    <a href="#" className="btn btn-primary">avoir plus</a>
    </div>
    </div>
    </>
  )
}
