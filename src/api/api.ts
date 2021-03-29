import axios from "axios"

export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "11592067-90bf-45e8-8dde-1063580dfd68"
    }
})


export enum ResultCodeEnum {
    success = 0,
    error = 1
}
export enum ResultCodeCaptchaEnum {
    captchaIsRequired = 10
}

export type GetItemsType<T> = {
    items: Array<T>
    totalCount: number
    error: string | null
}
export type APIResponseType<D = {}, RS = ResultCodeEnum> = {
    data: D
    resultCode: RS
    messages: Array<string>
}
