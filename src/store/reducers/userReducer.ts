import {initialState,UserAction,UserActionType, UserState} from "../../types/user";

export function userReducer(state = initialState, action: UserAction): UserState {
    switch (action.type) {
        case UserActionType.FETCH_USERS:
            return {loading: true, error: null, users: []};
        case UserActionType.FETCH_USERS_SUCCESS:
            return {loading: false, error: null, users: action.payload};
        case UserActionType.FETCH_USERS_ERROR:
            return {loading: false, error: action.payload, users: []};
        default:
            return state
    }
}