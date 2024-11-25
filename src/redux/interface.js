import { useDispatch, useSelector} from "react-redux";
import {incrementer,decrementer,reset,increbunumber} from './action'
import { useState } from "react";
export default function Interface(){
    const number =useSelector(data=>data.number)
    const dispth=useDispatch()
    const [n,setn]=useState(0)
 return(
    <div>
        <p>{number}</p>
        <button onClick={()=>{dispth(incrementer())}}>incrementer</button>
        <button onClick={()=>{dispth(decrementer())}}>decrementer</button>
        <button onClick={()=>{dispth(reset())}}>reset</button>
        <input type='text' onChange={(e)=>setn(e.target.value)}/>
        <button onClick={()=>dispth(increbunumber(parseInt(n)))}>increbunumber</button>
    </div>
 )
}