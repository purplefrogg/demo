import { combineReducers, createStore } from "redux";
import authReducer from "./auth-Reducer";
import messageReducer from "./message-Reduser";
import newsReducer from "./news-Reducer";
import profileReducer from "./profile-Reducer";
import usersReducer from "./users-Reducer";

let reducers = combineReducers({
    news: newsReducer,
    messenger: messageReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    auth: authReducer,
})

let store = createStore(reducers);


export default store