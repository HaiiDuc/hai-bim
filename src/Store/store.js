import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import rootReducers from './Reducers/';
import { composeWithDevTools } from 'redux-devtools-extension'

const initialState = {}

const middleleware = [thunk]

const store = createStore(
    rootReducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middleleware))
)

export default store