import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthUser, setAuthUser] = useState(false);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        // await authenticat();

        setLoading(false);
    }, [])
    return (
        <AuthContext.Provider value={[isAuthUser, setAuthUser]}>
            {!isLoading ? children : <div>Loading. . .</div>}
        </AuthContext.Provider>
    );
}