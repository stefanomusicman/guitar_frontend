'use client';
import Colors from "@/app/colors";
import { useAuthContext } from "@/auth/useAuthContext";
import { PATH } from "@/routes/path";
import { Alert, Box, Button, CircularProgress, TextField, Typography, useMediaQuery, useTheme } from "@mui/material";
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
        fontFamily: 'Montserrat, sans-serif',
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

    const { register } = useAuthContext();

    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [feedbackMessage, setFeedbackMessage] = useState<string>('');
    const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
    const [errors, setError] = useState<boolean>(false);
    const [passMatch, setPassMatch] = useState<boolean>(true);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const hasErrors = username.length === 0 || email.length === 0 || password.length === 0 || confirmPassword.length === 0;
        const passwordsMatch = password === confirmPassword;

        if (hasErrors) {
            setError(true);
            setFeedbackMessage('Please fix errors');
        } else if (!passwordsMatch) {
            setPassMatch(false);
            setFeedbackMessage('Passwords do not match')
        } else {
            try {
                setError(false);
                setPassMatch(true);
                setLoading(true);
                await register(username, email, password);
                setFeedbackMessage('Verification email has been sent');
            } catch (error: any) {
                setError(true);
                setFeedbackMessage(error.message);
            } finally {
                setLoading(false);
            }
        }

        setFormSubmitted(true);
    }

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const formWidth = isMobile ? '90%' : '45%';

    return (
        <form style={{ width: formWidth }} onSubmit={handleSubmit} className={classes.form}>
            {loading && <CircularProgress />} {/* Show the loading spinner while registration is in progress */}
            {!loading && formSubmitted && <Alert sx={{ margin: 'auto' }} severity={errors || !passMatch ? 'error' : 'success'}>{feedbackMessage}</Alert>}
            <Typography className={classes.title} variant="h6">Sign Up</Typography>
            <Typography className={classes.loginLinkText} variant="body1">Already have an account? <Link className={classes.link} href={PATH.LOGIN}>Login</Link></Typography>
            <Typography className={classes.label}>Username</Typography>
            <TextField
                error={formSubmitted && username.length === 0}
                helperText={formSubmitted && username.length === 0 ? 'Field cannot be empty' : ''}
                value={username}
                className={classes.textField}
                onChange={(e) => setUsername(e.target.value)}
                id="username"
                label="Enter your username"
                variant="outlined"
                InputProps={{ sx: { borderRadius: '10px' } }}
            />
            <Typography className={classes.label}>Email</Typography>
            <TextField
                error={formSubmitted && email.length === 0}
                helperText={formSubmitted && email.length === 0 ? 'Field cannot be empty' : ''}
                value={email}
                className={classes.textField}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                label="Enter your email"
                type="email"
                variant="outlined"
                InputProps={{ sx: { borderRadius: '10px' } }}
            />
            <Typography className={classes.label}>Password</Typography>
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
                InputProps={{ sx: { borderRadius: '10px' } }}
            />
            <Typography className={classes.label}>Confirm Password</Typography>
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
                InputProps={{ sx: { borderRadius: '10px' } }}
            />
            <Box className={classes.buttonContainer}>
                <Button type="submit" className={classes.button} disableElevation variant="contained">Sign Up</Button>
            </Box>
        </form>
    );
}

export default RegisterForm;