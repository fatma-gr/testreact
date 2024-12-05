import { configureStore, createSlice } from "@reduxjs/toolkit";

const Productslice = createSlice({
    name:"products",
    initialState:{
        products:[
            // {id:1,title:"jacket",price:200,quantite:10}
        ]
    },
    reducers:{
        ajouter:(state,action)=>{
            return{...state,products:[...state.products,action.payload]}
        },
        supprimer:(state,action)=>{
            return {...state,products:[...state.products.filter(function (pro) { 
                return pro.id!==action.payload
             })]}
        },
        modifier:(state,action)=>{
            const product = state.products.find(function (pro) {
                return pro.id===action.payload.id
             })
             if(product){
                // product.title=action.payload.title
                // product.price = action.payload.price
                product.quantite = action.payload.quantite
             }
             return state
        }
    }
})

export const {ajouter,supprimer,modifier} = Productslice.actions

const store = configureStore({
    reducer:{
       products:Productslice.reducer 
    }
})
export default store