import {products}from "./daata";
export default function Produitfd(){
    const produit=products.find(function(produit){
        return produit.id===2
    })
    
}