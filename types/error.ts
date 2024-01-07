export enum ErrorType {
    EMAIL_NOT_VERIFIED = 'Email not verified',
    ACCOUNT_ALREADY_EXISTS = 'An account already exists with this email.',
    PASSWORD_TOO_SHORT = 'Password length must be at least 6 characters.',
    USER_NOT_FOUND = 'Firebase: Error (auth/user-not-found).',
    WRONG_PASSWORD = 'Firebase: Error (auth/wrong-password).',
}