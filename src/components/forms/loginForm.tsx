'use client';
import Colors from "@/app/colors";
import { useAuthContext } from "@/auth/useAuthContext";
import { PATH } from "@/routes/path";
import { Alert, Box, Button, CircularProgress, TextField, Typography, useMediaQuery, useTheme } from "@mui/material";
import Link from "next/link";
import { FormEvent, useState } from "react";

const button = {
    borderRadius: '10px',
    padding: '10px 20px',
    backgroundColor: Colors.primaryBlue,
    fontFamily: 'Montserrat, sans-serif',
}

const label = {
    marginBottom: '10px',
    fontSize: '1.5rem',
    fontFamily: 'Montserrat, sans-serif',
}

const textField = {
    width: '100%',
    paddingBottom: '20px',
    borderRadius: '10px',
}

const buttonContainer = {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}

const forgotPassword = {
    fontFamily: 'Montserrat, sans-serif',
    marginBottom: '10px',
}

const title = {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '10px',
}

const loginLinkText = {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '1.5rem',
    color: 'grey',
    paddingBottom: '15px',
}

const link = {
    color: Colors.primaryBlue
}

const LoginForm = () => {
    const { login } = useAuthContext();

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [loading, setLoading] = useState(false);
    const [errors, setError] = useState<boolean>(false);
    const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
    const [feedbackMessage, setFeedbackMessage] = useState<string>('');

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const hasErrors = email.length === 0 || password.length === 0;

        if (hasErrors) {
            setError(true);
            setFeedbackMessage('Please fix errors');
        } else {
            try {
                setError(false);
                setLoading(true);
                await login(email, password);
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
    const isMobile: Boolean = useMediaQuery(theme.breakpoints.down('md'));
    const formWidth: string = isMobile ? '90%' : '45%';

    return (
        <form
            style={{
                width: formWidth,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'start',
                backgroundColor: 'white',
                borderRadius: '10px',
                padding: '30px',
            }}
            onSubmit={handleSubmit}>
            {loading && <CircularProgress />} {/* Show the loading spinner while registration is in progress */}
            {!loading && formSubmitted && <Alert sx={{ margin: 'auto' }} severity={errors ? 'error' : 'success'}>{feedbackMessage}</Alert>}
            <Typography sx={title} variant="h6">Login</Typography>
            <Typography sx={loginLinkText} variant="body1">Don&apos;t have an account? <Link style={link} href={PATH.REGISTER}>Sign Up</Link></Typography>
            <Typography sx={label}>Email</Typography>
            <TextField
                error={formSubmitted && email.length === 0}
                helperText={formSubmitted && email.length === 0 ? 'Field cannot be empty' : ''}
                value={email}
                type="email"
                sx={textField}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                label="Enter your email"
                variant="outlined"
                InputProps={{ sx: { borderRadius: '10px' } }}
            />
            <label style={label}>Password</label>
            <TextField
                error={formSubmitted && password.length === 0}
                helperText={formSubmitted && password.length === 0 ? 'Field cannot be empty' : ''}
                value={password}
                type="password"
                sx={textField}
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                label="Enter your password"
                variant="outlined"
                InputProps={{ sx: { borderRadius: '10px' } }}
            />
            <Link href={PATH.FORGOTPASSWORD}><Typography sx={forgotPassword}>Forgot Password?</Typography></Link>
            <Box sx={buttonContainer}>
                <Button type="submit" sx={button} disableElevation variant="contained">Login</Button>
            </Box>
        </form>
    );
}

export default LoginForm;