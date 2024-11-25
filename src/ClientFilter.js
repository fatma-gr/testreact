import { Clients } from "./data";

export default function Clientsf(){
    return(
        Clients.filter(function(client){
            return client.nomtant>300
        }).map(function(client){
            return(
                <>
                <p>{client.nom}</p>
                </>
            )
        })
    )
}