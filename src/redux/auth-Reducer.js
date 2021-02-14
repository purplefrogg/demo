
import { stopSubmit } from "redux-form"
import { authApi } from "../api/api"

const SET_AUTH_USER_DATA = 'auth/SET_AUTH_USER_DATA'

let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state, ...action.payload,
            }

        default:
            return state
    }
}

export const setAuthUserData = (userId, login, email, isAuth) =>
    ({ type: SET_AUTH_USER_DATA, payload: { userId, login, email, isAuth } })

export const GetAuthUserData = () => async (dispatch) => {
    let response = await authApi.me()
    if (response.data.resultCode === 0) {
        let { id, login, email } = response.data.data
        dispatch(setAuthUserData(id, login, email, true))
    }
}

export const login = (email, password, rememberMe) => async dispatch => {

    let response = await authApi.login(email, password, rememberMe)
    if (response.data.resultCode === 0) {
        dispatch(GetAuthUserData())
    }
    else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
        dispatch(stopSubmit("ProfileData", { _error: message }))
    }
}
export const logout = () => async dispatch => {
    let response = await authApi.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

export default authReducer