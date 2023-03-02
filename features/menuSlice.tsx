import { createSlice } from "@reduxjs/toolkit";
export interface MenuIconState{
    isOpen: boolean; 
}

const initialState: MenuIconState = {
    isOpen: false,
    
}

export const modalSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        openMenu: (state, action) => {
            state.isOpen = true;
        },
        closeMenu: (state, action) => {
            state.isOpen = false;
        },
    },
})

export const { openMenu, closeMenu } =
    modalSlice.actions;

export default modalSlice.reducer;