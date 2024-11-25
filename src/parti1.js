import { useState } from "react"
export default function Formulaire(){
    const[nom,setnom]=useState("")
    const[prenom,setprenom]=useState("")
    const[email,setemail]=useState("")
    const[voir,setvoir]=useState("")
    const[text,settext]=useState("")
    function afficher(e){
        e.preventDefault()
        settext(<h1> {nom} {prenom} {email} {voir} </h1>)
    }
    return(
        <form onSubmit={afficher}>
            <label>Quel est votre nom?</label><br/>
            <input type="text" onChange={(e)=>{setnom(e.target.value)}}/><br/>
            <label>Quel est votre prenom?</label><br/>
            <input type="text" onChange={(e)=>{setprenom(e.target.value)}}/><br/>
            <label>Quel est votre e-mail?</label><br/>
            <input type="email" onChange={(e)=>{setemail(e.target.value)}}/><br/>
            <label>Faites un souhair que vous voudriez voi exaucé:</label><br/>
            <input type="radio" name="v" value="etre riche" onChange={(e)=>{setvoir(e.target.value)}}/>etre riche<br/>
            <input type="radio" name="v" value="etre celebre" onChange={(e)=>{setvoir(e.target.value)}}/>etre celebre<br/>
            <input type="radio" name="v" value="etre encore phis intelligent" onChange={(e)=>{setvoir(e.target.value)}}/>etre encore phis intelligent<br/>
            <input type="radio" name="v" value="autre..." onChange={(e)=>{setvoir(e.target.value)}}/>autre...<br/>
            <button>afficher</button>
            <p>{text}</p>

        </form>
    )
    
}