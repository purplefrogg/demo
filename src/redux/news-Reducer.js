const ADD_POST = 'ADD-POST'
const ON_CHANGE_TEXTPOST = 'ON-CHANGE-TEXTPOST'

let initialState = {
    inputtingPostText: '',
    posts: [
        { idProfile: '/id001', author: 'Trish Una', text: 'hey, its mario', icon: 'https://sun9-34.userapi.com/impf/c845420/v845420775/bafaa/hP5ZTk4e-O0.jpg?size=200x200&quality=96&proxy=1&sign=c915e9a943591bf8db59656c689429e4&type=album', img: "https://atulhost.com/wp-content/uploads/2019/06/anime-wallpaper-hd-07-1536x864.jpg" },
        { idProfile: '/id002', author: 'Josuke Higashikata', text: 'pam, param, pam-pam', icon: 'https://sun9-46.userapi.com/impf/c847124/v847124775/b8f1c/vqovdaYXuwY.jpg?size=250x250&quality=96&proxy=1&sign=9a228fea6ba6a978a4828d27a37a8736&type=album', img: "https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77702165506.jpg" },
        { idProfile: '/id003', author: 'Noriaki Kakyoin', text: 'there must have been some message here', icon: 'https://sun9-8.userapi.com/impf/VHbDZu94RuZOKsTEWBlDda1394KyuywrHKBarQ/fH9OqEmXIyA.jpg?size=339x338&quality=96&proxy=1&sign=53744df87aa471c68f971bc36a375b91&type=album', img: "https://get.wallhere.com/photo/illustration-night-white-hair-anime-anime-girls-blue-eyes-park-knee-highs-bench-school-uniform-headphones-ponytail-Tomori-Nao-Charlotte-anime-darkness-screenshot-computer-wallpaper-4000x2250-px-629150.jpg" },
        { idProfile: '/id004', author: 'Koichi Hirose', text: 'hello, world', icon: 'https://sun9-59.userapi.com/impf/c848624/v848624775/462a0/Dr0XNNLUSDA.jpg?size=250x250&quality=96&proxy=1&sign=0182183292e77447f13b8bfd3ca5626a&type=album', img: "https://wallpapertag.com/wallpaper/full/6/d/8/465140-beautiful-anime-wallpaper-2560x1600-samsung-galaxy.jpg" },
    ]
}
const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ON_CHANGE_TEXTPOST:
            return {
                ...state,
                inputtingPostText: action.newText
            }
        case ADD_POST:
            return {
                ...state,
                inputtingPostText: '',
                posts: [
                    {   icon: 'https://sun9-34.userapi.com/impf/c845420/v845420775/bafaa/hP5ZTk4e-O0.jpg?size=200x200&quality=96&proxy=1&sign=c915e9a943591bf8db59656c689429e4&type=album',
                        text: state.inputtingPostText,
                        idProfile: '/id001', author: 'Trish Una',
                    },
                    ...state.posts,
                ]
            }
        default:
            return state;
    }
    
}
export const onChangeTextPostActionCreator = (text) => 
    ({type:ON_CHANGE_TEXTPOST, newText:text})
export const addPostActionCreator = () => ({type:ADD_POST})

export default newsReducer