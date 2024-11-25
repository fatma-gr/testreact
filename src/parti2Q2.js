import {bibliotheques} from "./parti2data"
export default function Q2(){
    const bibliotheque=bibliotheques.find(function(bibliotheque){
        return bibliotheque.categorie==="roman"
    }) 
    return(
        <p>{bibliotheque.titre}</p>

    )
}