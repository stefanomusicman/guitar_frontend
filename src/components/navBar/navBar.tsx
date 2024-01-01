'use client';
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material"
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
    mainContainer: {
        flexGrow: 1,
        backgroundColor: 'white',
        height: '10%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    navBar: {
        backgroundColor: 'white',
        width: '85%',
        margin: 'auto',
    },
    navLinks: {
        width: '50%',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
}));

const NavBar = () => {
    const classes = useStyles()

    return (
        <Box className={classes.mainContainer}>
            <AppBar elevation={0} className={classes.navBar} position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ color: 'black', fontWeight: 'bold', flexGrow: 1, fontFamily: 'Montserrat, sans-serif' }}>
                        Guitar Directory
                    </Typography>
                    <Box className={classes.navLinks}>
                        <Typography variant="h6" component="div" sx={{ color: 'black', fontFamily: 'Montserrat, sans-serif' }}>
                            About
                        </Typography>
                        <Typography variant="h6" component="div" sx={{ color: 'black' }}>
                            Contact
                        </Typography>
                        <Box sx={{ width: '2px', backgroundColor: 'darkGrey', height: '30px' }}></Box>
                        <Typography variant="h6" component="div" sx={{ color: 'black' }}>
                            Login
                        </Typography>
                        <Button sx={{ borderRadius: '10px', padding: '10px 20px' }} disableElevation variant="contained">Register</Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default NavBar;