import { useState } from "react"


export default function Test1() {
    
   const [nom,setnom] = useState('')
   const [prenom,setprenom] = useState('')
   const [sx,setsx] = useState('')
   const [lang,setlang] = useState([])
   const [filier,setfilier] = useState('')
   const [text,settext] = useState('')
    function Afficher(e){
        e.preventDefault()
        settext(`${nom} ${prenom} ${sx} ${lang} ${filier}`)
    }
    function handelLang(e){
        if(lang.includes(e.target.value)){
            setlang([...lang.filter((element)=>{return element!=e.target.value})])
        }else{
            setlang([...lang,e.target.value])
        }
    }
    
    return(
        <form onSubmit={Afficher} >
            nom : <input type='text'  onChange={(e)=>{setnom(e.target.value)}} /> <br/>
            Prenom : <input type='text' onChange={(e)=>{setprenom(e.target.value)}} /> <br/>
            Sexe : 
            Masculan<input type='radio' name='sx' value={'M'} onChange={(e)=>{setsx(e.target.value)}} /> 
            Feminie <input type='radio' name='sx' value={'F'} onChange={(e)=>{setsx(e.target.value)}} /> <br/>
            Langage : <br/>
            javascript <input type='checkbox' name='lang' value={'javascript'} onChange={(e)=>handelLang(e)} /> <br/>
            PHP <input type='checkbox' name='lang' value={'PHP'} onChange={(e)=>handelLang(e)} /> <br/>
            Python <input type='checkbox' name='lang' value={'Python'} onChange={(e)=>handelLang(e)} /> <br/>
            Filier : 
            <select onChange={(e)=>{setfilier(e.target.value)}} >
                <option>------</option>
                <option value={'Dev Full Stack'}>Devlopoment Full Stack</option>
                <option value={'Front End '}>Front End </option>
                <option value={'Back End'}>Back End </option>
            </select> <br/> <br/>
            <input type="submit" value={'Envoyer'} /> <input type="reset" value={'Annuler'} />
            <p>{text}</p>
        </form>
    )
}