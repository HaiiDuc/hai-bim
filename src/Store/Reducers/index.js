import { combineReducers } from 'redux';
import todoReducers from './todoReducers';

const rootReducers = combineReducers({
    myTodos: todoReducers
})

export default rootReducers