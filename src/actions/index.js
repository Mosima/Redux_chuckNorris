//importing action types
import { FETCH_CATEGORIES, FETCH_CATEGORY } from './types';

const baseUrl = "https://api.chucknorris.io/jokes";

//fetching all the categories from the api
export const  fetchCategories =  () => async dispatch => {
    const res = await fetch(baseUrl + '/categories');
    const data = await res.json();
    dispatch({type: FETCH_CATEGORIES, payload: data});
};

// recieving selected category that will passed to fetch jokes from the selected api
export const fetchCategory =(obj) => async dispatch =>{
    const res = await fetch(baseUrl + '/random?category=' + obj);
    const data = await res.json();
    dispatch({type: FETCH_CATEGORY, payload: data});
};

//search a random joke from the search api
