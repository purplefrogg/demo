import { GetAuthUserData } from "./auth-Reducer"

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'

let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state, initialized: true,
            }

        default:
            return state
    }
}

export const setInitialized = () => ({ type: INITIALIZED_SUCCESS })

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(GetAuthUserData())
    Promise.all([promise]).then(() => {
        dispatch(setInitialized())}
    )
}



export default appReducer