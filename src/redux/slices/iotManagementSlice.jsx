import { createSlice } from "@reduxjs/toolkit";
import { fetchStartIrrigation } from "../thunks/iotManagementThunks";



const iotManagementSlice = createSlice({
    name: "iotManagement",
    initialState: {
        loading: false,
        status: "idle",
        error: null,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchStartIrrigation.pending, (state) => {
            state.loading = true;
            state.error = null;
        }
        );
        builder.addCase(fetchStartIrrigation.fulfilled, (state) => {
            state.loading = false;
            state.error = null;
        }
        );
        builder.addCase(fetchStartIrrigation.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload || action.error.message;
        }
        );
    }
});

export default iotManagementSlice.reducer;