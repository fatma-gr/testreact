import { useState,useEffect } from "react"

export default function Recherchercategory() {
    const [products,setproducts]=useState([])
    const [value,setvalue]=useState('')
    const [text,settext]=useState('')
    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products`)
        .then(res=>res.json())
        .then(res=>{setproducts(res)
        }).catch(err=>alert('erreur'))
        
    },[])
    function rechercher(e) { 
        e.preventDefault()
        settext(products.filter(function (product) {
            return product.category===value
          }).map(function (product,i) { 
            return(
                <div className="card" style={{width:"18rem"}} key={i}>
                <img src={product.image} className="card-img-top" alt={product.title} />
                <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <a href="#" className="btn btn-primary">avoir plus</a>
                </div>
                </div>
            )
           }))
     }
  return (
    <>
        <form onSubmit={rechercher}>
        <select onChange={(e)=>{setvalue(e.target.value)}}>
            <option value={""}>-------</option>
            <option value={"electronics"}>electronics</option>
            <option value={"jewelery"}>jewelery</option>
            <option value={"men's clothing"}>men's clothing</option>
            <option value={"women's clothing"}>women's clothing</option>
        </select>
        <button className="btn btn-primary">rechercher</button>
    </form><br></br>
    <div>{text}</div>
    </>
  )
}
