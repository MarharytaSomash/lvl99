import { combineReducers } from "redux";
import { useDispatch } from "react-redux";
import userProfileSlice from "./userProfileSlice";
import { createStore, AnyAction, ThunkDispatch } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    userProfile: userProfileSlice,
});

export const store = createStore(rootReducer);
export default rootReducer;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ThunkDispatch<RootState, undefined, AnyAction>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
