import {bibliotheques} from "./parti2data"
import Affichage from "./parti2Affichage"

export default function Q1(){
    return(
        bibliotheques.map(function(bibliotheque,i){
            return<Affichage bib={bibliotheque} key={i}/>
        })

    )
}