'use client';
import Colors from "../../app/colors";
import { FormEvent, useState } from "react";
import { Alert, Box, Button, CircularProgress, TextField, Typography, useMediaQuery, useTheme } from "@mui/material";

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

const mobileLabel = {
    marginBottom: '10px',
    fontSize: '1.2rem',
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

const mobileTitle = {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '10px',
}

const loginLinkText = {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '1.5rem',
    color: 'grey',
    paddingBottom: '15px',
}

const mobileLoginLinkText = {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '1.2rem',
    color: 'grey',
    paddingBottom: '15px',
}

const ContactForm = () => {
    const [email, setEmail] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [loading, setLoading] = useState(false);
    const [errors, setError] = useState<boolean>(false);
    const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
    const [feedbackMessage, setFeedbackMessage] = useState<string>('');

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const hasErrors = email.length === 0 || name.length === 0;

        if (hasErrors) {
            setError(true);
            setFeedbackMessage('Please fix errors');
        } else {
            try {
                setError(false);
                setLoading(true);
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
                width: formWidth, display: 'flex',
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
            <Typography sx={isMobile ? mobileTitle : title} variant="h6">Contact</Typography>
            <Typography sx={isMobile ? mobileLoginLinkText : loginLinkText} variant="body1">If you have any questions or suggestions, we&apos;d love to hear them!</Typography>
            <Typography sx={isMobile ? mobileLabel : label}>Email</Typography>
            <TextField
                error={formSubmitted && email.length === 0}
                helperText={formSubmitted && email.length === 0 ? 'Field cannot be empty' : ''}
                value={email}
                type="email"
                sx={textField}
                onChange={(e) => setEmail(e.target.value)}
                id="username"
                label="Enter your email"
                variant="outlined"
                InputProps={{ sx: { borderRadius: '10px' } }}
            />
            <Typography sx={isMobile ? mobileLabel : label}>Name</Typography>
            <TextField
                error={formSubmitted && name.length === 0}
                helperText={formSubmitted && name.length === 0 ? 'Field cannot be empty' : ''}
                value={name}
                type="text"
                sx={textField}
                onChange={(e) => setName(e.target.value)}
                id="name"
                label="Enter your name"
                variant="outlined"
                InputProps={{ sx: { borderRadius: '10px' } }}
            />
            <Typography sx={isMobile ? mobileLabel : label}>Message</Typography>
            <TextField
                error={formSubmitted && message.length === 0}
                helperText={formSubmitted && message.length === 0 ? 'Field cannot be empty' : ''}
                value={message}
                type="text"
                sx={textField}
                onChange={(e) => setMessage(e.target.value)}
                id="message"
                label="Enter your message"
                multiline
                variant="outlined"
                maxRows={4}
                InputProps={{ sx: { borderRadius: '10px' } }}
            />
            <Box sx={buttonContainer}>
                <Button type="submit" sx={button} disableElevation variant="contained">Submit</Button>
            </Box>
        </form>
    );
}

export default ContactForm;