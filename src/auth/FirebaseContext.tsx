'use client';
import { FIREBASE_API } from "@/config-global";
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import React, { createContext, useCallback, useMemo } from "react";
import { FirebaseContextType } from "../../types/FirebaseTypes";
import { doc, getFirestore, setDoc } from "firebase/firestore";

// ------------------------------------------------------------------------

export const AuthContext = createContext<FirebaseContextType | null>(null);

// ------------------------------------------------------------------------

const app = initializeApp(FIREBASE_API);

const AUTH = getAuth(app);

const DB = getFirestore(app);

type AuthProviderProps = {
    children: React.ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
    // LOGIN
    const login = useCallback(async (email: string, password: string) => {
        await signInWithEmailAndPassword(AUTH, email, password);
    }, []);

    // REGISTER
    const register = useCallback(async (userName: string, email: string, password: string) => {
        try {
            const { user } = await createUserWithEmailAndPassword(AUTH, email, password);
            await updateProfile(user, { displayName: userName }).catch((err) => console.log(err));
            const userRef = doc(DB, 'users', user.uid);
            await setDoc(userRef, { userName, favorites: [] });
            console.log('this is the end of the registration process');
        } catch (error) {
            console.log(error);
        }
    }, []);

    const memoizedValue = useMemo(
        () => ({
            login,
            register,
        }),
        [
            login,
            register
        ]
    );

    return <AuthContext.Provider value={memoizedValue}>{children}</AuthContext.Provider>

}
