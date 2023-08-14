import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setName } from "./store/userProfileSlice";

import "./App.scss";
import UserProfileForm from "./UserProfile/UserProfileForm";
import { RootState } from "./store";

function App() {
    const dispatch = useDispatch();
    const userName = useSelector((state: RootState) => state.userProfile.name);
    const handleSaveName = (name: string) => {
        dispatch(setName(name));
    };
    return (
        <div className="App">
            <p>You are welcome, {userName}</p>
            <UserProfileForm onSave={handleSaveName} initialName={""} />
        </div>
    );
}

export default App;
