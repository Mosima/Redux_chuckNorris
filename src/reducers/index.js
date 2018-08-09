import { combineReducers } from 'redux';
import categoryReducer from './categoryReducer';
import categoriesReducer from './categoriesReducer';

export default combineReducers({
    categories: categoriesReducer,
    category: categoryReducer
})