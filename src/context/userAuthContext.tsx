import { createContext, useEffect, useState, type ReactNode } from "react";
import {type UserAuthModel} from '../models/userAuthModel'
import type { UserProfile } from "../models/userProfile";
import {login, logout} from '../api/authenticationApi'
import { findUserByUsername } from "../api/usersApi";

type Props = {
  children: ReactNode;
};

export const UserAuthContext = createContext<UserAuthModel>({} as UserAuthModel);

export function UserAuthProvider({ children }: Props) {
    const [user, setUser] = useState<UserProfile | null>(null)

    useEffect(() => {
        if(user) {
            setUser(user);
        }
    }, [user])

    const loginUser = async (username: string, password: string): Promise<{isSucessful: boolean, message: string}> => {
        try {
            const tokenRes = await login({ username, password })
            console.log("Token response:", tokenRes);
            const token = tokenRes.data.token;
            if(tokenRes.status === 200) {
                const userRes = await findUserByUsername(username, token);
                if(userRes.status === 200) {
                    const userJson = userRes.data;
                    setUser(userJson);
                    console.log("User logged in:", userJson.username);
                    return { isSucessful: true, message: "Login successful" };
                }
            }
            return { isSucessful: false, message: "Login failed" };
        } catch (error) {
            console.log(`login failed with error: ${error}`)
            return { isSucessful: false, message: "Login failed" };
        }
    }

    const logoutUser = async () => {
        try {
            await logout()
        } catch (error) {
            throw error;
        }
    }

    return (
        <UserAuthContext.Provider value={{ user, loginUser, logoutUser }}>
            {children}
        </UserAuthContext.Provider>
  );
    
}