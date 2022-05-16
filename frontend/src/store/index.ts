import {applyMiddleware, combineReducers, createStore} from "redux";
import authReducer from "./reducers/auth";
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    auth: authReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch