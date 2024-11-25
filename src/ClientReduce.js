import { Clients } from "./data";

export default function ClientsR(){
        const resultat=Clients.reduce(function(total,client){
            return total+=client.montant
    
        },0)
        return(
            <>
            <p>{resultat}</p>
            </>
        )
      
    }