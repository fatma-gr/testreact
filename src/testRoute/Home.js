import Affichage from "./Affichage"
export default function Home(props){
    return(
        props.products.map(function(product,i){
            return <Affichage pro={product} key={i}/>
        })
    )


}