export default function Component2(Props){
    return(
        <>
        <p>{Props.nom}</p>
        <p>{Props.personne.nom}</p>
        <p>{Props.personne.age}</p>

        </>
    )
}