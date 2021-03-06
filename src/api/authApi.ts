import { instance, ResultCodeEnum, ResultCodeCaptchaEnum, ResponseType } from "./api";


 type MeResponseType = {
        id: number
        email: string
        login: string
}
 type LoginResponseType = {
        userId: number
}
 
export const authApi = ({
    me() {
        return instance.get<ResponseType<MeResponseType>>(`auth/me`).then(res => res.data);
    },
    login(email: string, password: string, rememberMe = false, captcha: string) {
        return instance.post<ResponseType<LoginResponseType, ResultCodeCaptchaEnum & ResultCodeEnum>>(`auth/login`, {
            email,
            password,
            rememberMe,
            captcha
        }).then(res => res.data);
    },
    logout() {
        return instance.delete(`auth/login`).then(res => res.data);
    },
    getCaptcha() {
        return instance.get(`security/get-captcha-url`).then(res => res.data);
    }
});
