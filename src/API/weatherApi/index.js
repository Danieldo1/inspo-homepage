import { createAsyncThunk } from '@reduxjs/toolkit';


export const getCords = createAsyncThunk(
    'weather/getCords',
    async () => {
        const response = await fetch('https://freeipapi.com/api/json/');
        const json = await response.json();
        const data = {
            lat: json.latitude,
            lon: json.longitude
        }
        return data;
    }
)

export const getWeather = createAsyncThunk(
    'weather/getWeather',
    async (coord) => {
        const { lat, lon } = coord;
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.REACT_APP_API_KEY_WEATHER}`)
        const json = await response.json();
        const data = {
            location: json.name,
            temp: json.main.temp,
            description: json.weather[0].description,
            icon: json.weather[0].icon,
            country: json.sys.country
        }
        return data;
    }
)


