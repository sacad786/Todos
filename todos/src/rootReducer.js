import { combineReducers } from "redux";
import usersReducer from "./Containers/Users/reducer";
import { routerReducer } from "react-router-redux";

export default function rootReducer(){
    return combineReducers({
        users : usersReducer,
        routing : routerReducer
    })
}