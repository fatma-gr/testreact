export default function Affichage(props){
    return(
      <div>
          <p>{props.bib.id}</p>
          <p>{props.bib.titre}</p>
          <p>{props.bib.auteur}</p>
          <p>{props.bib.categorie}</p>
          <p>{props.bib.anneepublication}</p>
          <p>{props.bib.desponibilite}</p>
          
      </div>
    )

}