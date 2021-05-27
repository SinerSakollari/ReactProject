import _ from 'lodash';
import{
    CREATE_STREAM,
    FETCH_STREAMS,
    FETCH_STREAM,
    DELETE_STREAM,
    EDIT_STREAM 
} from '../actions/types';


//mapKeys turns array into object, first argument is array second is the value which is used as a key
export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case CREATE_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case EDIT_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case DELETE_STREAM:
            return _.omit(state, action.payload);
        case FETCH_STREAMS:
            return { ...state, ..._.mapKeys(action.payload, 'id') };
        default:
            return state;
    }
};