import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk'
import userReducer from "./userReducer";
import { composeWithDevTools } from "redux-devtools-extension";
let reducer = combineReducers({
    usersPage:userReducer,

})

let store = createStore(reducer,composeWithDevTools(applyMiddleware(thunk)))

export default store