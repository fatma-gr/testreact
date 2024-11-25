import {useParams} from 'react-router-dom'
import Notfound from './Notfound'
// import { useEffect,useState } from 'react'
export default function product(props){
    const {id}=useParams()
    // const [text,settext]=useState('')
    // useEffect(()=>{
    //     settext(props.products.filter(function(p){
    //         return p.id===parseInt(id)
    //     }).map(function(param){  }))
    // },[])
    const product=props.products.find(function (p) {
        return p.id===parseInt(id)
    })
    return(
        <div>
            {/* <p>{text}</p> */}
            {product?<p>{product.title}</p>:<Notfound />}
        </div>
    )
}