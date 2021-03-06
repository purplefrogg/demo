import { PhotosType, ProfileType } from "../redux/profile-Reducer";
import { instance, APIResponseType } from "./api";

type SavePhotosResponseDataType = {
    photos: PhotosType
}


export const profileApi = ({
    getProfile(userId: number) {
        return instance.get<ProfileType>(`profile/` + userId).then(res => res.data)
    },
    getStatus(userId: number) {
        return instance.get<string>(`profile/status/` + userId).then(res => res.data)
    },
    updateStatus(status: string) {
        return instance.put<APIResponseType>(`profile/status/`, {
            status: status
        }).then(res => res.data)
    },
    updatePhoto(photo: File) {
        let formData = new FormData();
        formData.append('image', photo);
        return instance.put<APIResponseType<SavePhotosResponseDataType>>(`profile/photo/`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(res => res.data)
    },
    updateProfile(profile: ProfileType) {
        return instance.put<APIResponseType<ProfileType>>(`profile`, profile).then(res => res.data)
    }
});
