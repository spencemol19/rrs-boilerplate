/* React dependencies */
import React from 'react';
import ReactDOM from 'react-dom';

/* Redux dependencies */
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
/* Import reducers */
import reducers from './reducers';
/* Import primary util action creator/dispatcher */
import { screenResize } from "./actions";

/* Import SCSS styles compiled into CSS */
import './styles/css/index.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Uncomment section below to include/import Promise-based HTTP request module and make globally-accessible
// import axios from 'axios';
// window.axios = axios;

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

/* start screen width and breakpoint detection by trigger action creator 
    to consolidate storage and updating of device breakpoint state */
window.addEventListener('resize', () => {
    store.dispatch(screenResize(window.innerWidth));
});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();
