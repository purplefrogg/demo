import { Action, applyMiddleware, combineReducers, compose, createStore } from "redux";
import authReducer from "./auth-Reducer";
import messageReducer from "./message-Reduser";
import newsReducer from "./news-Reducer";
import profileReducer from "./profile-Reducer";
import usersReducer from "./users-Reducer";
import appReducer from "./app-Reducer";
import thunkMiddleware, { ThunkAction } from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'


let rootReducer = combineReducers({
    news: newsReducer,
    messenger: messageReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
})

type RootReducerType = typeof rootReducer
export type AppReducerType = ReturnType<RootReducerType>

type PropertiesTypes<T> = T extends {[key: string]: infer U} ? U : never
export type InferActionsTypes<T extends {[key: string]: (...args: any)=> any}> =ReturnType<PropertiesTypes<T>>

export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, AppReducerType, unknown, A>


//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))
//@ts-ignore
window.store = store;

export default store