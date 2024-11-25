export default function AffichageEx3(props){
    return(
        <div>
            <p>{props.utilisateur.id}</p>
            <p>{props.utilisateur.nom}</p>
            <p>{props.utilisateur.prenom}</p>
            <p>{props.utilisateur.Email}</p>
            <p>{props.utilisateur.sexe}</p>
            <p><img src={props.utilisateur.image} /></p>
            <p>
            {props.utilisateur.statue==="online"?<p style={{color:"green"}}>online</p>:<p style={{color:"red"}}>offline</p>}
            </p>
        </div>
    )

}