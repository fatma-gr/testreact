const initialstate={
    products:[
        {id:1,nom:'lait',prix:4,quantite:10}
    ]
}
const reducer =(state=initialstate,action)=>{
    switch(action.type){
        case 'ajouter':
            return{...state,products:[...state.products,action.payload]}
        default:
            return state
    }
}
export default reducer