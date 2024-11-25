import { useEffect, useState } from "react";
import Affichage5 from "./Affichage";

export default function Q1affi(){
    const[text,settext]=useState([])

useEffect(()=>{
    fetch('https://dummyjson.com/recipes')
    .then((res)=>res.json())
    .then(res=>{settext(res)
    }).catch(err=>alert('erreur'))
})

return(
    text.map(function(recipe,i){
        return <Affichage5 affi={recipe} key={i}/>
    })
)

}