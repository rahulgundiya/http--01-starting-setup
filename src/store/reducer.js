// import * as actionTypes from  './action';
// const initialState ={
//     counter:0 ,
//     result:[]
// }
// const reducer=(state=initialState ,action)=>{
//     switch(action.type)
//     {
//      case actionTypes.INCREMENT:
        
//          const newState =Object.assign({} ,state);
//          console.log('newState'  , newState);
//                newState.counter = state.counter+1;
//                console.log('newstate-Counter' , newState.counter);
//               // console.log('...State' , ...state);
//             return newState; 
        

//     case actionTypes.DECREMENT:
        
//          return { ...state,
//             counter:state.counter-1}
    
//    case actionTypes.ADD:
//     return { ...state,
//         counter:state.counter + action.value}

//     case actionTypes.SUBSTRACT:
//         return { ...state ,
//             counter:state.counter - action.value}
    
//     case actionTypes.STORE_RESULT:
//         return {
//             ...state,
//             result:state.result.concat({id:new Date() , value:state.counter})
//         }

//     case actionTypes.DELETE_RESULT:
//        const updateResult = state.result.filter((result ,index)=>result.id !== action.resultElId)
//        return {
//            ...state,
//            result:updateResult
//     }

// }
// return state;
// }
// export default reducer;
