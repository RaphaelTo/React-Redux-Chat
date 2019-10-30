import { createStore } from 'redux';
import { messages } from './Reducer';


export const configureStore = createStore(
    messages,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

