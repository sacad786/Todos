import { all, fork } from "redux-saga/effects";
import { usersSaga, createUsersSaga, deleteUsersSaga, updateUsersSaga } from "./Containers/Users/saga";

export default function* rootSaga(){
    yield all([
        fork(usersSaga),
        fork(createUsersSaga),
        fork(updateUsersSaga),
        fork(deleteUsersSaga)
    ])
}