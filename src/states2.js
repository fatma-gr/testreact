import { useState } from "react";
export default function States(){
    const [nb1,setnb1]=useState(0)
    const [nb2,setnb2]=useState(0)
    const [op,setop]=useState("")
    const [text,settext]=useState("")
    function afficher(e){
        e.preventDefault()
        switch (op) {
            case "+":
                settext(Number(nb1)+Number(nb2))
                break;
            case "-":
                settext(nb1-nb2)
                break;    
            case "*":
                settext(nb1*nb2)
                break;
            case "/":
                settext(nb2==0?"error":nb1/nb2)
                break;       
            default:
                alert('erreur')
                break;
        }
    }
return(
    <form onSubmit={afficher}>
        <input type="text" onChange={(e)=>setnb1(e.target.value)}/>
        <input type="text" onChange={(e)=>setnb2(e.target.value)}/>


        {/* <select onChange={(e)=>setop(e.target.value)}>
            <option value={''}>-----------</option>
            <option value={"+"}>+</option>
            <option value={"-"}>-</option>
            <option value={"*"}>*</option>
            <option value={"/"}>/</option>
        </select> */}

        +<input type="radio" value={"+"} name="op" onChange={(e)=>setop(e.target.value)}/>
        -<input type="radio" value={"-"} name="op" onChange={(e)=>setop(e.target.value)}/>
        *<input type="radio" value={"*"} name="op" onChange={(e)=>setop(e.target.value)}/>
        /<input type="radio" value={"/"} name="op" onChange={(e)=>setop(e.target.value)}/>
        <button>Calculer</button>
        <p>{text}</p>
    </form>
)
}
