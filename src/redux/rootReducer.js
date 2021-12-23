import { combineReducers } from 'redux';

import counterReducer from './Counter/counter.reducer';
import todoReducer from './List/list.reducer';


const rootReducer = combineReducers({
    counter: counterReducer,
    list: todoReducer
});

export default rootReducer;