const initialstate = {
    products:[
        {id:1,nom:"lait",prix:4,quantity:10}
    ]
}

const reducer = (state = initialstate,action)=>{
    switch(action.type){
        case 'ajouter':
            return{...state,products:[...state.products,action.payload]}
        case "supprimer" : 
        return{...state,products:[...state.products.filter(function (product) { 
            return product.id!==action.payload
         })]}
        case "modifier" :
            const product = state.products.find(function (p) {
                return p.id===action.payload.id
              })
             if (product) {
                product.nom=action.payload.nom
                product.prix=action.payload.prix
                product.quantity=action.payload.quantity
             } 
             return state
        default:
            return state
    }
}

export default reducer