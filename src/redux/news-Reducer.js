const ADD_POST = 'ADD-POST'
const ON_CHANGE_TEXTPOST = 'ON-CHANGE-TEXTPOST'

const newsReducer = (state, action) => {
    switch (action.type) {
        case ON_CHANGE_TEXTPOST:
            state.inputtingPostText = action.newText;
            return state;
        case ADD_POST:
            let newPost = {
                icon: 'https://sun9-34.userapi.com/impf/c845420/v845420775/bafaa/hP5ZTk4e-O0.jpg?size=200x200&quality=96&proxy=1&sign=c915e9a943591bf8db59656c689429e4&type=album',
                text: state.inputtingPostText,
                idProfile: '/id001', author: 'Trish Una',
            };
            state.posts.push(newPost)
            state.inputtingPostText = '';
            return state;
        default: 
            return state;
    }
    
}
export const onChangeTextPostActionCreator = (text) => 
    ({type:ON_CHANGE_TEXTPOST, newText:text})
export const addPostActionCreator = () => ({type:ADD_POST})

export default newsReducer