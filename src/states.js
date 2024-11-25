// import { useState } from "react";
// export default function States(){
//     const [nom,setnom]=useState("")
//     const [ville,setville]=useState("")
//     const [text,settext]=useState("")
//     const [sx,setsx]=useState('')
//    function afficher(e){
//     e.preventDefault()
//     settext(<h1>{nom} {ville} {sx}</h1>)
//    }
//    return(
//     <form onSubmit={afficher}>
//         <input type="text" onChange={(e)=>setnom(e.target.value)}/>
//         <select onChange={(e)=>setville(e.target.value)}>
//             <option value="agadir">agadir</option>
//             <option value="laayoune">laayoune</option>
//         </select>
        
//        f <input type="radio" value="f" name="sx" onChange={(e)=>setsx(e.target.value)}></input>
//        m <input type="radio" value="m" name="sx" onChange={(e)=>setsx(e.target.value)}></input>
       
//         <button>afficher</button>
//         <p>{text}</p>

//     </form>
//    )

// }