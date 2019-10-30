import {
    ADD_MESSAGE,
    LOAD_MESSAGES_PENDING,
    LOAD_MESSAGES_SUCCESS,
    LOAD_MESSAGES_ERROR
} from './TypeAction';
import axios from 'axios';

export const addMessage = (message, user) => ({
  type:ADD_MESSAGE,
  message,
  user  
})

export function getMessage() {
  return (dispatch) => {
    dispatch({type: LOAD_MESSAGES_PENDING})

    return axios.get('https://my-json-server.typicode.com/tlenclos/formation-react-fake-server/messages')
            .then(json => {
              dispatch(
                {
                  type: LOAD_MESSAGES_SUCCESS, 
                  messages: json.data,
                }
              )
            })
            .catch(err => dispatch({type: LOAD_MESSAGES_ERROR, err}))
  }
}