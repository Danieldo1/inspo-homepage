import { configureStore } from '@reduxjs/toolkit';
import BackgroundImageReducer from '../features/background/backgroundSlice';
import WeatherReducer from '../features/weather/weatherSlice'




export default configureStore({
  reducer: {
   backgroundImage: BackgroundImageReducer,
   weather: WeatherReducer,

  },
});
