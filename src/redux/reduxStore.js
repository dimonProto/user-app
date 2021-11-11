import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk'

let reducer = combineReducers({

})

let store = createStore(reducer,applyMiddleware(thunk))

export default store