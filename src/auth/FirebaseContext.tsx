'use client';
import { FIREBASE_API } from "@/config-global";
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, fetchSignInMethodsForEmail, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import React, { createContext, useCallback, useEffect, useState } from "react";
import { FirebaseContextType } from "../../types/FirebaseTypes";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";
import { ErrorType } from "../../types/error";
import { useRouter } from "next/navigation";

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
    const [authenticated, setAuthenticated] = useState<boolean>(false);
    const { push } = useRouter();

    const initialize = useCallback(() => {
        try {
            onAuthStateChanged(AUTH, async (user) => {
                if (user) {
                    const userRef = doc(DB, 'users', user.uid);

                    const docSnap = await getDoc(userRef);

                    const profile = docSnap.data();
                }
            })
        } catch (error) {
            console.log(error);
        }
    }, []);

    useEffect(() => {
        initialize();
    }, [initialize]);

    // LOGIN
    const login = useCallback(async (email: string, password: string) => {
        try {
            setAuthenticated(false);

            await signInWithEmailAndPassword(AUTH, email, password);

            onAuthStateChanged(AUTH, (user) => {
                // Set the authenticated state based on email verification
                setAuthenticated(user?.emailVerified ?? false);

                if (!user?.emailVerified) {
                    throw new Error(ErrorType.EMAIL_NOT_VERIFIED);
                } else {
                    sessionStorage.setItem('signedIn', 'true');
                    push('/');
                }
            });
        } catch (error: any) {
            if (error.message === 'Email not verified') {
                throw new Error(ErrorType.EMAIL_NOT_VERIFIED);
            }

            if (error.message === 'Firebase: Error (auth/invalid-credential).') {
                throw new Error(ErrorType.INVALID_CREDENTIALS);
            }
        }
    }, [authenticated, push]);

    // REGISTER
    const register = useCallback(async (userName: string, email: string, password: string) => {
        try {
            const { user } = await createUserWithEmailAndPassword(AUTH, email, password);
            await updateProfile(user, { displayName: userName }).catch((err) => console.log(err));
            await sendEmailVerification(user)
                .then(() => console.log('Email has been sent!'))
                .catch((err) => console.log(err));
            const userRef = doc(DB, 'users', user.uid);
            await setDoc(userRef, { userName, favorites: [], email: email });
            console.log('this is the end of the registration process');
        } catch (error: any) {
            if (error.message === 'Firebase: Error (auth/email-already-in-use).') {
                throw new Error(ErrorType.ACCOUNT_ALREADY_EXISTS);
            }
            if (error.message === 'Firebase: Password should be at least 6 characters (auth/weak-password).') {
                throw new Error(ErrorType.PASSWORD_TOO_SHORT);
            }
        }
    }, []);

    // Password reset
    const passwordReset = useCallback(async (email: string) => {
        const signIns = await fetchSignInMethodsForEmail(AUTH, email);
        if (signIns.length === 0) {
            throw new Error(ErrorType.USER_NOT_FOUND);
        } else {
            sendPasswordResetEmail(AUTH, email);
        }
    }, []);

    // Logout
    const logout = useCallback(() => {
        signOut(AUTH);
        sessionStorage.removeItem('signedIn');
        push('/');
        window.location.reload();
    }, []);

    return <AuthContext.Provider value={{ login, register, passwordReset, logout }}>{children}</AuthContext.Provider>

}
