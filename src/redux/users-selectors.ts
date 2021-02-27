import { createSelector } from "reselect"
import { AppReducerType } from "./redux-store"

const getUsersSelector = (state: AppReducerType) => {
    return state.usersPage.users
}
export const getUsers = createSelector(getUsersSelector, (users) => {
    return users.filter((u: any) => true)
})
    
export const getTotalCount = (state: AppReducerType) => {
    return state.usersPage.totalCount
}
export const getPage = (state: AppReducerType) => {
    return state.usersPage.page
}
export const getCount = (state: AppReducerType) => {
    return state.usersPage.count
}
export const getIsFetching = (state: AppReducerType) => {
    return state.usersPage.isFetching
}
export const getIsFollowing = (state: AppReducerType) => {
    return state.usersPage.isFollowing
}


