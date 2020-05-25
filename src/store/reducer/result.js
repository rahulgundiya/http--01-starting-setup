import * as actionTypes from  '../actions/actionsTypes';
import {updatedObject} from '../utility'
const initialState ={
    result:[]
}
const reducer=(state=initialState ,action)=>{
    switch(action.type)
    {
    
    case actionTypes.STORE_RESULT:
        return updatedObject(state, { result:state.result.concat({id:new Date() , 
            value:action.result*2})}) 
            

    case actionTypes.DELETE_RESULT:
       const updateResult = state.result.filter((result ,index)=>
       result.id !== action.resultElId)
       return updatedObject(state ,{result:updateResult})
         
    }
return state;
}
export default reducer;
