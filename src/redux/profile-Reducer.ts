import { FormAction, stopSubmit } from "redux-form"
import { ThunkAction } from "redux-thunk"
import { profileApi } from "../api/api"
import { AppReducerType } from "./redux-store"

const SET_USER_PROFILE = 'proflie/SET_USER_PROFILE'
const SET_STATUS = 'proflie/SET_STATUS'
const SET_PHOTOS = 'profile/SET_PHOTOS'

type ContactsType ={
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

export type InitialStateType = {
    profile: ProfileType | null;
    status: string;
}
let initialState: InitialStateType = {
    profile: null,
    status: "",
}

const profileReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SET_USER_PROFILE:
            return { ...state, profile: action.profile }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case SET_PHOTOS:
            return {
                ...state, profile: { ...state.profile, photos: action.photos } as ProfileType
            }
        default:
            return state
    }
}
type SetUserProfileActionType = { type: typeof SET_USER_PROFILE, profile: ProfileType}
export const setUserProfile = (profile: ProfileType): SetUserProfileActionType => ({ type: SET_USER_PROFILE, profile })

type savePhotosSuccessActionType = { type: typeof SET_PHOTOS, photos: PhotosType }
export const savePhotosSuccess = (photos: PhotosType): savePhotosSuccessActionType => ({ type: SET_PHOTOS, photos })

type setStatusActionType = { type: typeof SET_STATUS, status: string }
export const setStatus = (status: string):setStatusActionType => ({ type: SET_STATUS, status })



type ActionTypes = setStatusActionType | savePhotosSuccessActionType
| FormAction | SetUserProfileActionType
type ThunkActionType = ThunkAction<void, AppReducerType, unknown, ActionTypes>


export const getUserProfile = (userId: null | number): ThunkActionType => async (dispatch) => {
    let response = await profileApi.getProfile(userId)
    dispatch(setUserProfile(response.data))
}
export const savePhoto = (photo: PhotosType): ThunkActionType => async (dispatch) => {
    let response = await profileApi.updatePhoto(photo)
    if (response.data.resultCode === 0) {
        dispatch(savePhotosSuccess(response.data.data.photos))
    }

}
export const saveProfile = (profile: ProfileType): ThunkActionType => async (dispatch, getState) => {
    const userId = getState().auth.userId
    const response = await profileApi.updateProfile(profile)
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId))
    } else {
        dispatch(stopSubmit("ProfileData", { _error: response.data.messages[0] }))

        return Promise.reject(response.data.messages[0])
    }
}

export const getStatus = (userId: number): ThunkActionType => async (dispatch) => {
    let response = await profileApi.getStatus(userId)
    dispatch(setStatus(response.data))
}

export const updateStatus = (status: string): ThunkActionType => async (dispatch) => {
    try {
        let response = await profileApi.updateStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    } catch (error) {
        alert(error)
    }
}

export default profileReducer