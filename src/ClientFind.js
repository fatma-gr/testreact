import { Clients } from "./data";

export default function Clientsd(){
    const client=Clients.find(function(client){
        return client.id===1

    })
    return(
        <>
        <p>{client.nom}</p>
        </>
    )
  
}