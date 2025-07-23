import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useState, useEffect } from 'react';
const AuthContext = createContext(undefined);
export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(() => localStorage.getItem('jwtToken'));
    useEffect(() => {
        if (token) {
            localStorage.setItem('jwtToken', token);
        }
        else {
            localStorage.removeItem('jwtToken');
        }
    }, [token]);
    const login = (newToken) => {
        setToken(newToken);
    };
    const logout = () => {
        setToken(null);
    };
    const isAuthenticated = !!token;
    return (_jsx(AuthContext.Provider, { value: { token, isAuthenticated, login, logout }, children: children }));
};
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context)
        throw new Error('useAuth must be used within an AuthProvider');
    return context;
};
