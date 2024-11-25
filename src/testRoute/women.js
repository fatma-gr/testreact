import Affichage from "./Affichage"
export default function Women(props){
    return(
        props.products.filter(function(product){
            return product.category==="women's clothing"
        }).map(function(product,i){
            return <Affichage pro={product} key={i}/>
        })
    )
}