import {products}from "./daata";
export default function Produitf(){
   return(
    <table border={1}>
    <th>id</th><th>title</th><th>price</th><th>description</th>
    <th>category</th><th>image</th><th>rate</th><th>count</th>
    {
        products.map(function(product,i){
            return(
                <tr key={i}>
                    <td>{product.id}</td><td>{product.title}</td><td>{product.price}</td><td>{product.description}</td>
                    <td>{product.category}</td><td><img src={product.image}></img></td><td>{product.rating.rate}</td><td>{product.rating.count}</td>
                </tr>
            )

        })
    }
</table>
   )
}