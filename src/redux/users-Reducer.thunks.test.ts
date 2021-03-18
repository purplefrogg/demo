import { APIResponseType, ResultCodeEnum } from "../api/api"
import { usersApi } from '../api/usersApi'
import { actions, follow, unfollow } from "./users-Reducer"
jest.mock('../api/usersApi')

const result: APIResponseType = {
    data: {},
    resultCode: ResultCodeEnum.success,
    messages: []
}

const usersApiMock = usersApi as jest.Mocked<typeof usersApi>
let dispatchMock = jest.fn()
let getStateMock = jest.fn()
beforeEach(()=>{
    usersApiMock.followPost.mockReturnValue(Promise.resolve(result))
    usersApiMock.followDelete.mockReturnValue(Promise.resolve(result))
    dispatchMock.mockClear()
    getStateMock.mockClear()
})

test('follow', async () => {
    let thunk = follow(1) 
    await thunk(dispatchMock, getStateMock, {})
    expect(dispatchMock).toBeCalledTimes(3)
    expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.toggleIsFollowing(true, 1))
    expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.followSuccess(1))
    expect(dispatchMock).toHaveBeenNthCalledWith(3, actions.toggleIsFollowing(false, 1))
})
test('unfollow', async () => {
    let thunk = unfollow(1)
    await thunk(dispatchMock, getStateMock, {})
    expect(dispatchMock).toBeCalledTimes(3)
    expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.toggleIsFollowing(true, 1))
    expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.unfollowSuccess(1))
    expect(dispatchMock).toHaveBeenNthCalledWith(3, actions.toggleIsFollowing(false, 1))
})
