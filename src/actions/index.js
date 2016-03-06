import {actionTypeConst, urlConst} from '../const.js';

export default function fetchWeather(city) {
    // will be making country code always United States
    const finalUrl = `${urlConst.WEATHER_URL}&q=${city},us`;
    return {
        type: actionTypeConst.FETCH_WEATHER,
        payload:
    }
}
