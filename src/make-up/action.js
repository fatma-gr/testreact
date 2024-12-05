export const ajouter = (products,quantity) => {
    return { type : "ajouter" , payload:products,quantity:quantity}
}

export const supprimer = (id) =>{
    return{ type : "supprimer",payload:id}
}