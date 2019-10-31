import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom';

import Chat from './components/Chat';
import Login from './components/Login';

export default function Routing(){
    return(
        <Router>
            <div>
                <nav>
                    <ul>
                        <li><Link to={'/'}>Login</Link></li>
                        <li><Link to={'/chat'}>Chat</Link></li>
                    </ul>
                </nav>
                <hr />
                <Switch>
                    <Route exact path='/' component={Login} />
                    <Route path='/chat' component={Chat} />
                </Switch>
            </div>
      </Router>      
    )
}

        