import { Guitar } from "./guitar";

export type FirebaseContextType = {
    login: (email: string, password: string) => void;
    register: (userName: string, email: string, password: string) => void;
    passwordReset: (email: string) => void;
    logout: () => void;
    addToFavorites: (favoriteID: string) => void;
    removeFromFavorites: (favoriteID: string) => void;
    fetchFirebaseFavorites: () => Promise<Guitar[]>;
}