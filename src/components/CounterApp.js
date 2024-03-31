import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from '../redux/actions/CounterAction'
import { decrement } from '../redux/actions/CounterAction'
import { reset } from '../redux/actions/CounterAction'



function CounterApp() {
    const count = useSelector(state=> state.counter)
    const dispatch = useDispatch()
  return (
    <div>
      <h1>The count is : {count}</h1>
      <button className="btn btn-primary" onClick={()=>dispatch(increment())}>Increment</button>
      <br></br>
      <button className="btn btn-primary mt-3" onClick={()=>dispatch(decrement())}>Decrement</button>
      <br></br>
      <button className="btn btn-primary mt-3" onClick={()=>dispatch(reset())}>Reset</button>
      

      
    </div>
  )
}

export default CounterApp
