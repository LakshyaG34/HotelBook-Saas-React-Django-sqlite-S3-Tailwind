import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const useAuthContext = () =>{
    return useContext(AuthContext);
}

export const AuthProvider = ({children}) =>{
    const [user, setUser] = useState(null);
    const value = {user, setUser};

    return(
        <AuthContext.Provider value = {value}>
            {children}
        </AuthContext.Provider>
    )
};

