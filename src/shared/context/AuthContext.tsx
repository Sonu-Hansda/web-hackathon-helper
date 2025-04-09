import {createContext, useState} from "react";

interface AuthContextType {
    isAuthenticated: boolean;
    login: (token: string) => void;
    isLoading: boolean;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);


export const AuthProvider = ({ children } : { children: React.ReactNode }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const login = (token: string) => {
        setIsLoading(true);
        localStorage.setItem("authToken", token);
        setIsAuthenticated(true);
        setIsLoading(false);
    }

    const logout = () => {
        setIsLoading(true);
        localStorage.removeItem("authToken");
        setIsAuthenticated(false);
        setIsLoading(false);
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, isLoading}}>
            {children}
        </AuthContext.Provider>
    );
}