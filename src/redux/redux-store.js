import { combineReducers, createStore } from "redux";
import messageReducer from "./message-Reduser";
import newsReducer from "./news-Reducer";
import profileReducer from "./profile-Reducer";

let reducers = combineReducers({
    news: newsReducer,
    messenger: messageReducer,
    profile: profileReducer,
})

let store = createStore(reducers);

export default store