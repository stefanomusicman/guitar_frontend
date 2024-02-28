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

const RegisterForm = () => {
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
            {!loading && formSubmitted && <Alert sx={{ margin: 'auto' }} severity={errors || !passMatch ? 'error' : 'success'}>{feedbackMessage}</Alert>}
            <Typography sx={title} variant="h6">Sign Up</Typography>
            <Typography sx={loginLinkText} variant="body1">Already have an account? <Link style={link} href={PATH.LOGIN}>Login</Link></Typography>
            <Typography sx={label}>Username</Typography>
            <TextField
                error={formSubmitted && username.length === 0}
                helperText={formSubmitted && username.length === 0 ? 'Field cannot be empty' : ''}
                value={username}
                sx={textField}
                onChange={(e) => setUsername(e.target.value)}
                id="username"
                label="Enter your username"
                variant="outlined"
                InputProps={{ sx: { borderRadius: '10px' } }}
            />
            <Typography sx={label}>Email</Typography>
            <TextField
                error={formSubmitted && email.length === 0}
                helperText={formSubmitted && email.length === 0 ? 'Field cannot be empty' : ''}
                value={email}
                sx={textField}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                label="Enter your email"
                type="email"
                variant="outlined"
                InputProps={{ sx: { borderRadius: '10px' } }}
            />
            <Typography sx={label}>Password</Typography>
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
            <Typography sx={label}>Confirm Password</Typography>
            <TextField
                error={formSubmitted && confirmPassword.length === 0}
                helperText={formSubmitted && confirmPassword.length === 0 ? 'Field cannot be empty' : ''}
                value={confirmPassword}
                type="password"
                sx={textField}
                onChange={(e) => setConfirmPassword(e.target.value)}
                id="confirm-password"
                label="Confirm your password"
                variant="outlined"
                InputProps={{ sx: { borderRadius: '10px' } }}
            />
            <Box sx={buttonContainer}>
                <Button type="submit" sx={button} disableElevation variant="contained">Sign Up</Button>
            </Box>
        </form>
    );
}

export default RegisterForm;