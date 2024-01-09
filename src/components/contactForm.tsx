'use client';
import { makeStyles } from "@mui/styles";
import Colors from "../app/colors";
import { FormEvent, useState } from "react";
import { Alert, Box, Button, CircularProgress, Link, TextField, Typography, useMediaQuery, useTheme } from "@mui/material";

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

const ContactForm = () => {
    const classes = useStyles();

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
        <form style={{ width: formWidth }} onSubmit={handleSubmit} className={classes.form}>
            {loading && <CircularProgress />} {/* Show the loading spinner while registration is in progress */}
            {!loading && formSubmitted && <Alert sx={{ margin: 'auto' }} severity={errors ? 'error' : 'success'}>{feedbackMessage}</Alert>}
            <Typography className={classes.title} variant="h6">Contact</Typography>
            <Typography className={classes.loginLinkText} variant="body1">If you have any questions or suggestions, we'd love to hear them!</Typography>
            <label className={classes.label}>Email</label>
            <TextField
                error={formSubmitted && email.length === 0}
                helperText={formSubmitted && email.length === 0 ? 'Field cannot be empty' : ''}
                value={email}
                type="email"
                className={classes.textField}
                onChange={(e) => setEmail(e.target.value)}
                id="username"
                label="Enter your email"
                variant="outlined"
            />
            <label className={classes.label}>Name</label>
            <TextField
                error={formSubmitted && name.length === 0}
                helperText={formSubmitted && name.length === 0 ? 'Field cannot be empty' : ''}
                value={name}
                type="text"
                className={classes.textField}
                onChange={(e) => setName(e.target.value)}
                id="name"
                label="Enter your name"
                variant="outlined"
            />
            <label className={classes.label}>Message</label>
            <TextField
                error={formSubmitted && message.length === 0}
                helperText={formSubmitted && message.length === 0 ? 'Field cannot be empty' : ''}
                value={message}
                type="text"
                className={classes.textField}
                onChange={(e) => setMessage(e.target.value)}
                id="message"
                label="Enter your message"
                multiline
                variant="outlined"
                maxRows={4}
            />
            <Box className={classes.buttonContainer}>
                <Button type="submit" className={classes.button} disableElevation variant="contained">Submit</Button>
            </Box>
        </form>
    );
}

export default ContactForm;