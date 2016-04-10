import {actionTypes} from '../const/const';

const initialState = {all: [], currentPost: null};

export default function (state = initialState, action) {
    switch (action.type) {
        case actionTypes.FETCH_POSTS:
            // create a new object, take current state, and add new property
            return {...state, all: action.payload.data}
            break;
        default:
            return state;
    }
}
