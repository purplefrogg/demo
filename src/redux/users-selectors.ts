import { createSelector } from "reselect"
import { AppStateType } from "./redux-store"

const getUsersSelector = (state: AppStateType) => {
    return state.usersPage.users
}
export const getUsers = createSelector(getUsersSelector, (users) => {
    return users.filter((u: any) => true)
})
    
export const getTotalCount = (state: AppStateType) => {
    return state.usersPage.totalCount
}
export const getPage = (state: AppStateType) => {
    return state.usersPage.page
}
export const getCount = (state: AppStateType) => {
    return state.usersPage.count
}
export const getIsFetching = (state: AppStateType) => {
    return state.usersPage.isFetching
}
export const getIsFollowing = (state: AppStateType) => {
    return state.usersPage.isFollowing
}


