import {WEATHER_KEY} from './keys.js';

export const actionTypeConst = {
    FETCH_WEATHER: "FETCH_WEATHER"
}

export const urlConst = {
    WEATHER_URL: `http://api.openweathermap.org/data/2.5/forecast?appid=${WEATHER_KEY}`
}
