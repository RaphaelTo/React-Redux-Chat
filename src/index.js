import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Chat from './components/Chat';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import Router from './router';
import { Provider } from 'react-redux';
import {configureStore} from './redux/Store';

ReactDOM.render(<BrowserRouter><Provider store={configureStore}><Router><Chat/></Router></Provider></BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
