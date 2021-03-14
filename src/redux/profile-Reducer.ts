import { FormAction, stopSubmit } from "redux-form"
import { ResultCodeEnum } from "../api/api"
import { profileApi } from "../api/profileApi"
import { BaseThunkType, InferActionsTypes } from "./redux-store"

let initialState = {
    profile: null as ProfileType | null,
    status: "" as string,
}

const profileReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'proflie/SET_USER_PROFILE':
            return { ...state, profile: action.profile }
        case 'proflie/SET_STATUS':
            return {
                ...state,
                status: action.status
            }
        case 'profile/SET_PHOTOS':
            return {
                ...state, profile: { ...state.profile, photos: action.photos } as ProfileType
            }
        default:
            return state
    }
}

const actions = {
    setUserProfile: (profile: ProfileType) => ({ type: 'proflie/SET_USER_PROFILE', profile } as const),
    savePhotosSuccess: (photos: PhotosType) => ({ type: 'profile/SET_PHOTOS', photos } as const),
    setStatus: (status: string) => ({ type: 'proflie/SET_STATUS', status } as const)
}


export const getUserProfile = (userId: number): ThunkType => async (dispatch) => {
    let data = await profileApi.getProfile(userId)
    dispatch(actions.setUserProfile(data))
}
export const savePhoto = (photo: File): ThunkType => async (dispatch) => {
    let data = await profileApi.updatePhoto(photo)
    if (data.resultCode === 0) {
        dispatch(actions.savePhotosSuccess(data.data.photos))
    }

}
export const saveProfile = (profile: ProfileType): ThunkType => async (dispatch, getState: any) => {
    const userId = getState().auth.userId
    const data = await profileApi.updateProfile(profile)
    if (data.resultCode === 0) {
        dispatch(getUserProfile(userId))
    } else {
        dispatch(stopSubmit("ProfileData", { _error: data.messages[0] }))

        return Promise.reject(data.messages[0])
    }
}
export const getStatus = (userId: number): ThunkType => async (dispatch) => {
    let data = await profileApi.getStatus(userId)
    dispatch(actions.setStatus(data))
}
export const updateStatus = (status: string): ThunkType => async (dispatch) => {
    try {
        let data = await profileApi.updateStatus(status)
        if (data.resultCode === ResultCodeEnum.success) {
            dispatch(actions.setStatus(status))
        }
    } catch (error) {
        alert(error)
    }
}

export default profileReducer

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType =BaseThunkType<ActionsType | FormAction>

export type ContactsType ={
    github: string 
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
export type PhotosType = {
    small: string
    large: string
}
export type ProfileType = {
    userId: number 
    aboutMe: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
}