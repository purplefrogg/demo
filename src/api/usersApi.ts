import { GetItemsType, instance, APIResponseType } from "./api";



export const usersApi = ({
    getUsers(page: number, count: number) {
        return instance.get<GetItemsType>(`users?page=${page}&count=${count}`)
        .then(res => {
            return res.data
        })
    },
    followDelete(id: number) {
        return instance.delete(`follow/${id}`).then(res => res.data) as Promise<APIResponseType>
    },
    followPost(id: number) {
        return instance.post<APIResponseType>(`follow/${id}`).then(res => res.data)
    }
});
