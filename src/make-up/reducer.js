const initialstate = {
    panier: [],
};

const reducer = (state = initialstate, action) => {
    switch (action.type) {
        case 'ajouter':
            return {
                ...state,panier: [...state.panier,action.payload]
            };
        case 'supprimer':
            return {
                ...state,panier: state.panier.filter((product) => product.id !== action.payload),
            };
        default:
            return state;
    }
};

export default reducer;