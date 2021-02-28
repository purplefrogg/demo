import { ThunkAction } from "redux-thunk"
import { GetAuthUserData } from "./auth-Reducer"
import { AppReducerType } from "./redux-store"

const INITIALIZED_SUCCESS = 'app/INITIALIZED_SUCCESS'


export type InitialStateType = {
    initialized: boolean
}
let initialState: InitialStateType = {
    initialized: false
}

const appReducer = (state = initialState, action: any):InitialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state, initialized: true,
            }

        default:
            return state
    }
}

type SetInitializedActionType = { type: typeof INITIALIZED_SUCCESS}

export const setInitialized = ():SetInitializedActionType => ({ type: INITIALIZED_SUCCESS })

type ActionTypes = SetInitializedActionType
type ThunkActionType = ThunkAction<void, AppReducerType, unknown, ActionTypes>


export const initializeApp = (): ThunkActionType => (dispatch) => {
    let promise = dispatch(GetAuthUserData())
    Promise.all([promise]).then(() => {
        dispatch(setInitialized())}
    )
}



export default appReducer