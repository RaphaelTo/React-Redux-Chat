import { createStore, applyMiddleware, compose } from 'redux';
import { messages } from './Reducer';
import thunk from 'redux-thunk';

export const configureStore = createStore(
    messages,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )    
)

