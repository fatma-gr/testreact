import {products}from "./daata";

export default function Produitfi(){
    return(
products.filter(function(pr){
    return pr.price>=10
}).map(function(pr){
    return(
        <>
        <p>{pr.price}</p>
        </>
    )
})
    )
}