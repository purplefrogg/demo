const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURENT_PAGE = 'SET_CURENT_PAGE'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'


let initialState = {
    users:[ ],
    totalCount: 6,
    count: 100,
    page: 1,
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
        default:
            return state;
    }
    
}

export const followAC = (userId) => ({ type: FOLLOW, id: userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW, id: userId })
export const setUsersAC = (users) => ({ type: SET_USERS, users })
export const setCurentPageAC = (page) => ({ type: SET_CURENT_PAGE, page })
export const setTotalCountAC = (totalCount) => ({ type: SET_TOTAL_COUNT, totalCount })


export default usersReducer