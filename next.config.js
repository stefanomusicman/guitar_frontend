/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        FIREBASE_API_KEY: "AIzaSyBzwotIC8olyqOTk6njbiP3mRXSzQTGS54",
        FIREBASE_AUTH_DOMAIN: "guitar-frontend.firebaseapp.com",
        FIREBASE_PROJECT_ID: "guitar-frontend",
        FIREBASE_STORAGE_BUCKET: "guitar-frontend.appspot.com",
        FIREBASE_MESSAGING_SENDER_ID: "85838929404",
        FIREBASE_APP_ID: "1:85838929404:web:4ca2adfdd8a9fee087e679",
        FRONTEND_BASE_URL: "https://guitar-frontend.vercel.app",
    }
}

module.exports = nextConfig
