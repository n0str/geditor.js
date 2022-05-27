import {IUser} from "../../../types/user";
import {AuthActionsEnum, SetError, SetIsAuth, SetAccessToken, SetUserAction} from "./types";
import {AppDispatch} from "../../index";
import AuthService from "../../../services/auth-service";
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const setUser = (user: IUser): SetUserAction => {
    return {type: AuthActionsEnum.SET_USER, payload: user}
}

export const setError = (error: string): SetError => {
    return {type: AuthActionsEnum.SET_ERROR, payload: error}
}

export const setIsAuth = (auth: boolean): SetIsAuth => {
    return {type: AuthActionsEnum.SET_IS_AUTH, payload: auth}
}

export const setAccessToken = (accessToken: string): SetAccessToken => {
    return {type: AuthActionsEnum.SET_ACCESS_TOKEN, payload: accessToken}
}

export const joinWorkspace = (workspace: string) => async (dispatch: AppDispatch) => {
    try{
        const response = await AuthService.joinWorkspace(workspace);
        AuthService.authorizeUser(dispatch, response)
    }catch(e: any){
        AuthService.catchAuthorizationError(dispatch, e)
    }
}

export const logout = () => async (dispatch: AppDispatch) => {
    try{
        await AuthService.logout()
        dispatch(setUser({} as IUser))
        dispatch(setIsAuth(false))
        dispatch(setAccessToken(""))
    }catch(e: any){
        dispatch(setError(e.response))
    }
}