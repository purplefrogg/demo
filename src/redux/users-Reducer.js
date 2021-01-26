const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURENT_PAGE = 'SET_CURENT_PAGE'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

let initialState = {
    users:[ ],
    totalCount: 6,
    count: 100,
    page: 1,
    isFetching: true,
}
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:{
            return{
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.id){
                        return{...u, followed: true}
                    }
                    return u
                }) 
            }
        }
        case UNFOLLOW:{
            return{
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.id){
                        return{...u, followed: false}
                    }
                    return u
                }) 
            }
        }
        case SET_USERS:{
            return{...state, users: action.users}
        }
        case SET_CURENT_PAGE:{
            return{...state, page: action.page}
        }
        case SET_TOTAL_COUNT:{
            return{...state, totalCount: action.totalCount}
        }
        case TOGGLE_IS_FETCHING:{
            return{...state, isFetching: action.isFetching}
        }
        default:
            return state;
    }
    
}

export const follow = (userId) => ({ type: FOLLOW, id: userId })
export const unfollow = (userId) => ({ type: UNFOLLOW, id: userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurentPage = (page) => ({ type: SET_CURENT_PAGE, page })
export const setTotalCount = (totalCount) => ({ type: SET_TOTAL_COUNT, totalCount })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })


export default usersReducer