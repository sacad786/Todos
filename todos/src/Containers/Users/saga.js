import {take,call,put} from 'redux-saga/effects'
import * as types from '../../actionTypes'
import { getUsers } from '../../requests'
import { GetUsersSuccess, GetUsersFail } from './action'

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
