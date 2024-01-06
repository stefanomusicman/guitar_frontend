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

const LoginForm = () => {
    const classes = useStyles();

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // TODO: Implement Logic for handling form submission
    }

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const formWidth = isMobile ? '90%' : '45%';

    return (
        <form style={{ width: formWidth }} onSubmit={handleSubmit} className={classes.form}>
            <Typography className={classes.title} variant="h6">Login</Typography>
            <Typography className={classes.loginLinkText} variant="body1">Don't have an account? <Link className={classes.link} href='/register'>Sign Up</Link></Typography>
            <label className={classes.label}>Email</label>
            <TextField className={classes.textField} onChange={(e) => setEmail(e.target.value)} id="username" label="Enter your email" variant="outlined" />
            <label className={classes.label}>Password</label>
            <TextField className={classes.textField} onChange={(e) => setPassword(e.target.value)} id="password" label="Enter your password" variant="outlined" />
            <Box className={classes.buttonContainer}>
                <Button type="submit" className={classes.button} disableElevation variant="contained">Sign Up</Button>
            </Box>
        </form>
    );
}

export default LoginForm;