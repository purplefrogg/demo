import { UserType } from "../redux/users-Reducer";
import { GetItemsType, instance, APIResponseType } from "./api";



export const usersApi = ({
    getUsers(page: number, count: number, friend: null | boolean = null, term='') {
        return instance.get<GetItemsType<UserType>>(`users?page=${page}&count=${count}` +
        (term ? `&term=${term}` : '') + (friend === null ? '' : `&friend=${friend}`) )
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
