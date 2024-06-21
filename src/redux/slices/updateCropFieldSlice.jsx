import { createSlice } from "@reduxjs/toolkit";
import { fetchCropFieldById, updateCropFieldDto } from "../thunks/cropFieldThunks";

const updateCropFieldSlice = createSlice({
    name: "updateCropField",
    initialState: {
        cropfield: null,
        loading: false,
        error: null,
    },
    reducers: {
        clearCropFieldState: (state) => {
            state.cropfield = null;
            state.loading = false;
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(updateCropFieldDto.pending, (state) => {
            state.loading = true;
            state.error = null;
        });

        builder.addCase(updateCropFieldDto.fulfilled, (state, action) => {
            state.loading = false;
            state.cropfield = action.payload;
            state.error = null;
        });

        builder.addCase(updateCropFieldDto.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload || action.error.message;
        });

        builder.addCase(fetchCropFieldById.fulfilled, (state, action) => {
            state.cropfield = action.payload;
            state.loading = false;
            state.error = null;
        });

        builder.addCase(fetchCropFieldById.pending, (state) => {
            state.loading = true;
            state.error = null;
        });

        builder.addCase(fetchCropFieldById.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload || action.error.message;
        });
    }
});

export const { clearCropFieldState } = updateCropFieldSlice.actions;
export default updateCropFieldSlice.reducer;
