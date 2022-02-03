import { createStore } from 'redux';
import { counterReducer } from './reducer/counter';
import { isLogged } from './reducer/isLogged';
import { combineReducers } from 'redux';

const allReducer = combineReducers({
    counterReducer,
    isLogged
})

export  const store = createStore(allReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

