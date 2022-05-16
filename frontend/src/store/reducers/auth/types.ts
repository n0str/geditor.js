import {IUser} from "../../../types/user";

export interface AuthState{
    user: IUser;
    isAuth: boolean;
    error: string;
}

export enum AuthActionsEnum{
    SET_USER = "SET_USER",
    SET_IS_AUTH = 'SET_IS_AUTH',
    SET_ERROR = 'SET_ERROR'
}

export interface SetError{
    type: AuthActionsEnum.SET_ERROR,
    payload: string;
}

export interface SetUserAction{
    type: AuthActionsEnum.SET_USER;
    payload: IUser
}

export interface SetIsAuth{
    type: AuthActionsEnum.SET_IS_AUTH;
    payload: boolean;
}

export type AuthAction = SetUserAction | SetIsAuth | SetError