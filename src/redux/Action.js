import {
    ADD_MESSAGE,
} from './TypeAction';

export const addMessage = (message, user) => ({
  type:ADD_MESSAGE,
  message,
  user  
})
