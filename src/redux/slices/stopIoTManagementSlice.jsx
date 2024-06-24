import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchStopIrrigation } from "../thunks/iotManagementThunks";



const stopIoTManagementSlice = createSlice({
    name: "stopIoTManagement",
    initialState: {
        loading: false,
        status: "idle",
        error: null,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchStopIrrigation.pending, (state) => {
            state.loading = true;
            state.error = null;
        }
        );
        builder.addCase(fetchStopIrrigation.fulfilled, (state) => {
            state.loading = false;
            state.error = null;
        }
        );
        builder.addCase(fetchStopIrrigation.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload || action.error.message;
        }
        );
    }
});

export default stopIoTManagementSlice.reducer;