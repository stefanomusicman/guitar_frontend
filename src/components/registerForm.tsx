'use client';
import Colors from "@/app/colors";
import { Box, Button, TextField, Typography, useMediaQuery, useTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Link from "next/link";
import { FormEvent, useState } from "react";

const useStyles = makeStyles(() => ({
    form: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'start',
        backgroundColor: 'white',
        borderRadius: '10px',
        padding: '30px',
    },
    button: {
        borderRadius: '10px',
        padding: '10px 20px',
        backgroundColor: Colors.primaryBlue,
        fontFamily: 'Montserrat, sans-serif',
    },
    label: {
        marginBottom: '10px',
        fontSize: '1.5rem',
    },
    textField: {
        width: '100%',
        paddingBottom: '20px',
        borderRadius: '10px',
    },
    buttonContainer: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '2rem',
        fontWeight: 'bold',
        marginBottom: '10px',
    },
    loginLinkText: {
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '1.5rem',
        color: 'grey',
        paddingBottom: '15px',
    },
    link: {
        color: Colors.primaryBlue
    }
}));

const RegisterForm = () => {
    const classes = useStyles();

    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // TODO: Implement Logic for handling form submission
    }

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const formWidth = isMobile ? '90%' : '45%';

    return (
        <form style={{ width: formWidth }} onSubmit={handleSubmit} className={classes.form}>
            <Typography className={classes.title} variant="h6">Sign Up</Typography>
            <Typography className={classes.loginLinkText} variant="body1">Already have an account? <Link className={classes.link} href='/login'>Login</Link></Typography>
            <label className={classes.label}>Username</label>
            <TextField
                error={formSubmitted && username.length === 0}
                helperText={formSubmitted && username.length === 0 ? 'Field cannot be empty' : ''}
                value={username} className={classes.textField}
                onChange={(e) => setUsername(e.target.value)}
                id="username"
                label="Enter your username"
                variant="outlined"
            />
            <label className={classes.label}>Email</label>
            <TextField
                error={formSubmitted && email.length === 0}
                helperText={formSubmitted && email.length === 0 ? 'Field cannot be empty' : ''}
                value={email}
                className={classes.textField}
                onChange={(e) => setEmail(e.target.value)}
                id="username"
                label="Enter your email"
                type="email"
                variant="outlined"
            />
            <label className={classes.label}>Password</label>
            <TextField
                error={formSubmitted && password.length === 0}
                helperText={formSubmitted && password.length === 0 ? 'Field cannot be empty' : ''}
                value={password}
                type="password"
                className={classes.textField}
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                label="Enter your password"
                variant="outlined"
            />
            <label className={classes.label}>Confirm Password</label>
            <TextField
                error={formSubmitted && confirmPassword.length === 0}
                helperText={formSubmitted && confirmPassword.length === 0 ? 'Field cannot be empty' : ''}
                value={confirmPassword}
                type="password"
                className={classes.textField}
                onChange={(e) => setConfirmPassword(e.target.value)}
                id="confirm-password"
                label="Confirm your password"
                variant="outlined"
            />
            <Box className={classes.buttonContainer}>
                <Button type="submit" className={classes.button} disableElevation variant="contained">Sign Up</Button>
            </Box>
        </form>
    );
}

export default RegisterForm;