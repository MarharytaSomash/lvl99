import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    name: localStorage.getItem("userProfileName") || "have not yet entered a name(",
};

const userProfileSlice = createSlice({
    name: "userProfile",
    initialState,
    reducers: {
        setName: (state, action: PayloadAction<string>) => {
            state.name = action.payload;
            localStorage.setItem("userProfileName", action.payload);
        },
    },
});

export const { setName } = userProfileSlice.actions;
export default userProfileSlice.reducer;
