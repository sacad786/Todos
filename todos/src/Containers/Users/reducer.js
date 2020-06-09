import * as types from '../../actionTypes'

const initialState = {
    users: null,
    loader: false,
    error: null,
    user: null,
    deleteUser: null,

}

export default function usersReducer(state = initialState, action) {
    switch (action.type) {
        case types.GET_USERS_REQUEST:
            return {...state, loader: true, error: null};
        case types.GET_USERS_SUCCESS:
            return {...state, loader: false, users: action.payload};
        case types.GET_USERS_FAIL:
            return {...state, loader: false, error: action.payload};
            
        case types.CREATE_USERS_REQUEST:
            return {...state, loader: true, error: null};
        case types.CREATE_USERS_SUCCESS:
            return {...state, loader: false, user: action.payload};
        case types.CREATE_USERS_FAIL:
            return {...state, loader: false, error: action.payload};

        // case types.DELETE_USERS_REQUEST:
        //     return {...state, loader: true, error: null};
        // case types.DELETE_USERS_SUCCESS:
        //     return {...state, loader: false, deleteUser: action.payload};
        // case types.DELETE_USERS_FAIL:
        //     return {...state, loader: false, error: action.payload};

        // case types.RESET_USERS_ERROR:
        //     return {...state, loader: false, error: null, user:null, userId:null,  deleteUser:null}
    
        default:
            return state;
    }
}