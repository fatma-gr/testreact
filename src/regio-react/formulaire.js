import { useState } from "react";
export default function Form() {
    const [ref,setref]=useState('')
    const[nom,setnom]=useState('')
    const[categorie,setcategorie]=useState('')
    const[description,setdescription]=useState('')
    const[prix,setprix]=useState(0)
    const[image,setimage]=useState('')
    const[text,settext]=useState('')
    function valide(e) {
        e.preventdefault()
        settext(`${ref} ${nom} ${categorie} ${description} ${prix} ${image}`)
    }
    return(
        <form onSubmit={valide}>
           Reference:<input type="text" onChange={(e)=>{setref(e.target.value)}}/><br/>
           Nom:<input type='text' onChange={(e)=>{setnom(e.target.value)}}/><br/>
           categorie:<select onChange={(e)=>{setcategorie(e.target.value)}}>
           <option>------</option>
            <option value={"petit dejener"}>petit dejener</option>
            <option value={"petit dejener2"}>petit dejener2</option>
           </select><br/>
           description:<textarea cols={5} rows={5} onChange={(e)=>{setdescription(e.target.value)}}/><br/>
           Prix:<input type='number' onChange={(e)=>{setprix(e.target.value)}}/><br/>
           image:<input type="file" onChange={(e)=>{setimage(e.target.value)}}/><br/>
        <button>valider</button>
        <p>{text}</p>
        <fieldset>
            <legend>information</legend>
            <ul>
                <li>{ref}</li>
                <li>{nom}</li>
                <li>{categorie}</li>
                <li>{description}</li>
                <li>{prix}</li>
                <li>{image}</li>
            </ul>
        </fieldset>
        </form>
        
    )
}