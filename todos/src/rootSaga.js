import { all, fork } from "redux-saga/effects";
import { usersSaga } from "./Containers/Users/saga";

export default function* rootSaga(){
    yield all([
        fork(usersSaga)
    ])
}