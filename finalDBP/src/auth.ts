import {createContext, useContext} from 'react';

export interface AuthContextType{
    token: string | null;
    login: (token: string) => void;
    logout: () => void;
}