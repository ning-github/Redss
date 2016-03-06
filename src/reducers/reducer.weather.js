import {actionTypeConst} from '../const.js'

export default function (state = null, action) {
    switch (action.type) {
        case actionTypeConst.FETCH_WEATHER:
            return action.payload;
            break;
        default:
            return state;
    }
}
