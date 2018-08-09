import { FETCH_CATEGORIES } from '../actions/types';
//if there are any changes on the categories this reducer will specify the changes in response to "actions"
export default function(state = [], action){
    switch(action.type){
        case FETCH_CATEGORIES:
        return action.payload;
         default:
        return state;
    }
}