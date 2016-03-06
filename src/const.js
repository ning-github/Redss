import WEATHER_KEY from './keys.js';

export const actionTypeConst = {
    FETCH_WEATHER: "FETCH_WEATHER"
}

export const urlConst = {
    WEATHER_URL: `api.openweathermap.org/data/2.5/forecast?appid=${WEATHER_KEY}`;
}
