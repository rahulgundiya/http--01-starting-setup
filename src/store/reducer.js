const initialState ={
    counter:0 ,
    result:[]
}
const reducer=(state=initialState ,action)=>{
    switch(action.type)
    {
     case 'INCREMENT':
         const newState =Object.assign({} ,state);
               newState.counter = state.counter+1;
            return newState; 
        

    case 'DECREMENT':
        
        return { ...state,
            counter:state.counter-1}
    
   case 'ADD':
    return { ...state,
        counter:state.counter + action.value}

    case 'SUBSTRACT':
        return { ...state ,
            counter:state.counter - action.value}
    
    case 'STORE_RESULT':
        return {
            ...state,
            result:state.result.concat({id:new Date() , value:state.counter})
        }
}
return state;
}
export default reducer;
