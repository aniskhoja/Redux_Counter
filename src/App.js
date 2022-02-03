import React from "react";
import {useSelector, useDispatch} from 'react-redux'
import { INCREMENT, DECREMENT, isLoggedIn } from './actions/action';

function App() {
  const counter = useSelector(state => state.counterReducer);
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(INCREMENT(5))}>+</button>
      <button onClick={() => dispatch(DECREMENT(5))}>-</button>
      {isLogged ?
        <h2>Hello</h2> : ""}
      <button onClick={() => dispatch(isLoggedIn())}>Show mesg</button>
    </div>
  );
}

export default App;
