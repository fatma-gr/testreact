import {bibliotheques} from "./parti2data"
import Affichage from "./parti2Affichage"
export default function Q4(){
    return(
        bibliotheques.filter(function(bibliotheque){
            return bibliotheque.desponibilite==="oui"
        }).map(function(bibliotheque,i){
            return <Affichage bib={bibliotheque} key={i}/>
        })
    )
}