import { FETCH_CAR } from '../actions/types';

export default function(state = [], action){
    switch(action.type){
        case FETCH_CAR:
        return action.payload;
         default:
        return state;
    }
}