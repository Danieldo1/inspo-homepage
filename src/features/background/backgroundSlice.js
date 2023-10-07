import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import unspalshApi from "../../API/imagesApi/index";


export const getBackgroundImage = createAsyncThunk(
    "backgroundImage/getImage",
    unspalshApi.getImage
)
export const backgroundSlice = createSlice({
    name: "backgroundImage",
    initialState: {
        imageUrls: [],
        currentImageUrlIndex: 0,
    },
    reducers: {
        switchToNextImage: (state) => {
            state.currentImageUrlIndex = (state.currentImageUrlIndex + 1) % state.imageUrls.length;
        },
        switchToPreviousImage: (state) => {
            state.currentImageUrlIndex =
            (state.currentImageUrlIndex - 1 + state.imageUrls.length) %
            state.imageUrls.length;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getBackgroundImage.fulfilled, (state, action) => {
            state.imageUrls = action.payload;
            state.currentImageUrlIndex = 0;
        });
        
    }
    
    });

export const { switchToNextImage, switchToPreviousImage } = backgroundSlice.actions;
export default backgroundSlice.reducer;
 