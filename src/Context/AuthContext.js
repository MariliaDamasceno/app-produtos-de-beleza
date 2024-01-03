import React, { createContext} from 'react';
import useAuth from '../hooks/useAuth';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const {userLogged,  userFull, loginUser, logoutUser} = useAuth()    
    return (
        <AuthContext.Provider value={{ userLogged, userFull, loginUser, logoutUser}}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
