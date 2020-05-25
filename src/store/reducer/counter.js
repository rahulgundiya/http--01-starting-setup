import * as actionTypes from  '../actions/actionsTypes';
const initialState ={
    counter:0
    
}
const reducer=(state=initialState ,action)=>{
    switch(action.type)
    {
     case actionTypes.INCREMENT:
        
         const newState =Object.assign({} ,state);
         console.log('newState'  , newState);
               newState.counter = state.counter+1;
               console.log('newstate-Counter' , newState.counter);
              // console.log('...State' , ...state);
            return newState; 
        

    case actionTypes.DECREMENT:
        
         return { ...state,
            counter:state.counter-1}
    
   case actionTypes.ADD:
    return { ...state,
        counter:state.counter + action.value}

    case actionTypes.SUBSTRACT:
        return { ...state ,
            counter:state.counter - action.value}
    
   
}
return state;
}
export default reducer;
