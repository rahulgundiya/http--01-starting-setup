import * as actionTypes from '../actions/actionsTypes'
export const increment=()=>{
    return{
        type:actionTypes.INCREMENT
    }
}
export const decrement=()=>{
    return{
        type:actionTypes.DECREMENT
    }
}
export const addCounter=(value)=>{
    return{
        type:actionTypes.ADD,
        value:value
    }
}
export const substractCounter=(value)=>{
    return{
        type:actionTypes.SUBSTRACT,
        value:value
    }
}