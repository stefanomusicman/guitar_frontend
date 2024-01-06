'use client';
import Colors from "@/app/colors";
import { Box, Button, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { FormEvent, useState } from "react";

const useStyles = makeStyles(() => ({
    form: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'start',
    },
    button: {
        borderRadius: '10px',
        padding: '10px 20px',
        backgroundColor: Colors.primaryBlue,
    },
}));

const RegisterForm = () => {
    const classes = useStyles();

    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // TODO: Implement Logic for handling form submission
    }

    return (
        <form onSubmit={handleSubmit} className={classes.form}>
            <label>Username</label>
            <TextField onChange={(e) => setUsername(e.target.value)} id="username" label="Enter your username" variant="outlined" />
            <label>Password</label>
            <TextField onChange={(e) => setEmail(e.target.value)} id="password" label="Enter your password" variant="outlined" />
            <label>Confirm Password</label>
            <TextField onChange={(e) => setConfirmPassword(e.target.value)} id="confirm-password" label="Confirm your password" variant="outlined" />
            <Button type="submit" className={classes.button} disableElevation variant="contained">Register</Button>
        </form>
    );
}

export default RegisterForm;