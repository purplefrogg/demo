
import { FormAction, stopSubmit } from "redux-form"
import { ThunkAction } from "redux-thunk"
import { authApi } from "../api/api"
import { AppReducerType } from "./redux-store"

const SET_AUTH_USER_DATA = 'auth/SET_AUTH_USER_DATA'
const SET_CAPTCHA = 'auth/SET_CAPTCHA'


let initialState = {
    userId: null as null | number,
    login: null as null | string,
    email: null as null | string,
    isAuth: false,
    captcha: null as null | string
}
export type InitialStateType = typeof initialState


const authReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
        case SET_CAPTCHA:
            return {
                ...state, ...action.payload,
            }
        default:
            return state
    }
}

type ActionTypes = setAuthUserDataType | SetCaptchaType | FormAction

type setAuthUserDataPayloadType = {
    userId: number | null
    login: string | null
    email: string | null
    isAuth: boolean
}

type setAuthUserDataType = {
    type: typeof SET_AUTH_USER_DATA
    payload: setAuthUserDataPayloadType
}
export const setAuthUserData = (userId: number | null, login: string | null, email: string | null, isAuth: boolean): setAuthUserDataType =>
    ({ type: SET_AUTH_USER_DATA, payload: { userId, login, email, isAuth } })


type SetCaptchaType = {
    type: typeof SET_CAPTCHA
    payload: { captcha: string }
}
export const setCaptcha = (captcha: string): SetCaptchaType =>
    ({ type: SET_CAPTCHA, payload: { captcha } })



type ThunkActionType = ThunkAction<Promise<void>, AppReducerType, unknown, ActionTypes>

export const GetAuthUserData = ():ThunkActionType => async (dispatch) => {
    let response = await authApi.me()
    if (response.data.resultCode === 0) {
        let { id, login, email } = response.data.data
        dispatch(setAuthUserData(id, login, email, true))
    }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string): ThunkActionType =>
    async (dispatch) => {
        let response = await authApi.login(email, password, rememberMe, captcha)
        if (response.data.resultCode === 0) {
            dispatch(GetAuthUserData())
        }
        else {
            if (response.data.resultCode === 10) {
                dispatch(getCaptcha())
            }
            let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
            dispatch(stopSubmit("login", { _error: message }))
        }
    }
export const logout = (): ThunkActionType => async (dispatch) => {
    let response = await authApi.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}
export const getCaptcha = (): ThunkActionType => async (dispatch) => {
    let response = await authApi.getCaptcha()
    dispatch(setCaptcha(response.data.url))
}
export default authReducer