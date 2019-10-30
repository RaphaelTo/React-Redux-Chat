import React from 'react';
import {Twemoji} from 'react-emoji-render';

class MessageItem extends React.Component {
    render(){
        console.log(this.props)
        return (
            <li>
                <span>user : {this.props.message.user}</span>
                <span> message: </span>
                <Twemoji text={this.props.message.message}/>
                
            </li>
        )
    }
}

export default MessageItem;