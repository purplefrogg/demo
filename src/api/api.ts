import axios from "axios"
import { UserType } from "../redux/users-Reducer"

export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "dd920698-43c2-4a1d-aa58-8b7dafae5603"
    }
})


export enum ResultCodeEnum {
    success = 0,
    error = 1
}
export enum ResultCodeCaptchaEnum {
    captchaIsRequired = 10
}

export type GetItemsType = {
    items: Array<UserType>
    totalCount: number
    error: string | null
}
export type APIResponseType<D = {}, RS = ResultCodeEnum> = {
    data: D
    resultCode: RS
    messages: Array<string>
}
