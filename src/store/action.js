export const INCREMENT ='INCREMENT'
export const DECREMENT ='DECREMENT'
export const ADD ='ADD'
export const SUBSTRACT ='SUBSTRACT'
export const STORE_RESULT ='STORE_RESULT'
export const DELETE_RESULT ='DELETE_RESULT'

export const increment=()=>{
    return{
        type:INCREMENT
    }
}
export const decrement=()=>{
    return{
        type:DECREMENT
    }
}
export const addCounter=(value)=>{
    return{
        type:ADD,
        value:value
    }
}
export const substractCounter=(value)=>{
    return{
        type:SUBSTRACT,
        value:value
    }
}
export const saveResult=(res)=>{
    return{
        type:STORE_RESULT,
        result:res
    }
}
export const storeResult=(res)=>{
    return dispatch=>{
        setTimeout(()=>{
            dispatch(saveResult(res))

        } ,2000)
    }
}
export const deleteResult=(resultElId)=>{
    console.log('res' ,resultElId)
  //  alert('ID' , resultElId)
    return{
        type:DELETE_RESULT,
        id:resultElId,
     
    }
    
}