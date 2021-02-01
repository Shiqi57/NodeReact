import { FETCH_SURVEYS } from '../actions/types';

export default function(state = [], action) {
    //console.log(action);
    console.log(action.type);
    switch (action.type) {
        case FETCH_SURVEYS:
            
            //console.log(action.payload);
            return action.payload;
        default:
            console.log("default");
            return state;
    }
}