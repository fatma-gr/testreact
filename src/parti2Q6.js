import {bibliotheques} from "./parti2data"
export default function Q6(){
    const resultat=bibliotheques.reduce(function(total,bibliotheque){
        return total=(bibliotheque.id+bibliotheque.id)/2
    },0)
    return(
        <p>{resultat}</p>
    )
}