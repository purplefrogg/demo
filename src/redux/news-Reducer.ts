const ADD_POST = 'news/ADD-POST'

export type PostType = {
    idProfile: number
    author: string
    text: string
    icon: string
    img: string | null
}
export type InitialStateType = {
    posts: Array<PostType>
}
let initialState: InitialStateType = {
    posts: [
        { idProfile: 0, author: 'Trish Una', text: 'hey, its mario', icon: 'https://sun9-34.userapi.com/impf/c845420/v845420775/bafaa/hP5ZTk4e-O0.jpg?size=200x200&quality=96&proxy=1&sign=c915e9a943591bf8db59656c689429e4&type=album', img: "https://atulhost.com/wp-content/uploads/2019/06/anime-wallpaper-hd-07-1536x864.jpg" },
        { idProfile: 1, author: 'Josuke Higashikata', text: 'pam, param, pam-pam', icon: 'https://sun9-46.userapi.com/impf/c847124/v847124775/b8f1c/vqovdaYXuwY.jpg?size=250x250&quality=96&proxy=1&sign=9a228fea6ba6a978a4828d27a37a8736&type=album', img: "https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77702165506.jpg" },
        { idProfile: 2, author: 'Koichi Hirose', text: 'hello, world', icon: 'https://sun9-59.userapi.com/impf/c848624/v848624775/462a0/Dr0XNNLUSDA.jpg?size=250x250&quality=96&proxy=1&sign=0182183292e77447f13b8bfd3ca5626a&type=album', img: "https://wallpapertag.com/wallpaper/full/6/d/8/465140-beautiful-anime-wallpaper-2560x1600-samsung-galaxy.jpg" },
    ]
}
const newsReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [
                    {   icon: 'https://sun9-34.userapi.com/impf/c845420/v845420775/bafaa/hP5ZTk4e-O0.jpg?size=200x200&quality=96&proxy=1&sign=c915e9a943591bf8db59656c689429e4&type=album',
                        text: action.text,
                        idProfile: state.posts.length , author: 'Trish Una',
                        img: null
                    },
                    ...state.posts,
                ]
            }
        default:
            return state;
    }
    
}
type AddPostActionType = {
    type: typeof ADD_POST;
    text: string;
}
export const addPost = (text: string): AddPostActionType => ({type:ADD_POST, text})

export default newsReducer