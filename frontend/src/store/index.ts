import {applyMiddleware, combineReducers, createStore} from "redux";
import authReducer from "./reducers/auth";
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    auth: authReducer
})

const persistedState = localStorage.getItem('reduxState') 
                       ? JSON.parse(localStorage.getItem('reduxState')||"")
                       : {}

export const store = createStore(rootReducer, persistedState, applyMiddleware(thunk))

store.subscribe(()=>{
    localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch