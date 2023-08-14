import React, { useState } from "react";
import { UserProfileFormProps } from "../types/types";
import "./UserProfileFormStyle.scss";
import { setName } from "../store/userProfileSlice";
const UserProfileForm: React.FC<UserProfileFormProps> = ({ onSave }) => {
    const [name, setName] = useState("");
    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleSave = () => {
        onSave(name);
        setName("");
    };

    return (
        <div className="profile-form-wrapper">
            <input
                type="text"
                value={name}
                onChange={handleNameChange}
                placeholder="Please, enter your name"
            />
            <div className="profile-form-button">
                <button onClick={handleSave}>Save</button>
                <button onClick={handleSave}> Edit </button>
            </div>
        </div>
    );
};

export default UserProfileForm;
function onSave(name: string) {
    throw new Error("Function not implemented.");
}
