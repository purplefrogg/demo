import { GetItemsType, instance, ResponseType } from "./api";



export const usersApi = ({
    getUsers(page: number, count: number) {
        return instance.get<GetItemsType>(`users?page=${page}&count=${count}`)
        .then(res => {
            return res.data
        })
    },
    followDelete(id: number) {
        return instance.delete(`follow/${id}`).then(res => res.data) as Promise<ResponseType>
    },
    followPost(id: number) {
        return instance.post<ResponseType>(`follow/${id}`).then(res => res.data)
    }
});
