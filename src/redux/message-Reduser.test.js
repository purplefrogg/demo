
import messageReducer, { addMessage, deleteMessage } from './message-Reduser';

let initialState = {
    messages: [
        { id: 1, text: 'who are you' },
        { id: 2, text: 'I am DIO BRANDO' },
        { id: 3, text: 'who are you' },
        { id: 4, text: 'I am DIO BRANDO' },
    ],
}

test('new messsage should be added', () => {
    let action = addMessage('new message')
    let newState = messageReducer(initialState, action)
    expect(newState.messages.length).toBe(5)
});

test('new messsage should be correct', () => {
    let action = addMessage('new message')
    let newState = messageReducer(initialState, action)
    expect(newState.messages[4].text).toBe('new message')
});

test('new messsage should be deleted', () => {
    let action = deleteMessage(1)
    let newState = messageReducer(initialState, action)
    expect(newState.messages.length).toBe(3)
});

