import { ThunkAction } from "redux-thunk"
import { usersApi } from "../api/api"
import { updateObjectInArray } from "../utils/object-Helpers"
import { PhotosType } from "./profile-Reducer"
import { AppReducerType } from "./redux-store"

const FOLLOW = 'users/FOLLOW'
const UNFOLLOW = 'users/UNFOLLOW'
const SET_USERS = 'users/SET-USERS'
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE'
const SET_TOTAL_COUNT = 'users/SET_TOTAL_COUNT'
const TOGGLE_IS_FETCHING = 'users/TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING = 'users/TOGGLE_IS_FOLLOWING'

export type UserType = {
    name: string
    id: number
    photos: PhotosType
    status: string
    followed: boolean
}
type InitialStateType = {
    users: Array<UserType>
    totalCount: number
    count: number
    page: number
    isFetching: boolean
    isFollowing: Array<number>
}
let initialState: InitialStateType = {
    users: [],
    totalCount: 0,
    count: 100,
    page: 1,
    isFetching: true,
    isFollowing: []
}
const usersReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.id, "id", { followed: true })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.id, "id", { followed: false })
            }
        }
        case SET_USERS: {
            return { ...state, users: action.users }
        }
        case SET_CURRENT_PAGE: {
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
                    : state.isFollowing.filter((id: number) => id !== action.id)
            }
        }
        default:
            return state;
    }

}

export const followSuccess = (userId: number) => ({ type: FOLLOW, id: userId })
export const unfollowSuccess = (userId: number) => ({ type: UNFOLLOW, id: userId })
export const setUsers = (users: any) => ({ type: SET_USERS, users })
export const setCurrentPage = (page: number) => ({ type: SET_CURRENT_PAGE, page })
export const setTotalCount = (totalCount: number) => ({ type: SET_TOTAL_COUNT, totalCount })
export const toggleIsFetching = (isFetching: boolean) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const toggleIsFollowing = (isFetching: boolean, userId: number) => ({ type: TOGGLE_IS_FOLLOWING, isFetching, id: userId })

type ActionTypes = ReturnType<typeof followSuccess> |
    ReturnType<typeof unfollowSuccess> |
    ReturnType<typeof setUsers> |
    ReturnType<typeof setCurrentPage> |
    ReturnType<typeof setTotalCount> |
    ReturnType<typeof toggleIsFetching> |
    ReturnType<typeof toggleIsFollowing> 
    
type ThunkActionType = ThunkAction<void, AppReducerType, unknown, ActionTypes>


export const requestUsers = (page: number, count: number): ThunkActionType =>
     async (dispatch) => {
    dispatch(toggleIsFetching(true))
    dispatch(setCurrentPage(page));

    let response = await usersApi.getUsers(page, count)
    dispatch(setUsers(response.data.items))
    dispatch(setTotalCount(response.data.totalCount))
    dispatch(toggleIsFetching(false))
}
export const follow = (id: number): ThunkActionType =>
    async (dispatch) => {
        dispatch(toggleIsFollowing(true, id))
        let response = await usersApi.followPost(id)

        if (response.data.resultCode === 0) {
            dispatch(followSuccess(id))
        }
        dispatch(toggleIsFollowing(false, id))
    }
export const unfollow = (id: number): ThunkActionType => async (dispatch) => {
    dispatch(toggleIsFollowing(true, id))
    let response = await usersApi.followDelete(id)
    if (response.data.resultCode === 0) {
        dispatch(unfollowSuccess(id))
    }
    dispatch(toggleIsFollowing(false, id))
}


export default usersReducer