import {createSlice} from "@reduxjs/toolkit";
import { getIp } from "../../API/time/timezoneAPI";

const timezoneSlice = createSlice({
    name: 'timezone',
    initialState: {
        timezone: '',
        isLoading: false,
        error: false,
    },
    reducers: {},
    extraReducers: {
        [getIp.pending]: (state) => {
            state.isLoading = true;
            state.error = false;
        },
        [getIp.fulfilled]: (state, action) => {
            const { timezone } = action.payload;
            state.timezone = timezone;
            state.isLoading = false;
            state.error = false;
        }
    }
})

export const chooseTimezone = (state) => {
    return state.timezone.timezone
}


export default timezoneSlice.reducer;