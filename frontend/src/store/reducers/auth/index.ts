import {AuthAction, AuthActionsEnum, AuthState} from "./types";
import {IUser} from "../../../types/user";

const initialState: AuthState = {
    user: {} as IUser,
    isAuth: false,
    accessToken: '',
    error: ''
}

export default function authReducer(state = initialState, action: AuthAction): AuthState{
    switch(action.type){
        case AuthActionsEnum.SET_USER:
            return {...state, user: action.payload}
        case AuthActionsEnum.SET_IS_AUTH:
            return {...state, isAuth: action.payload}
        case AuthActionsEnum.SET_ERROR:
            return {...state, error: action.payload}
        case AuthActionsEnum.SET_ACCESS_TOKEN:
            return {...state, accessToken: action.payload}
        default:
            return state
    }
}