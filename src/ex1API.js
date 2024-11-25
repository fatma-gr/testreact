import { useEffect, useState } from "react";
export default function Ex1Affi(){
    const[text,settext]=useState([])


useEffect(()=>{
    fetch('https://dummyjson.com/recipes')
    .then((res)=>res.json())
    .then(res=>{settext(res)
    }).catch(err=>alert('erreur'))
})

return(
    text.map(function(affi,i){
        return(
            <>
            <p>{affi.userId}</p>
            <p>{affi.id}</p>
            <p>{affi.title}</p>
            <p>{affi.completed.tostring()}</p>

            </>
        )
    })
)

}