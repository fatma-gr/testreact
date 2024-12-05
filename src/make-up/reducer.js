import { configureStore } from '@reduxjs/toolkit';

const current_state = {
    panier: [],
}
const reducer = (state = current_state, action) => {
    switch (action.type) {
        case 'ajouter':
            return {...state,panier: [...state.panier,
                    {
                        id: action.payload.id,
                        type: action.payload.title,
                        size: action.payload.brand,
                        price: action.payload.category,
                        quantity: action.payload.price,
                    }
                ]
            }
        case 'supprimer':
            return {
                ...state,
                panier: state.panier.filter((products) => products.id !== action.payload),
            }
        default:
            return state;
    }
}
const store = configureStore({
    reducer,
})
export default store