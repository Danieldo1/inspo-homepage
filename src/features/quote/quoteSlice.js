import { createSlice } from "@reduxjs/toolkit";
import { getFact } from "../../API/facts/index";

const quoteSlice = createSlice({
    name: "quote",
    initialState: {
        fact: "",
        isLoading: false,
        error: false,
    },
    reducers: {},
    extraReducers: {
        [getFact.pending]: (state) => {
            state.isLoading = true;
            state.error = false;
        },
        [getFact.fulfilled]: (state, action) => {
            const fact  = action.payload;
            state.fact = fact;
            state.isLoading = false;
            state.error = false;
        },
        [getFact.rejected]: (state) => {
            state.isLoading = false;
            state.error = true;
        },
    },  
});

export const selectFact = (state) => {
    return state.quote.fact;
}
export default quoteSlice.reducer;