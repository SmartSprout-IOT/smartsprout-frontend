import { createSlice } from "@reduxjs/toolkit";
import { fetchCropFields } from "../thunks/cropFieldThunks";


const cropFieldSlice = createSlice({
    name: "cropField",
    initialState: {
        items: [],
        loading: false,
        status: "idle",
        error: null,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCropFields.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(fetchCropFields.fulfilled, (state, action) => {
            state.loading = false;
            state.items = action.payload;
            state.error = null;
        });
        builder.addCase(fetchCropFields.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload || action.error.message;
        });

        // builder.addCase(updateCropFieldDto.pending, (state) => {
        //     state.loading = true;
        //     state.error = null;
        // });

        // builder.addCase(updateCropFieldDto.fulfilled, (state, action) => {
        //     state.loading = false;
        //     state.cropField = action.payload;
        //     state.error = null;
        // });

        // builder.addCase(updateCropFieldDto.rejected, (state, action) => {
        //     state.loading = false;
        //     state.error = action.payload || action.error.message;
        // });
    }
});

export default cropFieldSlice.reducer;