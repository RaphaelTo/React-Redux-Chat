import React from 'react';
import MessageList from './MessageList';
import MessageBar from './MessageBar';
import {configureStore} from './../redux/Store';
import { Provider } from 'react-redux'

class Chat extends React.Component {
    render() {
        //console.log(configureStore)
        return (
            <Provider store={configureStore}>
                <div>
                    <p>Voici le chat</p>
                    <MessageList />
                    <MessageBar/> 
                </div>
            </Provider>
        )
    }

}

export default Chat;