import {take,call,put} from 'redux-saga/effects'
import * as types from '../../actionTypes'
import { getUsers, createUsers } from '../../requests'
import { GetUsersSuccess, GetUsersFail, createUsersFail, createUsersSuccess, updateUsersSuccess, updateUsersFail } from './action'

export function* usersSaga(){
    for(;;){
        yield take(types.GET_USERS_REQUEST)

        try {
           const response = yield call(getUsers()) 
           yield put(GetUsersSuccess(response.data))
        } catch (error) {
            yield put(GetUsersFail(error))
        }
    }
}

// export function* createUsersSaga(){
//     for(;;){
//         yield take(types.CREATE_USERS_REQUEST)

//         try {
//            const response = yield call(createUsers(user)) 
//            yield put(createUsersSuccess(response.data))
//         } catch (error) {
//             yield put(createUsersFail(error))
//         }
//     }
// }

// export function* updateUsersSaga(){
//     for(;;){
//         yield take(types.UPDATE_USERS_REQUEST)

//         try {
//            const response = yield call(updateUsers(userId)) 
//            yield put(updateUsersSuccess(response.data))
//         } catch (error) {
//             yield put(updateUsersFail(error))
//         }
//     }
// }

// export function* deleteUsersSaga(){
//     for(;;){
//         yield take(types.DELETE_USERS_REQUEST)

//         try {
//            const response = yield call(deleteUsers(userId)) 
//            yield put(deleteUsersSuccess(response.data))
//         } catch (error) {
//             yield put(deleteUsersFail(error))
//         }
//     }
// }
