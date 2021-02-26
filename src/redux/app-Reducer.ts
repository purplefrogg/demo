import { GetAuthUserData } from "./auth-Reducer"

const INITIALIZED_SUCCESS = 'app/INITIALIZED_SUCCESS'

let initialState: InitialStateType = {
    initialized: false
}
export type InitialStateType = {
    initialized: boolean
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

export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(GetAuthUserData())
    Promise.all([promise]).then(() => {
        dispatch(setInitialized())}
    )
}



export default appReducer