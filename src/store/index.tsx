import { configureStore } from "@reduxjs/toolkit";
import userProfileSlice from "./userProfileSlice";

const store = configureStore({
    reducer: {
        userProfile: userProfileSlice,
    },
    devTools: process.env.NODE_ENV !== "production",
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
