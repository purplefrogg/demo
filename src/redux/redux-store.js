import { applyMiddleware, combineReducers, createStore } from "redux";
import authReducer from "./auth-Reducer";
import messageReducer from "./message-Reduser";
import newsReducer from "./news-Reducer";
import profileReducer from "./profile-Reducer";
import usersReducer from "./users-Reducer";
import appReducer from "./app-Reducer";
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'


let reducers = combineReducers({
    news: newsReducer,
    messenger: messageReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;

export default store