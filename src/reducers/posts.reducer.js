import {actionTypes} from '../const/const';

const initialState = {all: [], currentPost: null};

export default function (state = initialState, action) {
    switch (action.type) {
        case actionTypes.FETCH_POSTS:
            // create a new object, take current state, and add new property
            return {...state, all: action.payload.data}
            break;

        case actionTypes.FETCH_CURRENT_POST:
            // create a new object, take current state, and add new property
            return {...state, currentPost: action.payload.data}
            break;

        // case actionTypes.DELETE_POST:
        //     // create a new object, take current state, and add new property
        //     return {...state, all: action.payload.data}
        //     break;

        case actionTypes.CLEAR_CURR:
            // create a new object, take current state, and add new property
            return {...state, currentPost: null}
            break;

        default:
            return state;
    }
}
