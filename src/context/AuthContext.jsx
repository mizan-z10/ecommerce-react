import { useState } from "react";
import { Auth } from "./AuthContextCreate";

export let AuthProvider = ({ children }) => {

    const [registeredUsers, setRegisteredUsers] = useState(() => {
        return JSON.parse(localStorage.getItem("registeredUsers")) || [];
    });

    const [logedUser, setLogedUser] = useState(() => {
        return JSON.parse(localStorage.getItem("loggedUser")) || null;
    });
    return (
        <Auth.Provider
            value={{ registeredUsers, logedUser, setRegisteredUsers, setLogedUser }}
        >
            {children}
        </Auth.Provider>
    );
};