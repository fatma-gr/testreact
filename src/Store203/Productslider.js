import { useEffect, useState } from 'react'
import axios from 'axios'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';

export default function Productslider() {
    const[products,setproducts]=useState([])
    useEffect(()=>{
        axios.get("https://dummyjson.com/products")
        .then(res=>setproducts(res.data.products))
    },[])
  return (
    products.map(function (product,i) { 
      return(
        <div className='row'>
          <p>{product.title}</p>
          <div className='col-4'>
            {
              <Slide>
          {
            product.images.map(function(image){
              return(
                
                <div className='each-slide-effect'>
                <div style={{backgroundImage:`url(${image})`,width:"400px",height:"450px"}}>
              </div>
            </div>
              ) 
            })
          }</Slide>
            }
          </div>
        </div>
      )
     })
  )
}
