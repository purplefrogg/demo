
const ADD_MESSAGE = 'ADD-MESSAGE'

let initialState = {
    chats: [
        { id: 1, name: 'Trish Una', icon: 'https://sun9-34.userapi.com/impf/c845420/v845420775/bafaa/hP5ZTk4e-O0.jpg?size=200x200&quality=96&proxy=1&sign=c915e9a943591bf8db59656c689429e4&type=album' },
        { id: 2, name: 'Josuke Higashikata', icon: 'https://sun9-46.userapi.com/impf/c847124/v847124775/b8f1c/vqovdaYXuwY.jpg?size=250x250&quality=96&proxy=1&sign=9a228fea6ba6a978a4828d27a37a8736&type=album' },
        { id: 3, name: 'Noriaki Kakyoin', icon: 'https://sun9-8.userapi.com/impf/VHbDZu94RuZOKsTEWBlDda1394KyuywrHKBarQ/fH9OqEmXIyA.jpg?size=339x338&quality=96&proxy=1&sign=53744df87aa471c68f971bc36a375b91&type=album' },
        { id: 4, name: 'Kira Yoshikage', icon: 'https://i.pinimg.com/474x/0a/8c/de/0a8cde733252ac8941f1210f1299e295.jpg' },
        { id: 5, name: 'Joseph Joestar', icon: 'https://i.pinimg.com/474x/1d/ed/7c/1ded7cf734a605f6d18f699abf7d9eaa.jpg' },
        { id: 6, name: 'bruno buccerati', icon: 'https://i.pinimg.com/474x/fd/91/db/fd91dbc2886555e0f9a8832171959784.jpg' },
        { id: 7, name: 'DIO', icon: 'https://pbs.twimg.com/profile_images/1026856822492352512/ZEig1q14_400x400.jpg' },
        { id: 8, name: 'kakashi hatake', icon: 'https://i.pinimg.com/originals/32/62/8c/32628c0b689967a8c044a35f8217d838.jpg' },
        { id: 9, name: 'Hisoka', icon: 'https://i.pinimg.com/564x/fc/0a/ec/fc0aec5184be7873b54ccb0a375e632c.jpg' },
        { id: 10, name: 'Killua Zoldyck', icon: 'https://i.pinimg.com/474x/a2/28/81/a228815473dcdb39496b2fa6d9ab7cc6.jpg' },
        { id: 11, name: 'Roranoa Zoro', icon: 'https://i.pinimg.com/564x/c3/c2/05/c3c20561f69db03c456a68ab0b4fc33c.jpg' },
        { id: 12, name: 'Nami', icon: 'https://i.pinimg.com/originals/c5/0c/e9/c50ce92ced7d643d5ea4b72982fa7afe.png' },
        { id: 13, name: 'boa hancock', icon: 'https://i.pinimg.com/474x/65/3c/5b/653c5bb523374e5a1fd9c655f2eccc1e.jpg' },
        { id: 14, name: 'Nico Robin', icon: 'https://64.media.tumblr.com/fa44cba5a828851412988ecccf1a7bb8/6fc7a71d5c81bda7-3f/s400x600/4110a05a575c4ddb516302c18379748aed873cfb.png' },
        { id: 15, name: 'Monkey D. Luffy', icon: 'https://i.pinimg.com/474x/85/95/dc/8595dce91bcfc9550c826f5929f3ccfd.jpg' },
        { id: 16, name: 'trafalgar law', icon: 'https://64.media.tumblr.com/02213e0e9353f31a0caf8cef4fdc9242/4fedaa087d44add3-34/s400x600/1426ac5cd62cbf4ae772823c8717a0dcf55684fc.jpg' },
        { id: 17, name: 'Usopp', icon: 'https://i.pinimg.com/originals/a7/90/e9/a790e908ec99e8d57cc6b20fc9847d3b.png' },
        { id: 18, name: 'Tony Tony Chopper', icon: 'https://i.pinimg.com/originals/32/00/3a/32003a6ec5a9c9ca0c4b55ec3627bd7a.jpg' },
    ],
    messages: [
        { message: 'who are you' },
        { message: 'I am DIO BRANDO' },
        { message: 'who are you' },
        { message: 'I am DIO BRANDO' },
    ],
    inputtingMessage: '',
}

const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return{
            ...state,
            messages: [
                ...state.messages, {message: action.message},
            ],
            inputtingMessage: '',
            }
        default:
            return state;
    }

}

export const addMessage = (message) => ({ type: ADD_MESSAGE, message})

export default messageReducer