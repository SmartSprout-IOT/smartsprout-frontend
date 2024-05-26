import { createSlice } from "@reduxjs/toolkit";
import { fetchUser, updateUserDto } from "../thunks/userThunks";

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
        loading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUser.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
            state.error = null;
        });
        builder.addCase(fetchUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload || action.error.message;
        });

        builder.addCase(updateUserDto.pending, (state) => {
            state.loading = true;
            state.error = null;
        });

        builder.addCase(updateUserDto.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
            state.error = null;
        });

        builder.addCase(updateUserDto.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload || action.error.message;
        });
    }
});

export default userSlice.reducer;