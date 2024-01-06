'use client';
import { AuthProvider } from "@/auth/FirebaseContext"
import RegisterForm from "@/components/registerForm"
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

const Register = () => {
    const classes = useStyles();

    return (
        <AuthProvider>
            <Box className={classes.mainContainer}>
                <RegisterForm />
            </Box>
        </AuthProvider>
    );
}

export default Register;