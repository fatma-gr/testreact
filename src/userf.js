import {useRef,useState} from "react";
export default function Userf(){
    const nom=useRef("")
    const ville=useRef("")
    const f=useRef("")
    const m=useRef("")
    const[text,settext]=useState("")

    function afficher(e) {
        e.preventDefault()
        let s=""
        if (f.current.checked) {
            s="f"
        }else{
            s="m"
        }
        settext(nom.current.value+"  "+ville.current.value+" "+s)
    }
    return(
        <form onSubmit={afficher}>
            <input type="text" ref={nom}/>

            <select ref={ville}>
                <option value={""}>------</option>
                <option value={"laayoune"}>laayoune</option>
                <option value={"casa"}>casa</option>
                <option value={"dakhla"}>dakhla</option>
            </select>

            <input type="radio" name="s" value={"f"} ref={f}/>
            <input type="radio" name="s" value={"m"} ref={m}/>
            <button>afficher</button>
            <p>{text}</p>

        </form>
    )}