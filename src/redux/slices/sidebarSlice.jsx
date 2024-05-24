import { createSlice } from "@reduxjs/toolkit";


const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState: {
        activateItem: null,
    },
    reducers: {
        setActivateItem: (state, action) => {
            state.activateItem = action.payload;
        }
    }
})

export const {setActivateItem} = sidebarSlice.actions;
export default sidebarSlice.reducer;