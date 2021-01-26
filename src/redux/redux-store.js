import { combineReducers, createStore } from "redux";
import messageReducer from "./message-Reduser";
import newsReducer from "./news-Reducer";
import profileReducer from "./profile-Reducer";
import usersReducer from "./users-Reducer";

let reducers = combineReducers({
    news: newsReducer,
    messenger: messageReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
})

let store = createStore(reducers);


export default store