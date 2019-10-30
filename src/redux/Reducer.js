import { ADD_MESSAGE, LOAD_MESSAGES_SUCCESS, LOAD_MESSAGES_ERROR } from './TypeAction';

export function messages(state = [], action){
    switch (action.type){
        case ADD_MESSAGE:
            return [...state, action.message]
        case LOAD_MESSAGES_SUCCESS: 
            return [...state, ...action.messages]
        case LOAD_MESSAGES_ERROR: 
            return [...state]
        default:
            return state
    }
}




