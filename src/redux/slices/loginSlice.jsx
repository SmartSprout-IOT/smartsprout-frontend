import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "../thunks/authThunks";

const loginSlice = createSlice({
    name: "login",
    initialState: {
        token: null,
        refreshToken: null,
        status: "idle",
        loading: false,
        isAuthenticated: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder.addCase(loginUser.pending, (state) => {
            state.status = "loading";
            state.loading = true;
            state.error = null;
        });
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.loading = false;
            state.isAuthenticated = true;
            state.token = action.payload.access_token;
            state.refreshToken = action.payload.refresh_token;
            state.error = null;
        });
        builder.addCase(loginUser.rejected, (state, action) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.status = "failed";
            state.error = action.payload || action.error.message;
        });
    }
});


export default loginSlice.reducer;
