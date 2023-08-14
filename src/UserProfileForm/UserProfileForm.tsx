import React, { useState } from "react";

const UserProfileForm = () => {
    const [name, setName] = useState("");

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleSave = () => {
        setName("");
    };

    return (
        <div className="app">
            <input
                type="text"
                value={name}
                onChange={handleNameChange}
                placeholder="Please, enter your name"
            />
            <button onClick={handleSave}>Save</button>
        </div>
    );
};

export default UserProfileForm;
