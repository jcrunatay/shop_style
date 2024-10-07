import { createSlice } from "@reduxjs/toolkit";
// import { USER_ACTION_TYPES } from "./user.types";

const INITIAL_STATE = {
    currentUser: null,
};

export const userSlice = createSlice({
    name: "user",
    initialState: INITIAL_STATE,
    reducers: {
        setCurrentUser: (state, action) => {
            //in redux toolkit u can mutate the state // under the hood it is generating a new state object
            state.currentUser = action.payload;
        },
    },
});

export const { setCurrentUser } = userSlice.actions;

export const userReducer = userSlice.reducer;
