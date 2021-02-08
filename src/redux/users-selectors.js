import { createSelector } from "reselect"

const getUsersSelector = (state) => {
    return state.usersPage.users
}
export const getUsers = createSelector(getUsersSelector, (users) => {
    return users.filter(u => true)
})
    
export const getTotalCount = (state) => {
    return state.usersPage.totalCount
}
export const getPage = (state) => {
    return state.usersPage.page
}
export const getCount = (state) => {
    return state.usersPage.count
}
export const getIsFetching = (state) => {
    return state.usersPage.isFetching
}
export const getIsFollowing = (state) => {
    return state.usersPage.isFollowing
}


