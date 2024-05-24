import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "../slices/loginSlice";
import registerSlice from "../slices/registerSlice";
import sidebarReducer from "../slices/sidebarSlice";

const store = configureStore({
    reducer: {
        login: loginSlice,
        register: registerSlice,
        sidebar: sidebarReducer,
    },
});

export default store;
