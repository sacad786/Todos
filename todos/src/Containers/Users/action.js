import * as types from '../../actionTypes'

export function getUsersRequest() {
    return {
        type:types.GET_USERS_REQUEST,
        payload:"response"
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

export function createUsersRequest(user) {
    return {
        type:types.CREATE_USERS_REQUEST,
        payload:user
    }
}
export function createUsersSuccess(response) {
    return {
        type:types.CREATE_USERS_SUCCESS,
        payload:response
    }
}
export function createUsersFail(error) {
    return {
        type:types.CREATE_USERS_FAIL,
        payload:error
    }
}

export function updateUsersRequest(user) {
    console.log("user", user);
    
    return {
        type:types.UPDATE_USERS_REQUEST,
        payload:user
    }
}
export function updateUsersSuccess(response) {
    return {
        type:types.UPDATE_USERS_SUCCESS,
        payload:response
    }
}
export function updateUsersFail(error) {
    return {
        type:types.UPDATE_USERS_FAIL,
        payload:error
    }
}

export function deleteUsersRequest(userId) {
    return {
        type:types.DELETE_USERS_REQUEST,
        payload:userId
    }
}
export function deleteUsersSuccess(response) {
    return {
        type:types.DELETE_USERS_SUCCESS,
        payload:response
    }
}
export function deleteUsersFail(error) {
    return {
        type:types.DELETE_USERS_FAIL,
        payload:error
    }
}