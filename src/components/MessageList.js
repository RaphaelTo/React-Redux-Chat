import React from 'react';
import MessageItem from './MessageItem';
import { connect } from 'react-redux';
import { getMessage } from '../redux/Action';

class MessageList extends React.Component {
    
    componentDidMount() {
        console.log(this.props)
        this.props.dispatch(getMessage());
      }
    
    render() {
        return (
                <ul>
                    {this.props.messages.map((msg, i) => 
                        <MessageItem key={i} message={ msg }/> 
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