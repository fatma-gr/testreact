import { products } from "./dataa";
export default function Products(){
    return(
        products.map(function(product){
            return(
                <>
                <p>{product.nom}</p>
                </>
            )
        })
    )
}