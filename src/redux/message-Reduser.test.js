import { render, screen } from '@testing-library/react';

import messageReducer, { addMessage, deleteMessage } from './message-Reduser';

let initialState = {
    messages: [
        { id: 1, message: 'who are you' },
        { id: 2, message: 'I am DIO BRANDO' },
        { id: 3, message: 'who are you' },
        { id: 4, message: 'I am DIO BRANDO' },
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
    expect(newState.messages[4].message).toBe('new message')
});

test('new messsage should be deleted', () => {
    let action = deleteMessage(1)
    let newState = messageReducer(initialState, action)
    expect(newState.messages.length).toBe(3)
});

