export enum UserActionType {
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_USERS_ERROR = 'FETCH_USERS_ERROR'
}

export interface UserState {
    users: any[],
    loading: boolean,
    error: string | null
}

interface FetchUsersAction {
    type: UserActionType.FETCH_USERS
}

interface FetchUsersSuccessAction {
    type: UserActionType.FETCH_USERS_SUCCESS,
    payload: any[]
}

interface FetchUsersErrorAction {
    type: UserActionType.FETCH_USERS_ERROR,
    payload: string
}

export type UserAction = FetchUsersSuccessAction | FetchUsersErrorAction | FetchUsersAction
export const initialState: UserState = {users: [], loading: false, error: null};