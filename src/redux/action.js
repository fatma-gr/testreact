export const incrementer =()=>{
    return {type:'incrementer'}
}
export const decrementer =()=>{
    return {type:'decrementer'}
}
export const reset =()=>{
    return {type:'reset'}
}
export const increbunumber =(value)=>{
    return {type:'increbunumber',payload:value}
}