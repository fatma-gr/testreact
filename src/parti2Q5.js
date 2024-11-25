import {bibliotheques} from "./parti2data"
import Affichage from "./parti2Affichage"
export default function Q5(){
    return(
        bibliotheques.filter(function(bibliotheque){
            return bibliotheque.auteur=="victor hugo" || bibliotheque.anneepublication>2010
        }).map(function(bibliotheque,i){
            return <Affichage bib={bibliotheque} key={i}/>
        })
    )
}