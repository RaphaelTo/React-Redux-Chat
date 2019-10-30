import React from 'react';
import MessageItem from './MessageItem';
import { connect } from 'react-redux';

class MessageList extends React.Component {
    render() {
        console.log(this.props)
        return (
                <ul>
                    {this.props.messages.map((message) => 
                        <MessageItem message={ message }/> 
                    )}
                </ul>
        )
    }
}


const mapStateToProps = state => {
    return {
        messages: state
    }
};
  


export default connect(mapStateToProps)(MessageList)