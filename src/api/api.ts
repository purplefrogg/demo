import axios from "axios"
import { ProfileType } from "../redux/profile-Reducer"

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "dd920698-43c2-4a1d-aa58-8b7dafae5603"
    }
})

export const usersApi = ({
    getUsers(page: number, count: number) {
        return instance.get(`users?page=${page}&count=${count}`)
    },
    followDelete(id: number) {
        return instance.delete(`follow/${id}`)
    },
    followPost(id: number) {
        return instance.post(`follow/${id}`)
    }
})



export const profileApi = ({
    getProfile(userId: null | number) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status/`, {
            status: status
        })
    },
    updatePhoto(photo: any) {
        let formData = new FormData();
        formData.append('image', photo)
        return instance.put(`profile/photo/`, formData,  {
        headers: {
            'Content-Type': 'multipart/form-data'
          } })
    },
    updateProfile(profile: ProfileType){
        return instance.put(`profile`, profile)
    }
})

type MeResponseType = {
    data: {
        id: number
        email: string
        login: string
    }
    resultCode: ResultCodeEnum
    messages: Array<string>
}
type LoginResponseType = {
    data: {
        userId: number
    }
    resultCode: ResultCodeCaptchaEnum & ResultCodeEnum
    messages: Array<string>
}
type LogoutResponseType = {
    data: {
        userId: number
    }
    resultCode: ResultCodeEnum
    messages: Array<string>
}
type CaptchaResponseType = {
    url: string
}
export enum ResultCodeEnum {
    success = 0,
    error = 1
}
export enum ResultCodeCaptchaEnum {
    captchaIsRequired = 10
}

export const authApi= ({
    me() {
        return instance.get<MeResponseType>(`auth/me`).then(res=> res.data)
    },
    login(email: string, password: string, rememberMe = false, captcha: string){
        return instance.post<LoginResponseType>(`auth/login`, {
            email,
            password, 
            rememberMe,
            captcha
        }).then(res=> res.data)
    },
    logout(){
        return instance.delete<LogoutResponseType>(`auth/login`).then(res=> res.data)
    },
    getCaptcha() {
        return instance.get<CaptchaResponseType>(`security/get-captcha-url`).then(res=> res.data)
    }
})

