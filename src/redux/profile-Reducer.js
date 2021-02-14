import { stopSubmit } from "redux-form"
import { profileApi } from "../api/api"

const SET_USER_PROFILE = 'proflie/SET_USER_PROFILE'
const SET_STATUS = 'proflie/SET_STATUS'
const SET_PHOTOS = 'profile/SET_PHOTOS'

let initialState = {
    profile: null,
    status: "",
}

const profileReducer = (state = initialState, action) => {
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
                ...state, profile: {...state.profile, photos: action.photos}
            }

        default:
            return state
    }
}

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const savePhotosSuccess = (photos) => ({ type: SET_PHOTOS, photos })

export const setStatus = (status) => ({ type: SET_STATUS, status })

export const getUserProfile = (userId) => async (dispatch) => {
        let response = await profileApi.getProfile(userId)
        dispatch(setUserProfile(response.data))
    }
export const savePhoto = (photo) => async (dispatch) => {
        let response = await profileApi.updatePhoto(photo)
        if(response.data.resultCode === 0){
            dispatch(savePhotosSuccess(response.data.data.photos))
        }

    }
    export const saveProfile = (profile) => async (dispatch, getState) => {
        const userId = getState().auth.userId
        const response = await profileApi.updateProfile(profile)
        if(response.data.resultCode === 0){
            dispatch(getUserProfile(userId))
        } else {
            dispatch(stopSubmit("ProfileData", { _error: response.data.messages[0]}))
            
            return Promise.reject(response.data.messages[0])
        }
    }

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileApi.getStatus(userId)
            dispatch(setStatus(response.data))
}

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileApi.updateStatus(status)
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
}

export default profileReducer