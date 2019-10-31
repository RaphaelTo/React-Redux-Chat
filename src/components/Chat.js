import React from 'react';
import MessageList from './MessageList';
import MessageBar from './MessageBar';
import {} from './../index.css';

class Chat extends React.Component {
    render() {
        return (
                <div className="pad">
                    <div className="chat">
                        <h1>Voici le chat</h1>
                        <MessageList/>
                        <MessageBar/> 
                    </div>
                </div>
        )
    }

}

export default Chat;