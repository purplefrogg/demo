import { ThunkAction } from "redux-thunk"
import { GetAuthUserData } from "./auth-Reducer"
import { AppReducerType, InferActionsTypes } from "./redux-store"



let initialState = {
    initialized: false
}

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>

const appReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'app/INITIALIZED_SUCCESS':
            return {
                ...state, initialized: true,
            }

        default:
            return state
    }
}

const actions = {
    setInitialized: () =>({ type: 'app/INITIALIZED_SUCCESS' } as const)
}

type ThunkActionType = ThunkAction<void, AppReducerType, unknown, ActionsType>


export const initializeApp = (): ThunkActionType => (dispatch) => {
    let promise = dispatch(GetAuthUserData())
    Promise.all([promise]).then(() => {
        dispatch(actions.setInitialized())
    }
    )
}

export default appReducer