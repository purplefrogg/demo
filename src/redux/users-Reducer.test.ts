import usersReducer, { actions, InitialStateType } from "./users-Reducer"

let state: InitialStateType
beforeEach(() => {
    state = {
        users: [
            { name: 'dima1', id: 1, followed: false, photos: { small: '', large: '' }, status: '' },
            { name: 'dima2', id: 2, followed: false, photos: { small: '', large: '' }, status: '' },
            { name: 'dima3', id: 3, followed: true, photos: { small: '', large: '' }, status: '' }],
        totalCount: 0,
        count: 100,
        page: 1,
        isFetching: false,
        isFollowing: []
    }
})

it('follow', () => {
    let newState = usersReducer(state, actions.followSuccess(1))
    expect(newState.users[0].followed).toBeTruthy()
    expect(newState.users[1].followed).toBeFalsy()
    expect(newState.users[2].followed).toBeTruthy()
})

it('unfollow', () => {
    let newState = usersReducer(state, actions.unfollowSuccess(1))
    expect(newState.users[0].followed).toBeFalsy()
})
