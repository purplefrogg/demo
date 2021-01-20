const ON_CHANGE_MESSAGE = 'ON-CHANGE-MESSAGE'
const ADD_MESSAGE = 'ADD-MESSAGE'

const messageReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = { message: state.inputtingMessage };
            state.messages.push(newMessage)
            state.inputtingMessage = '';
            return state;
        case ON_CHANGE_MESSAGE:
            state.inputtingMessage = action.newText;
            return state;
        default:
            return state;
    }

}
export const onChangeMessageActionCreator = (text) =>
    ({ type: ON_CHANGE_MESSAGE, newText: text })

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })

export default messageReducer