import Affichage from "./Affichage"
export default function Acceuil(props) {
  return (
   <div className="row">
    {
        props.products.map(function (product,i) { 
        return <Affichage product={product} key={i} />
     })
    }
   </div>
  )
}
