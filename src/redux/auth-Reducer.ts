
import { FormAction, stopSubmit } from "redux-form"
import { ThunkAction } from "redux-thunk"
import { authApi, ResultCodeCaptchaEnum, ResultCodeEnum } from "../api/api"
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
    if (response.resultCode === ResultCodeEnum.success) {
        let { id, login, email } = response.data
        dispatch(setAuthUserData(id, login, email, true))
    }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string): ThunkActionType =>
    async (dispatch) => {
        let response = await authApi.login(email, password, rememberMe, captcha)
        if (response.resultCode === ResultCodeEnum.success) {
            dispatch(GetAuthUserData())
        }
        else {
            if (response.resultCode === ResultCodeCaptchaEnum.captchaIsRequired) {
                dispatch(getCaptcha())
            }
            let message = response.messages.length > 0 ? response.messages[0] : "Some error"
            dispatch(stopSubmit("login", { _error: message }))
        }
    }
export const logout = (): ThunkActionType => async (dispatch) => {
    let response = await authApi.logout()
    if (response.resultCode === ResultCodeEnum.success) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}
export const getCaptcha = (): ThunkActionType => async (dispatch) => {
    let response = await authApi.getCaptcha()
    dispatch(setCaptcha(response.url))
}
export default authReducer