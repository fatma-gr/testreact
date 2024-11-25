const initialestate ={
    number:0,
    product:[],
    clients:[],
}
const reducer =(state=initialestate,action)=>{
    switch(action.type){
        case 'incrementer':
            return {...state,number:state.number+1}
        case 'decrementer':
            return {...state,number:state.number-1}
        case 'reset':
            return {...state,number:0}
        case 'increbunumber':
            return{...state,number:state.number+action.payload}
        default:
            return state
    }
}
export default reducer