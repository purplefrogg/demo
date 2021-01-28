import { usersApi } from "../api/api"

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURENT_PAGE = 'SET_CURENT_PAGE'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING = 'TOGGLE_IS_FOLLOWING'

let initialState = {
    users: [],
    totalCount: 6,
    count: 100,
    page: 1,
    isFetching: true,
    isFollowing: [2, 3]
}
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return { ...u, followed: true }
                    }
                    return u
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return { ...u, followed: false }
                    }
                    return u
                })
            }
        }
        case SET_USERS: {
            return { ...state, users: action.users }
        }
        case SET_CURENT_PAGE: {
            return { ...state, page: action.page }
        }
        case SET_TOTAL_COUNT: {
            return { ...state, totalCount: action.totalCount }
        }
        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching }
        }
        case TOGGLE_IS_FOLLOWING: {
            return {
                ...state, isFollowing: action.isFetching
                    ? [...state.isFollowing, action.id]
                    : state.isFollowing.filter(id => id !== action.id)
            }
        }
        default:
            return state;
    }

}

export const followSuccess = (userId) => ({ type: FOLLOW, id: userId })
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, id: userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurentPage = (page) => ({ type: SET_CURENT_PAGE, page })
export const setTotalCount = (totalCount) => ({ type: SET_TOTAL_COUNT, totalCount })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const toggleIsFollowing = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING, isFetching, id: userId })


export const getUsers = (page, count) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        usersApi.getUsers(page, count)
            .then((response) => {
                dispatch(setUsers(response.data.items))
                dispatch(setTotalCount(response.data.totalCount))
                dispatch(toggleIsFetching(false))
            })

    }
}
export const follow = (id) => {
    return (dispatch) => {
        dispatch(toggleIsFollowing(true, id))
        usersApi.followPost(id)
            .then((response) => {
                if (response.data.resultCode === 0) {
                    dispatch(followSuccess(id))
                }
                dispatch(toggleIsFollowing(false, id))
            })

    }
}
export const unfollow = (id) => {
    return (dispatch) => {
        dispatch(toggleIsFollowing(true, id))
        usersApi.followDelete(id)
            .then((response) => {
                if (response.data.resultCode === 0) {
                    dispatch(unfollowSuccess(id))
                }
                dispatch(toggleIsFollowing(false, id))
            })

    }
}


export default usersReducer