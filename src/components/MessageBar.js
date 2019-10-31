import React from 'react';
import { addMessage, getMessage } from './../redux/Action';
import { connect } from 'react-redux';


class MessageBar extends React.Component {
    state = { message: '', user: 'é'}
    
    handleClick = (event) => {
        event.preventDefault();
        console.log(this.state)
        if(this.state.message !== ''){
            this.props.sendMessage(this.state)
            this.setState({ message: '', user: '' });
        }else{
            console.log('error')
        }
    }
    
    handleChange = (event) => {
        console.log(this.props)
        this.setState({message: event.target.value});
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.message} onChange={this.handleChange} ></input>
                <button onClick={this.handleClick}>Envoyez votre message</button>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        sendMessage: (message) => {
            dispatch(addMessage(message))
        },
        status: () => {
            dispatch(getMessage())
        }
    }
};

const connectBar = connect(
    null,
    mapDispatchToProps
)

export default connectBar(MessageBar);