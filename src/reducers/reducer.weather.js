import {actionTypeConst} from '../const.js'

export default function (state = [], action) {
    switch (action.type) {
        case actionTypeConst.FETCH_WEATHER:
            return [action.payload.data, ...state];
            // ^-- ES6 for state.concat([action.payload]);
            break;
        default:
            return state;
    }
}
