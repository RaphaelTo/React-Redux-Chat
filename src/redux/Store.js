import { createStore, applyMiddleware, compose } from 'redux';
import { messages } from './Reducer';
import thunk from 'redux-thunk';
import { logger, crashReporter } from "./../middleware/logger";

export const configureStore = createStore(
    messages,
    compose(
        applyMiddleware(thunk, logger, crashReporter),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )    
)

