export type FirebaseContextType = {
    login: (email: string, password: string) => void;
    register: (userName: string, email: string, password: string) => void;
}