import { configureStore } from '@reduxjs/toolkit';
import BackgroundImageReducer from '../features/background/backgroundSlice';

export default configureStore({
  reducer: {
   backgroundImage: BackgroundImageReducer,

  },
});
