import { stopSubmit } from "redux-form"
import { authApi } from "../api/api"

const SET_AUTH_USER_DATA = 'auth/SET_AUTH_USER_DATA'
const SET_CAPTCHA = 'auth/SET_CAPTCHA'

let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
    captcha: null
}

const authReducer = (state = initialState, action) => {
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

export const setAuthUserData = (userId, login, email, isAuth, captcha) =>
    ({ type: SET_AUTH_USER_DATA, payload: { userId, login, email, isAuth, captcha } })

export const setCaptcha = (captcha) =>
    ({ type: SET_CAPTCHA, payload: {captcha }})

export const GetAuthUserData = () => async (dispatch) => {
    let response = await authApi.me()
    if (response.data.resultCode === 0) {
        let { id, login, email } = response.data.data
        dispatch(setAuthUserData(id, login, email, true))
    }
}

export const login = (email, password, rememberMe, captcha) => async dispatch => {

    let response = await authApi.login(email, password, rememberMe, captcha)
    if (response.data.resultCode === 0) {
        dispatch(GetAuthUserData())
    }
    else {
        if(response.data.resultCode === 10){
            dispatch(getCaptcha())
        }
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
        dispatch(stopSubmit("login", { _error: message }))
    }
}
export const logout = () => async dispatch => {
    let response = await authApi.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}
export const getCaptcha = () => async dispatch => {
    let response = await authApi.getCaptcha()
    dispatch(setCaptcha(response.data.url))
 
}
export default authReducer