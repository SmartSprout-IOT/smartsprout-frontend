import { createSlice } from "@reduxjs/toolkit";
import { fetchIrrigationRecords } from "../thunks/irrigationRecordsThunks";


const irrigationRecordsSlice = createSlice({
    name: "irrigationRecords",
    initialState: {
        items: [],
        loading: false,
        status: "idle",
        error: null,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchIrrigationRecords.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(fetchIrrigationRecords.fulfilled, (state, action) => {
            state.loading = false;
            state.items = action.payload;
            state.error = null;
        });
        builder.addCase(fetchIrrigationRecords.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload || action.error.message;
        });
    }
})

export default irrigationRecordsSlice.reducer;