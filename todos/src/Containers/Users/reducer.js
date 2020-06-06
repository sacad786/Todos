import * as types from '../../actionTypes'

const initialState = {
    user: null,
    loader: false,
    error: null
}

export default function usersReducer(state = initialState, action) {
    switch (action.type) {
        case types.GET_USERS_REQUEST:
            return {...state, loader: true, error: null};
        case types.GET_USERS_SUCCESS:
            return {...state, loader: true, user: action.payload};
        case types.GET_USERS_FAIL:
            return {...state, loader: true, error: action.payload};
    
        default:
            return state;
    }
}