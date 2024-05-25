import { createSlice } from "@reduxjs/toolkit";
import { registerUser } from "../thunks/authThunks";

const registerSlice = createSlice({
    name: "register",
    initialState: {
        id: null,
        token: null,
        refreshToken: null,
        status: "idle",
        loading: false,
        isAuthenticated: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder.addCase(registerUser.pending, (state) => {
            state.status = "loading";
            state.loading = true;
            state.error = null;
            state.id = null;
        });
        builder.addCase(registerUser.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.loading = false;
            state.isAuthenticated = true;
            state.token = action.payload.access_token;
            state.refreshToken = action.payload.refresh_token;
            state.id = action.payload.user_id;
            state.error = null;
        });
        builder.addCase(registerUser.rejected, (state, action) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.status = "failed";
            state.error = action.payload || action.error.message;
            state.id = null;
        });
    }
});

export default registerSlice.reducer;