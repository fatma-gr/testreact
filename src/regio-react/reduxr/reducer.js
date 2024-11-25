const initialstate ={
    produits:[
        {ref:7,nom:'PC HP',categorie:'informatique'},
        {ref:8,nom:'SKYWORTH',categorie:'TV'}
    ]
}
const reducer=(state=initialstate,action)=>{
    switch (action.type) {
        case 'ajouter':
            return{...state,produits:[...state.produits,action.payload]}
            
        case 'supprimer':
            return{...state,produits:[...state.produits.filter(function(produit){
                return produit.ref!==action.payload
            })]}
    
        default:
            return state
            
    }
}
export default reducer;