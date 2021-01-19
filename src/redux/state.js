
const ON_CHANGE_MESSAGE = 'ON-CHANGE-MESSAGE'
const ADD_MESSAGE = 'ADD-MESSAGE'

let store = {
    state : {
        messenger:{
            chats:[
                {id: 1, name:'Trish Una', icon:'https://sun9-34.userapi.com/impf/c845420/v845420775/bafaa/hP5ZTk4e-O0.jpg?size=200x200&quality=96&proxy=1&sign=c915e9a943591bf8db59656c689429e4&type=album'},
                {id: 2, name:'Josuke Higashikata', icon:'https://sun9-46.userapi.com/impf/c847124/v847124775/b8f1c/vqovdaYXuwY.jpg?size=250x250&quality=96&proxy=1&sign=9a228fea6ba6a978a4828d27a37a8736&type=album'},
                {id: 3, name:'Noriaki Kakyoin', icon:'https://sun9-8.userapi.com/impf/VHbDZu94RuZOKsTEWBlDda1394KyuywrHKBarQ/fH9OqEmXIyA.jpg?size=339x338&quality=96&proxy=1&sign=53744df87aa471c68f971bc36a375b91&type=album'},
                {id: 4, name:'Kira Yoshikage', icon:'https://i.pinimg.com/474x/0a/8c/de/0a8cde733252ac8941f1210f1299e295.jpg'},
                {id: 5, name:'Joseph Joestar', icon:'https://i.pinimg.com/474x/1d/ed/7c/1ded7cf734a605f6d18f699abf7d9eaa.jpg'},
                {id: 6, name:'bruno buccerati', icon:'https://i.pinimg.com/474x/fd/91/db/fd91dbc2886555e0f9a8832171959784.jpg'},
                {id: 7, name:'DIO', icon:'https://pbs.twimg.com/profile_images/1026856822492352512/ZEig1q14_400x400.jpg'},
                {id: 8, name:'kakashi hatake', icon:'https://i.pinimg.com/originals/32/62/8c/32628c0b689967a8c044a35f8217d838.jpg'},
                {id: 9, name:'Hisoka', icon:'https://i.pinimg.com/564x/fc/0a/ec/fc0aec5184be7873b54ccb0a375e632c.jpg'},
               
            ],
            messages:[
                {message:'who are you'},
                {message:'I am DIO BRANDO'},
                {message:'who are you'},
                {message:'I am DIO BRANDO'},
            ],
            inputtingMessage :'',
        },
        news:{
            posts:[
                { idProfile:'/id001', author:'Trish Una', text: 'hey, its mario', icon:'https://sun9-34.userapi.com/impf/c845420/v845420775/bafaa/hP5ZTk4e-O0.jpg?size=200x200&quality=96&proxy=1&sign=c915e9a943591bf8db59656c689429e4&type=album', img:"https://atulhost.com/wp-content/uploads/2019/06/anime-wallpaper-hd-07-1536x864.jpg" },
                { idProfile:'/id002', author:'Josuke Higashikata', text: 'pam, param, pam-pam', icon:'https://sun9-46.userapi.com/impf/c847124/v847124775/b8f1c/vqovdaYXuwY.jpg?size=250x250&quality=96&proxy=1&sign=9a228fea6ba6a978a4828d27a37a8736&type=album', img:"https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77702165506.jpg" },
                { idProfile:'/id003', author:'Noriaki Kakyoin', text: 'there must have been some message here', icon:'https://sun9-8.userapi.com/impf/VHbDZu94RuZOKsTEWBlDda1394KyuywrHKBarQ/fH9OqEmXIyA.jpg?size=339x338&quality=96&proxy=1&sign=53744df87aa471c68f971bc36a375b91&type=album',  img:"https://get.wallhere.com/photo/illustration-night-white-hair-anime-anime-girls-blue-eyes-park-knee-highs-bench-school-uniform-headphones-ponytail-Tomori-Nao-Charlotte-anime-darkness-screenshot-computer-wallpaper-4000x2250-px-629150.jpg" },
                { idProfile:'/id004', author:'Koichi Hirose', text: 'hello, world', icon:'https://sun9-59.userapi.com/impf/c848624/v848624775/462a0/Dr0XNNLUSDA.jpg?size=250x250&quality=96&proxy=1&sign=0182183292e77447f13b8bfd3ca5626a&type=album', img:"https://wallpapertag.com/wallpaper/full/6/d/8/465140-beautiful-anime-wallpaper-2560x1600-samsung-galaxy.jpg" },
            ]
        },
        profile:{
            
                id001:{name: 'Trish Una',
                    status: 'sleep',
                    avatar: 'https://sun9-34.userapi.com/impf/c845420/v845420775/bafaa/hP5ZTk4e-O0.jpg?size=200x200&quality=96&proxy=1&sign=c915e9a943591bf8db59656c689429e4&type=album',

                    posts: [
                        { idProfile:'/id001', author: 'Trish Una', text: 'hey, its mario', icon: 'https://sun9-34.userapi.com/impf/c845420/v845420775/bafaa/hP5ZTk4e-O0.jpg?size=200x200&quality=96&proxy=1&sign=c915e9a943591bf8db59656c689429e4&type=album', img: "https://atulhost.com/wp-content/uploads/2019/06/anime-wallpaper-hd-07-1536x864.jpg" },
                        { idProfile:'/id001', author: 'Trish Una', text: 'hey, its mario', icon: 'https://sun9-34.userapi.com/impf/c845420/v845420775/bafaa/hP5ZTk4e-O0.jpg?size=200x200&quality=96&proxy=1&sign=c915e9a943591bf8db59656c689429e4&type=album', img: "https://atulhost.com/wp-content/uploads/2019/06/anime-wallpaper-hd-07-1536x864.jpg" },
                        { idProfile:'/id001', author: 'Trish Una', text: 'hey, its mario', icon: 'https://sun9-34.userapi.com/impf/c845420/v845420775/bafaa/hP5ZTk4e-O0.jpg?size=200x200&quality=96&proxy=1&sign=c915e9a943591bf8db59656c689429e4&type=album', img: "https://atulhost.com/wp-content/uploads/2019/06/anime-wallpaper-hd-07-1536x864.jpg" },
                        { idProfile:'/id001', author: 'Trish Una', text: 'hey, its mario', icon: 'https://sun9-34.userapi.com/impf/c845420/v845420775/bafaa/hP5ZTk4e-O0.jpg?size=200x200&quality=96&proxy=1&sign=c915e9a943591bf8db59656c689429e4&type=album', img: "https://atulhost.com/wp-content/uploads/2019/06/anime-wallpaper-hd-07-1536x864.jpg" },
                    ]
                },
                id002:{name: 'Josuke Higashikata',
                    status: 'aggressive',
                    avatar: 'https://sun9-46.userapi.com/impf/c847124/v847124775/b8f1c/vqovdaYXuwY.jpg?size=250x250&quality=96&proxy=1&sign=9a228fea6ba6a978a4828d27a37a8736&type=album',

                    posts: [
                        { idProfile:'/id002', author:'Josuke Higashikata', text: 'pam, param, pam-pam', icon:'https://sun9-46.userapi.com/impf/c847124/v847124775/b8f1c/vqovdaYXuwY.jpg?size=250x250&quality=96&proxy=1&sign=9a228fea6ba6a978a4828d27a37a8736&type=album', img:"https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77702165506.jpg" },
                        { idProfile:'/id002', author:'Josuke Higashikata', text: 'pam, param, pam-pam', icon:'https://sun9-46.userapi.com/impf/c847124/v847124775/b8f1c/vqovdaYXuwY.jpg?size=250x250&quality=96&proxy=1&sign=9a228fea6ba6a978a4828d27a37a8736&type=album', img:"https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77702165506.jpg" },
                        { idProfile:'/id002', author:'Josuke Higashikata', text: 'pam, param, pam-pam', icon:'https://sun9-46.userapi.com/impf/c847124/v847124775/b8f1c/vqovdaYXuwY.jpg?size=250x250&quality=96&proxy=1&sign=9a228fea6ba6a978a4828d27a37a8736&type=album', img:"https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77702165506.jpg" },
                        { idProfile:'/id002', author:'Josuke Higashikata', text: 'pam, param, pam-pam', icon:'https://sun9-46.userapi.com/impf/c847124/v847124775/b8f1c/vqovdaYXuwY.jpg?size=250x250&quality=96&proxy=1&sign=9a228fea6ba6a978a4828d27a37a8736&type=album', img:"https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77702165506.jpg" },
                    ]
                },
                id003:{name: 'Noriaki Kakyoin',
                    status: 'chad',
                    avatar: 'https://sun9-8.userapi.com/impf/VHbDZu94RuZOKsTEWBlDda1394KyuywrHKBarQ/fH9OqEmXIyA.jpg?size=339x338&quality=96&proxy=1&sign=53744df87aa471c68f971bc36a375b91&type=album',

                    posts: [
                        { idProfile:'/id003', author:'Noriaki Kakyoin', text: 'there must have been some message here', icon:'https://sun9-8.userapi.com/impf/VHbDZu94RuZOKsTEWBlDda1394KyuywrHKBarQ/fH9OqEmXIyA.jpg?size=339x338&quality=96&proxy=1&sign=53744df87aa471c68f971bc36a375b91&type=album',  img:"https://get.wallhere.com/photo/illustration-night-white-hair-anime-anime-girls-blue-eyes-park-knee-highs-bench-school-uniform-headphones-ponytail-Tomori-Nao-Charlotte-anime-darkness-screenshot-computer-wallpaper-4000x2250-px-629150.jpg" },
                        { idProfile:'/id003', author:'Noriaki Kakyoin', text: 'there must have been some message here', icon:'https://sun9-8.userapi.com/impf/VHbDZu94RuZOKsTEWBlDda1394KyuywrHKBarQ/fH9OqEmXIyA.jpg?size=339x338&quality=96&proxy=1&sign=53744df87aa471c68f971bc36a375b91&type=album',  img:"https://get.wallhere.com/photo/illustration-night-white-hair-anime-anime-girls-blue-eyes-park-knee-highs-bench-school-uniform-headphones-ponytail-Tomori-Nao-Charlotte-anime-darkness-screenshot-computer-wallpaper-4000x2250-px-629150.jpg" },
                        { idProfile:'/id003', author:'Noriaki Kakyoin', text: 'there must have been some message here', icon:'https://sun9-8.userapi.com/impf/VHbDZu94RuZOKsTEWBlDda1394KyuywrHKBarQ/fH9OqEmXIyA.jpg?size=339x338&quality=96&proxy=1&sign=53744df87aa471c68f971bc36a375b91&type=album',  img:"https://get.wallhere.com/photo/illustration-night-white-hair-anime-anime-girls-blue-eyes-park-knee-highs-bench-school-uniform-headphones-ponytail-Tomori-Nao-Charlotte-anime-darkness-screenshot-computer-wallpaper-4000x2250-px-629150.jpg" },
                        { idProfile:'/id003', author:'Noriaki Kakyoin', text: 'there must have been some message here', icon:'https://sun9-8.userapi.com/impf/VHbDZu94RuZOKsTEWBlDda1394KyuywrHKBarQ/fH9OqEmXIyA.jpg?size=339x338&quality=96&proxy=1&sign=53744df87aa471c68f971bc36a375b91&type=album',  img:"https://get.wallhere.com/photo/illustration-night-white-hair-anime-anime-girls-blue-eyes-park-knee-highs-bench-school-uniform-headphones-ponytail-Tomori-Nao-Charlotte-anime-darkness-screenshot-computer-wallpaper-4000x2250-px-629150.jpg" },
                    ]
                },
                id004:{name: 'Koichi Hirose',
                    status: 'aparate',
                    avatar: 'https://sun9-59.userapi.com/impf/c848624/v848624775/462a0/Dr0XNNLUSDA.jpg?size=250x250&quality=96&proxy=1&sign=0182183292e77447f13b8bfd3ca5626a&type=album',

                    posts: [
                        { idProfile:'/id004', author:'Koichi Hirose', text: 'hello, world', icon:'https://sun9-59.userapi.com/impf/c848624/v848624775/462a0/Dr0XNNLUSDA.jpg?size=250x250&quality=96&proxy=1&sign=0182183292e77447f13b8bfd3ca5626a&type=album', img:"https://wallpapertag.com/wallpaper/full/6/d/8/465140-beautiful-anime-wallpaper-2560x1600-samsung-galaxy.jpg" },
                        { idProfile:'/id004', author:'Koichi Hirose', text: 'hello, world', icon:'https://sun9-59.userapi.com/impf/c848624/v848624775/462a0/Dr0XNNLUSDA.jpg?size=250x250&quality=96&proxy=1&sign=0182183292e77447f13b8bfd3ca5626a&type=album', img:"https://wallpapertag.com/wallpaper/full/6/d/8/465140-beautiful-anime-wallpaper-2560x1600-samsung-galaxy.jpg" },
                        { idProfile:'/id004', author:'Koichi Hirose', text: 'hello, world', icon:'https://sun9-59.userapi.com/impf/c848624/v848624775/462a0/Dr0XNNLUSDA.jpg?size=250x250&quality=96&proxy=1&sign=0182183292e77447f13b8bfd3ca5626a&type=album', img:"https://wallpapertag.com/wallpaper/full/6/d/8/465140-beautiful-anime-wallpaper-2560x1600-samsung-galaxy.jpg" },
                        { idProfile:'/id004', author:'Koichi Hirose', text: 'hello, world', icon:'https://sun9-59.userapi.com/impf/c848624/v848624775/462a0/Dr0XNNLUSDA.jpg?size=250x250&quality=96&proxy=1&sign=0182183292e77447f13b8bfd3ca5626a&type=album', img:"https://wallpapertag.com/wallpaper/full/6/d/8/465140-beautiful-anime-wallpaper-2560x1600-samsung-galaxy.jpg" },
                    ]
                },
            
        }
    },
    rerender(){},

    getState(){
        return this.state;
    },
    subscribe (observer){
        this.rerender = observer;
    },

    dispatch(action){
        if (action.type === 'ADD-MESSAGE'){
            let state = this.state
            let newMessage = {message:state.messenger.inputtingMessage};
            this.state.messenger.messages.push(newMessage)
            this.state.messenger.inputtingMessage = '';
            this.rerender();
        }
       
        else if(action.type === 'ON-CHANGE-MESSAGE'){
            this.state.messenger.inputtingMessage = action.newText;
            this.rerender();
        }
    }
}
export const onChangeMessageActionCreator= (text) => 
    ({type:ON_CHANGE_MESSAGE, newText:text})
export const addMessageActionCreator = () => ({type:ADD_MESSAGE})

export default store;