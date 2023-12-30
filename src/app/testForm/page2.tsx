'use client';

import { useAuthContext } from "@/auth/useAuthContext";
import { FormEvent, useState } from "react";

const TestForm = () => {
    const [userName, setUserName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const { register } = useAuthContext();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log(userName);
        console.log(email);
        console.log(password);

        register(userName, email, password);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Username</label>
            <input onChange={(e) => setUserName(e.target.value)} type="text" />
            <label>Email</label>
            <input onChange={(e) => setEmail(e.target.value)} type="email" />
            <label>Password</label>
            <input onChange={(e) => setPassword(e.target.value)} type="text" />
            <button type="submit">Register</button>
        </form>
    )
}

export default TestForm;