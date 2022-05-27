import {AxiosResponse} from "axios";
import {AuthResponse} from "../types/auth-response";
import api from "../http/index";
import {AppDispatch} from "../store";
import {setError, setIsAuth, setUser, setAccessToken} from "../store/reducers/auth/action-creators";

export default class AuthService{
    static async joinWorkspace(workspace: string): Promise<AxiosResponse<AuthResponse>>{
        return api.post<AuthResponse>('/auth/joinWorkspace', {workspace})
    }

    static async logout(): Promise<void>{
        return api.delete('/auth/logout')
    }

    static authorizeUser = (dispatch: AppDispatch, response: any) => {
        dispatch(setIsAuth(true))
        dispatch(setUser(response.data.user))
        dispatch(setAccessToken(response.data.accessToken))
        dispatch(setError(''))
    }

    static catchAuthorizationError = (dispatch: AppDispatch, e: any) => {
        if(e.response){
            if(Array.isArray(e.response.data.message)){
                dispatch(setError(e.response.data.message[0]))
            }else{
                dispatch(setError(e.response.data.message))
            }
        }
    }
}