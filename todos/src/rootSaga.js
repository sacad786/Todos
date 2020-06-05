import { all, fork } from "redux-saga/effects";
import { usersSaga } from "./Containers/Users/saga";

export function* rootSaga(){
    all([
        fork(usersSaga)
    ])
}