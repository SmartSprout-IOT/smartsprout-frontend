import { createSlice } from "@reduxjs/toolkit";
import { fetchIrrigationSuggestionByCropFieldId } from "../thunks/irrigationSuggestionThunks";


const irrigationSuggestionSlice = createSlice({
    name: "irrigationSuggestion",
    initialState: {
        item: null,
        loading: false,
        status: "idle",
        error: null,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchIrrigationSuggestionByCropFieldId.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(fetchIrrigationSuggestionByCropFieldId.fulfilled, (state, action) => {
            state.loading = false;
            state.item = action.payload;
            state.error = null;
        });
        builder.addCase(fetchIrrigationSuggestionByCropFieldId.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload || action.error.message;
        });
    }
})

export default irrigationSuggestionSlice.reducer;