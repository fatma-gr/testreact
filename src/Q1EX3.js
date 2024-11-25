
import { utilisateurs } from "./dataEx3";
import AffichageEx3 from "./affichageEx3";
export default function Q1(){
    return(
        utilisateurs.map(function(utilisateur,i){
            return<AffichageEx3 utilisateur={utilisateur}key={i}/>

        })
    )
}