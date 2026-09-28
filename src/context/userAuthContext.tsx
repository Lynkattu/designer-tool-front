import { createContext, useEffect, useState } from "react";
import {type UserAuthModel} from '../models/userAuthModel'
import type { UserProfile } from "../models/userProfile";
import type { LoginModel } from "../models/loginModel";
import {login, logout} from '../api/authenticationApi'
import { findUserByUsername } from "../api/usersApi";

export const UserAuthContext = createContext<UserAuthModel>({} as UserAuthModel);

export function UserAuthProvider() {
    const [user, setUser] = useState<UserProfile | null>(null)

    useEffect(() => {
        if(user) {

        }
    }, [user])

    async function loginUser(loginInfo: LoginModel) {
        try {
            const tokenRes = await login(loginInfo)
            if(tokenRes.status === 200) {
                const userRes = await findUserByUsername(loginInfo.username);
                if(userRes.status === 200) {
                    const userJson = await userRes.data.json();
                    const data = userJson as { user: UserProfile };
                    setUser(data.user);
                    console.log("User logged in:", userJson.user);
                }
            }
        } catch (error) {
            console.log(`login failed with error: ${error}`)
            throw error;
        }
    }

    async function logoutUser() {
        try {
            await logout()
        } catch (error) {
            throw error;
        }
    }
    
}