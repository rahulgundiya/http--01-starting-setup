import React, { Component } from 'react';
import {connect} from 'react-redux'
import * as actionTypes from '../../store/action'
//import * as actionTypes from '../../store/action'
import * as actionCreatores from '../../store/action'

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
                 <button onClick={()=>this.props.storeResult(this.props.ctr)}>Store Result</button>
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
        ctr:state.ctr.counter,
        storedResult:state.rslt.result
    }

}
const mapDispatchProps=dispatch=>{
    return {
        onIncrementCounter:()=> dispatch(actionCreatores.increment()),
        onDecrementCounter:()=> dispatch(actionCreatores.decrement()),
        AddCounter:()=> dispatch(actionCreatores.addCounter(10)),
        substractCounter:()=>dispatch(actionCreatores.substractCounter(15)),
        storeResult:(result)=> dispatch(actionCreatores.storeResult(result)),
        deleteResult:(id)=> dispatch(actionCreatores.deleteResult(id))



        }
    
}

export default connect(mapStateToProps ,mapDispatchProps)(Counter);


