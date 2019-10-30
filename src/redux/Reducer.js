import { ADD_MESSAGE } from './TypeAction';

export function messages(state = [], action){
    switch (action.type){
        case ADD_MESSAGE:
            return [...state, action.message]
        default:
            return state
    }
}
