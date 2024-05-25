import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "../thunks/authThunks";

const loginSlice = createSlice({
    name: "login",
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
        builder.addCase(loginUser.pending, (state) => {
            state.status = "loading";
            state.loading = true;
            state.error = null;
            state.id = null;
        });
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.loading = false;
            state.isAuthenticated = true;
            state.token = action.payload.access_token;
            state.refreshToken = action.payload.refresh_token;
            state.id = action.payload.user_id;
            state.error = null;
        });
        builder.addCase(loginUser.rejected, (state, action) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.status = "failed";
            state.error = action.payload || action.error.message;
            state.id = null;
        });
    }
});


export default loginSlice.reducer;
