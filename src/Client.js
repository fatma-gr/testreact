 const Clients=[
       {id:1, nom:"toutouuu", age:40,estmember:true ,nomtant:100},
        {id:2, nom:"toutouu", age:19,estmember:true ,nomtant:100},
      {id:3, nom:"toutou", age:34,estmember:true ,nomtant:100},
     ];

     export default function Client(){
        return(
            Clients.map(function(Client){
                return(
                    <div>
                       <p> {Client.nom}</p><p> {Client.age}</p>
                    </div>
                )
            })
        )
     }