import { FIREBASE_API } from "@/config-global";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const app = initializeApp(FIREBASE_API);

const auth = getAuth(app);