const DELETE_MESSAGE = 'message/DELETE_MESSAGE'
const ADD_MESSAGE = 'message/ADD-MESSAGE'


export type ChatsType = {
    id: number
    name: string
    icon: string
}
export type MessagesType = {
    id: number
    text: string
}

export type InitialStateType = {
    chats: Array<ChatsType>
    messages: Array<MessagesType>
}

let initialState: InitialStateType = {
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
    ],
    messages: [
        { id: 0, text: 'who are you' },
        { id: 1, text: 'I am DIO BRANDO' },
        { id: 2, text: 'who are you' },
        { id: 3, text: 'I am DIO BRANDO' },
    ],
}

const messageReducer = (state = initialState, action: any):InitialStateType => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {id: state.messages.length, text: action.message },
                ],
               
            }
        case DELETE_MESSAGE:
            return {
                ...state,
                messages: state.messages.filter(m => m.id !== action.userId),
            }
        default:
            return state;
    }

}
type AddMessageType = { type: typeof ADD_MESSAGE, message: string}
export const addMessage = (message: string): AddMessageType => ({ type: ADD_MESSAGE, message })

type DeleteMessageType = { type: typeof DELETE_MESSAGE, userId: number}
export const deleteMessage = (userId: number): DeleteMessageType => ({ type: DELETE_MESSAGE, userId })

export default messageReducer