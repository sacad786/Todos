import {take,call,put} from 'redux-saga/effects'
import * as types from '../../actionTypes'
import { getUsers, createUsers, updateUsers, deleteUsers } from '../../requests'
import { GetUsersSuccess, GetUsersFail, createUsersFail, createUsersSuccess, updateUsersSuccess, updateUsersFail, getUsersRequest, deleteUsersSuccess, deleteUsersFail } from './action'

export function* usersSaga(){
    for(;;){
        yield take(types.GET_USERS_REQUEST)

        try {
           const response = yield call(getUsers) 
           yield put(GetUsersSuccess(response.data))

        } catch (error) {
            yield put(GetUsersFail(error))
        }
    }
}

export function* createUsersSaga(){
    for(;;){
       const actionRequest   =  yield take(types.CREATE_USERS_REQUEST)
 
        try {
           const response = yield call(createUsers, actionRequest.payload.payload) 
           yield put(createUsersSuccess(response.data))
           yield put(getUsersRequest())
        } catch (error) {
            yield put(createUsersFail(error))
        }
    }
}

export function* updateUsersSaga(){
    for(;;){
       const actionRequest = yield take(types.UPDATE_USERS_REQUEST)

        try {
           const response = yield call(updateUsers,actionRequest.payload.payload) 
           yield put(updateUsersSuccess(response.data))
           yield put(getUsersRequest())
        } catch (error) {
            yield put(updateUsersFail(error))
        }
    }
}

export function* deleteUsersSaga(){
    for(;;){
        const userId = yield take(types.DELETE_USERS_REQUEST)
        
        try {
           const response = yield call(deleteUsers,userId.payload) 
           yield put(deleteUsersSuccess(response.data))
           yield put(getUsersRequest())
        } catch (error) {
            yield put(deleteUsersFail(error))
        }
    }
}
