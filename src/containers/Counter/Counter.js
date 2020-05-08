import React, { Component } from 'react';
import {connect} from 'react-redux'

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    
    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked=
                    {this.props.onIncrementCounter}/>
                <CounterControl label="Decrement" clicked={ 
                    this.props.onDecrementCounter}  />
                <CounterControl label="Add 10" clicked={
                    this.props.AddCounter}  />
                <CounterControl label="Subtract 15" clicked={
                    this.props.substractCounter}  />
                    <hr/>
                 <button onClick={this.props.storeResult}>Store Result</button>
                 <ul >
                 {this.props.storedResult.map(result=>(
                         
                        
             <li key={result.id} onClick={()=>this.props.deleteResult(result.id)}>{result.value}</li>
                 ))}
                     </ul>   
            
            </div>
        );
    }
}
const mapStateToProps = state=>{
    return{
        ctr:state.counter,
        storedResult:state.result
    }
}
const mapDispatchProps=dispatch=>{
    return {
        onIncrementCounter:()=> dispatch({type:'INCREMENT'}),
        onDecrementCounter:()=> dispatch({type:'DECREMENT'}),
        AddCounter:()=> dispatch({type:'ADD' ,value:10}),
        substractCounter:()=>dispatch({type:'SUBSTRACT' , value:15}),
        storeResult:()=> dispatch({type:'STORE_RESULT'}),
        deleteResult:(id)=> dispatch({type:'DELETE_RESULT' ,resultElId:id})



        }
    
}

export default connect(mapStateToProps ,mapDispatchProps)(Counter);


