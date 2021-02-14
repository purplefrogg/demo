import axios from "axios"

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "dd920698-43c2-4a1d-aa58-8b7dafae5603"
    }
})

export const usersApi = ({
    getUsers(page, count) {
        return instance.get(`users?page=${page}&count=${count}`)
    },
    followDelete(id) {
        return instance.delete(`follow/${id}`)
    },
    followPost(id) {
        return instance.post(`follow/${id}`)
    }
})



export const profileApi = ({
    getProfile(userId) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status) {
        return instance.put(`profile/status/`, {
            status: status
        })
    },
    updatePhoto(photo) {
        let formData = new FormData();
        formData.append('image', photo)
        return instance.put(`profile/photo/`, formData,  {
        headers: {
            'Content-Type': 'multipart/form-data'
          } })
    },
    updateProfile(profile){
        return instance.put(`profile`, profile)
    }
})
export const authApi = ({
    me() {
        return instance.get(`auth/me`)
    },
    login(email, password, rememberMe = false){
        return instance.post(`auth/login`, {
            email,
            password, 
            rememberMe
        })
    },
    logout(){
        return instance.delete(`auth/login`)
    }
})