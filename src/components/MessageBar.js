import React from 'react';
import { addMessage } from './../redux/Action';
import { connect } from 'react-redux';


class MessageBar extends React.Component {
    state = { message: '', user: 'Inconnu'}
    
    handleClick = (event) => {
        event.preventDefault();
        if(this.state.message !== ''){
            this.props.sendMessage(this.state)
            this.setState({ message: '', user: 'Inconnu' });
        }else{
            console.log('error')
        }
    }
    
    handleChange = (event) => {
        console.log(event)
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
            dispatch(addMessage(message, "Inconnu"))
        }
    }
};

const connectBar = connect(
    null,
    mapDispatchToProps
)

export default connectBar(MessageBar);