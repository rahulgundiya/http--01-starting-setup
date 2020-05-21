import * as actionTypes from  '../action';
const initialState ={
    result:[]
}
const reducer=(state=initialState ,action)=>{
    switch(action.type)
    {
    
    case actionTypes.STORE_RESULT:
        return {
            ...state,
            result:state.result.concat({id:new Date() , 
                value:action.result})
        }

    case actionTypes.DELETE_RESULT:
       const updateResult = state.result.filter((result ,index)=>
       result.id !== action.resultElId)
       return {
           ...state,
           result:updateResult
    }

}
return state;
}
export default reducer;
