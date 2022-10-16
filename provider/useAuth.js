import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useEffect, useState } from 'react';

import {email} from '../components/BottomTabBar';

export const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
 
    const[test] = useState(email);
    return (
        <AuthContext.Provider value={{user: test}}>
            {children}
        </AuthContext.Provider>
    )
}

export default function useAuth() {
    return useContext(AuthContext);
}
