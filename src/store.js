import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';

  
const store = initialState =>createStore(reducers, {}, applyMiddleware(reduxThunk));

window.store = store;

export default store;