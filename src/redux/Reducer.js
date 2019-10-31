import { ADD_MESSAGE, LOAD_MESSAGES_SUCCESS, LOAD_MESSAGES_ERROR, SEND_USER } from './TypeAction';

export function messages(state = [], action){
    switch (action.type){
        case ADD_MESSAGE:
            console.log(action)
            return [...state, action.message]
        case SEND_USER: 
            return [...state, action.user]
        case LOAD_MESSAGES_SUCCESS: 
            return [...state, ...action.messages]
        case LOAD_MESSAGES_ERROR: 
            return [...state]
        default:
            return state
    }
}





