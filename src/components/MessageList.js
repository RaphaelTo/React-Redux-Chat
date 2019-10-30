import React from 'react';
import MessageItem from './MessageItem';
import { connect } from 'react-redux';
import { getMessage } from '../redux/Action';

class MessageList extends React.Component {
    
    componentDidMount() {
        this.props.dispatch(getMessage());
      }
    
    render() {
        return (
                <ul>
                    {this.props.messages.map((msg) => 
                        <MessageItem message={ msg }/> 
                    )}
                </ul>
        )
    }
}


const mapStateToProps = state => {
    console.log(state)
    return {
        messages: state
    }
};
  


export default connect(mapStateToProps)(MessageList)