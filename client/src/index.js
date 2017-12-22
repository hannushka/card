import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import './style.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

ReactDOM.render((
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
