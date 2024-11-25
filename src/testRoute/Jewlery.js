import Affichage from "./Affichage"
export default function Jewlery(props){
    return(
        props.products.filter(function(product){
            return product.category==="jewelery"
        }).map(function(product,i){
            return <Affichage pro={product} key={i}/>
        })
    )
}