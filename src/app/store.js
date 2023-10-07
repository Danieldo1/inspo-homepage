import { configureStore } from '@reduxjs/toolkit';
import BackgroundImageReducer from '../features/background/backgroundSlice';
import WeatherReducer from '../features/weather/weatherSlice'
import QuoteReducer from '../features/quote/quoteSlice'
import TimezoneReducer from '../features/timezones/timeSlice'



export default configureStore({
  reducer: {
   backgroundImage: BackgroundImageReducer,
   weather: WeatherReducer,
   quote: QuoteReducer,
   timezone: TimezoneReducer,
   

  },
});
