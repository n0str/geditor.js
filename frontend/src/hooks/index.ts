import {TypedUseSelectorHook, useSelector, useDispatch} from "react-redux";
import {RootState, AppDispatch} from "../store";
import React from "react";



export const useAuth = () => {
    return !!localStorage.getItem('accessToken');
}

export const useTitle = (title: string): void => {
    React.useEffect(() => {
        const prevTitle = document.title;
        document.title = title;

        return () => {
            document.title = prevTitle;
        };
    }, [title]);
}
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>()