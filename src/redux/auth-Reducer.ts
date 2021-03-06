import { FormAction, stopSubmit } from "redux-form"
import { ResultCodeCaptchaEnum, ResultCodeEnum } from "../api/api"
import { authApi } from "../api/authApi"
import { BaseThunkType, InferActionsTypes } from "./redux-store"


let initialState = {
    userId: null as (number | null),
    login: null as null | string,
    email: null as null | string,
    isAuth: false,
    captcha: null as null | string
}

const authReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'auth/SET_AUTH_USER_DATA':
        case 'auth/SET_CAPTCHA':
            return {
                ...state, ...action.payload,
            }
        default:
            return state
    }
}

export const actions = {
    setAuthUserData: (userId: number | null, login: string | null, email: string | null, isAuth: boolean) =>
    ({ type: 'auth/SET_AUTH_USER_DATA', payload: { userId, login, email, isAuth } } as const),
    setCaptcha: (captcha: string) =>
    ({ type:  'auth/SET_CAPTCHA', payload: { captcha }} as const)
}

export const GetAuthUserData = ():ThunkType => async (dispatch) => {
    let response = await authApi.me()
    if (response.resultCode === ResultCodeEnum.success) {
        let { id, login, email } = response.data
        dispatch(actions.setAuthUserData(id, login, email, true))
    }
}
export const login = (email: string, password: string, rememberMe: boolean, captcha: string): ThunkType =>
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
export const logout = (): ThunkType => async (dispatch) => {
    let response = await authApi.logout()
    if (response.resultCode === ResultCodeEnum.success) {
        dispatch(actions.setAuthUserData(null, null, null, false))
    }
}
export const getCaptcha = (): ThunkType => async (dispatch) => {
    let response = await authApi.getCaptcha()
    dispatch(actions.setCaptcha(response.url))
}
export default authReducer



export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType =BaseThunkType<ActionsType | FormAction>
