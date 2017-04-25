import axios from 'axios';

const API_KEY = '117410c3f05f86cf8619a6af1fa50b80';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?&appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url); //promise!

  console.log('Request:', request);

  return {
     type: FETCH_WEATHER,
     payload: request //returning promise as payload
     //react promise midlewere zastavi action, pockaj na resolve promisi a posle request
     //jako payload
  };
}
