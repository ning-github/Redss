import axios from 'axios';
import {actionTypeConst, urlConst} from '../const.js';

export default function fetchWeather(city) {
    // will be making country code always United States
    let finalUrl = `${urlConst.WEATHER_URL}&q=${city},us`;
    // this is an http promise
    let apiRequest = axios.get(finalUrl);

    return {
        type: actionTypeConst.FETCH_WEATHER,
        payload: apiRequest
    }
}
