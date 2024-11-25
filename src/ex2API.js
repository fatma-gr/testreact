import { useState } from "react";
export default function Ex2Affi(){
    const [text,settext]=useState([])

    
    useEffect(()=>{
        fetch('http://jsonplaceholder.typicode.com/todos')
        .then((res)=>res.json())
        .then(res=>{settext(res)
        }).catch(err=>alert('erreur'))
    })
    

}
    