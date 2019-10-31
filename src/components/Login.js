import React from 'react';
import {sendUser} from './../redux/Action';
import { connect } from 'react-redux';

class Login extends React.PureComponent{
    
    state = {user : ''};
    
    handleClick = (event) => {
        this.props.send(this.state)
    }

    handleChange = (event) => {
        this.setState({user: event.target.value});
    }
    
    render() {
        return (
            <div>
                <input type="text" value={this.state.user} onChange={this.handleChange}></input>
                <button onClick={this.handleClick}>Valider</button>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        send: (user) => {
            dispatch(sendUser(user))
        }
    }
}

const connection = connect(
    null,
    mapDispatchToProps
)

export default connection(Login);