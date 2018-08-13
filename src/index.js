import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import  actions from './actions/types';

import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/index.css';

//redux packages
import { Provider } from 'react-redux';
import configStore from './store'

const store = configStore();
//store.dispatch(actions());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
