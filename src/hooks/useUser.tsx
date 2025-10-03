import { createContext, useContext, useState, type ReactNode } from "react";

/**
 * User model
 */
interface User {
    id: number,
    username: string,
    rankId: number,
    profile: {
        id: number,
        coins: number,
    },
}

/**
 * User Context type
 */
interface UserContextType {
    user: User | null;
    setUser: (user: User | null) => void;
}

//Creation of a context with no default value
export const UserContext = createContext<UserContextType | undefined>(undefined);

//Context provider
export const UserContextProvider = ({children} : {children: ReactNode}) => {
    const [user, setUser] = useState<User | null>(null);

    return <UserContext.Provider value={{user, setUser}}>
        {children}
    </UserContext.Provider>
}

//Custom hook
export const useUser = () => {
    const context = useContext(UserContext);
    
    if(!context){
        throw new Error("useUser must be used within a UserProvider");
    }

    return context;
}