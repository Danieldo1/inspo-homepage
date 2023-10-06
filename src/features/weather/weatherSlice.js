import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {getCords,getWeather} from '../../API/weatherApi/index'

// export const getCords = createAsyncThunk(
//     'weather/getCords',
//     async () => {
//         const response = await fetch('https://ipapi.co/json');
//         const json = await response.json();
//         const data = {
//             lat: json.latitude,
//             lon: json.longitude
//         }
//         return data;
//     }
// )

// export const getWeather = createAsyncThunk(
//     'weather/getWeather',
//     async (coord) => {
//         const { lat, lon } = coord;
//         const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.REACT_APP_API_KEY_WEATHER}`)
//         const json = await response.json();
//         const data = {
//             location: json.name,
//             temp: json.main.temp,
//             description: json.weather[0].description,
//             icon: json.weather[0].icon,
//             country: json.sys.country
//         }
//         return data;
//     }
// )

const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        location: '',
        temp: '',
        description: '',
        icon: '',
        country: '',
        lat: '',
        lon: '',
        isLoading: false,
        error: '',

    },
    reducers: {},
    extraReducers: {
        [getCords.pending]: (state) => {
            state.isLoading = true;
            state.error = false;
        },
        [getCords.fulfilled]: (state, action) => {
            const { lat, lon } = action.payload;
            state.lat = lat;
            state.lon = lon;
            state.isLoading = false;
            state.error = false;
        },
        [getWeather.pending]: (state) => {
            state.isLoading = true;
            state.error = false;
        },
        [getWeather.fulfilled]: (state, action) => {
            const {location, temp, description, icon, country, } = action.payload;
            state.location = location;
            state.temp = temp;
            state.description = description;
            state.icon = icon;
            state.country = country;
            state.isLoading = false;
            state.error = false;
        },
    }

})

export const chooseLon = (state) => {
    return state.weather.lon
}

export const chooseLat = (state) => {
    return state.weather.lat
}

export const chooseLocation = (state) => {
    return state.weather.location
}

export const chooseTemp = (state) => {
    return state.weather.temp
}

export const chooseDescription = (state) => {
    return state.weather.description
}

export const chooseIcon = (state) => {
    return state.weather.icon
}

export const chooseCountry = (state) => {
    return state.weather.country
}

export default weatherSlice.reducer