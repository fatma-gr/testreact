import {bibliotheques} from "./parti2data"
import Affichage from "./parti2Affichage"
export default function Q3(){
    return(
        bibliotheques.filter(function(bibliotheque){
            return bibliotheque.anneepublication>2000
        }).map(function(bibliotheque,i){
            return <Affichage bib={bibliotheque} key={i}/>
        })
    )
}