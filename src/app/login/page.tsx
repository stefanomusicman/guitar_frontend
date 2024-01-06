'use client';
import { AuthProvider } from "@/auth/FirebaseContext";
import LoginForm from "@/components/loginForm";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
    mainContainer: {
        width: '100%',
        height: '90%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
}));

const Login = () => {
    const classes = useStyles();

    return (
        <AuthProvider>
            <Box className={classes.mainContainer}>
                <LoginForm />
            </Box>
        </AuthProvider>
    );
}

export default Login;