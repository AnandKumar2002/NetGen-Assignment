import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [email, setEmail] = useState(null);
    // const [token, setToken] = useState('');

    const login = (email) => {
        // const randomToken = Math.random().toString(12);
        // setToken(randomToken);
        setEmail(email);
    };

    const logout = () => {
        setEmail(null);
        localStorage.removeItem('token');
    };

    return (
        <AuthContext.Provider value={{ email, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
