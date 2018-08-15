// Axios is used for making ajax request from browser and supports Promise api 
import axios from "axios";

import { API_KEY } from "../key";

// const ROOT_URL = "https://api.openweathermap.org/data/2.5/forecast?appid=" + API_KEY;
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${ API_KEY }`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(cityName) {
    // For cities only in India
    const url = `${ ROOT_URL }&q=${ cityName }`;
    const request = axios.get(url);

    // console.log("AJAX get request : ", request);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}