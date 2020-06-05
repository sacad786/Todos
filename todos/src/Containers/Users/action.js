import * as types from '../../actionTypes'

export function GetUsersRequest() {
    return {
        type:types.GET_USERS_REQUEST,
    }
}
export function GetUsersSuccess(response) {
    return {
        type:types.GET_USERS_SUCCESS,
        payload:response
    }
}
export function GetUsersFail(error) {
    return {
        type:types.GET_USERS_FAIL,
        payload:error
    }
}