import { usersApi } from "../api/usersApi"
import { updateObjectInArray } from "../utils/object-Helpers"
import { PhotosType } from "./profile-Reducer"
import { BaseThunkType, InferActionsTypes } from "./redux-store"


export type UserType = {
    name: string
    id: number
    photos: PhotosType
    status: string
    followed: boolean
}

let initialState = {
    users: [] as Array<UserType>,
    totalCount: 0 as number,
    count: 100 as number,
    page: 1 as number,
    isFetching: true as boolean,
    isFollowing: [] as  Array<number>
}
const usersReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'FOLLOW': {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.id, "id", { followed: true })
            }
        }
        case "UNFOLLOW": {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.id, "id", { followed: false })
            }
        }
        case 'SET_USERS': {
            return { ...state, users: action.users }
        }
        case 'SET_CURRENT_PAGE': {
            return { ...state, page: action.page }
        }
        case 'SET_TOTAL_COUNT': {
            return { ...state, totalCount: action.totalCount }
        }
        case 'TOGGLE_IS_FETCHING': {
            return { ...state, isFetching: action.isFetching }
        }
        case 'TOGGLE_IS_FOLLOWING': {
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
export const actions = {
    followSuccess: (userId: number) => ({ type: 'FOLLOW', id: userId } as const),
    unfollowSuccess: (userId: number) => ({ type: 'UNFOLLOW', id: userId } as const),
    setUsers: (users: any) => ({ type: 'SET_USERS', users } as const),
    setCurrentPage: (page: number) => ({ type: 'SET_CURRENT_PAGE', page } as const),
    setTotalCount: (totalCount: number) => ({ type: 'SET_TOTAL_COUNT', totalCount } as const),
    toggleIsFetching: (isFetching: boolean) => ({ type: 'TOGGLE_IS_FETCHING', isFetching } as const),
    toggleIsFollowing: (isFetching: boolean, userId: number) => ({ type: 'TOGGLE_IS_FOLLOWING', isFetching, id: userId } as const)
}



export const requestUsers = (page: number, count: number): ThunkType =>
    async (dispatch) => {
        dispatch(actions.toggleIsFetching(true))
        dispatch(actions.setCurrentPage(page));

        let response = await usersApi.getUsers(page, count)
        dispatch(actions.setUsers(response.items))
        dispatch(actions.setTotalCount(response.totalCount))
        dispatch(actions.toggleIsFetching(false))
    }
export const follow = (id: number): ThunkType =>
    async (dispatch) => {
        dispatch(actions.toggleIsFollowing(true, id))
        let response = await usersApi.followPost(id)

        if (response.resultCode === 0) {
            dispatch(actions.followSuccess(id))
        }
        dispatch(actions.toggleIsFollowing(false, id))
    }
export const unfollow = (id: number): ThunkType => async (dispatch) => {
    dispatch(actions.toggleIsFollowing(true, id))
    let response = await usersApi.followDelete(id)
    if (response.resultCode === 0) {
        dispatch(actions.unfollowSuccess(id))
    }
    dispatch(actions.toggleIsFollowing(false, id))
}


export default usersReducer

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType =BaseThunkType<ActionsType>
