'use client';
import { AppBar, Box, Button, Drawer, IconButton, List, ListItem, ListItemText, Toolbar, Typography, useMediaQuery, useTheme } from "@mui/material"
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Colors from "@/app/colors";
import Link from "next/link";
import { useAuthContext } from "@/auth/useAuthContext";
import { PATH } from "@/routes/path";
import Cookies from "js-cookie";

const useStyles = makeStyles(() => ({
    mainContainer: {
        flexGrow: 1,
        backgroundColor: 'white',
        height: '10%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    },
    navBar: {
        backgroundColor: 'white',
        width: '85%',
        margin: 'auto',
    },
    mobileNavBar: {
        backgroundColor: 'white',
        width: '100%',
        margin: 'auto',
    },
    navLinks: {
        width: '50%',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    splitter: {
        width: '2px',
        backgroundColor: 'darkGrey',
        height: '30px',
    },
    links: {
        color: 'black',
        fontFamily: 'Montserrat, sans-serif',
    },
    button: {
        borderRadius: '10px',
        padding: '10px 20px',
        backgroundColor: Colors.primaryBlue,
        fontFamily: 'Montserrat, sans-serif',
    },
    name: {
        color: Colors.primaryBlue,
        fontWeight: 'bold',
        flexGrow: 1,
        fontFamily: 'Montserrat, sans-serif',
    },
    mobileNavLinks: {
        textAlign: 'center',
    },
}));

const NavBar = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return isMobile ? <MobileNavBar /> : <DesktopNavBar />;
}

// ------------------------------------------------ Desktop App Bar --------------------------------------
const DesktopNavBar = () => {
    const classes = useStyles();
    // const isSignedIn = typeof window !== 'undefined' && sessionStorage.getItem('signedIn') === 'true';
    const isSignedIn = typeof window !== 'undefined' && Cookies.get('signedIn') === 'true';
    const { logout } = useAuthContext();

    return (
        <Box className={classes.mainContainer}>
            <AppBar elevation={0} className={classes.navBar} position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" className={classes.name}>
                        <Link href={PATH.HOME}>
                            Guitar Directory
                        </Link>
                    </Typography>
                    <Box className={classes.navLinks}>
                        <Typography variant="h6" component="div" className={classes.links}>
                            <Link href={PATH.ABOUT}>
                                About
                            </Link>
                        </Typography>
                        <Typography variant="h6" component="div" className={classes.links}>
                            <Link href={PATH.CONTACT}>
                                Contact
                            </Link>
                        </Typography>
                        <Box className={classes.splitter} />
                        {isSignedIn ?
                            <Link href={PATH.FAVORITES}>
                                <Typography variant="h6" component="div" className={classes.links}>
                                    Favorites
                                </Typography>
                            </Link> :
                            <Link href={PATH.LOGIN}>
                                <Typography variant="h6" component="div" className={classes.links}>
                                    Login
                                </Typography>
                            </Link>}
                        {isSignedIn ?
                            <Button className={classes.button} onClick={logout} disableElevation variant="contained">Logout</Button> :
                            <Link href={PATH.REGISTER}>
                                <Button className={classes.button} disableElevation variant="contained">Sign Up</Button>
                            </Link>}
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

// ------------------------------------------------ Mobile Nav Bar -------------------------------------------
const MobileNavBar = () => {
    const [open, setOpen] = useState(false);
    const classes = useStyles();
    // const isSignedIn = typeof window !== 'undefined' && sessionStorage.getItem('signedIn') === 'true';
    const isSignedIn = typeof window !== 'undefined' && Cookies.get('signedIn') === 'true';
    const { logout } = useAuthContext();

    const handleToggleDrawer = () => {
        setOpen(!open);
    };

    const handleLogout = () => {
        logout();
        setOpen(!open);
    }

    return (
        <Box className={classes.mainContainer}>
            <AppBar elevation={0} className={classes.navBar} position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" className={classes.name}>
                        Guitar Directory
                    </Typography>
                    <IconButton
                        onClick={handleToggleDrawer}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Drawer PaperProps={{
                        sx: { width: '100%' }
                    }}
                        anchor="left"
                        open={open}
                        onClose={handleToggleDrawer}>
                        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'end' }}>
                            <IconButton
                                onClick={handleToggleDrawer}
                            >
                                <CloseIcon />
                            </IconButton>
                        </Box>
                        <List>
                            <ListItem className={classes.mobileNavLinks} onClick={handleToggleDrawer}>
                                <Link href={PATH.ABOUT}><ListItemText primary="About" /></Link>
                            </ListItem>
                            <ListItem className={classes.mobileNavLinks} onClick={handleToggleDrawer}>
                                <ListItemText primary="Contact" />
                            </ListItem>
                            {isSignedIn ?
                                <ListItem className={classes.mobileNavLinks} onClick={handleToggleDrawer}>
                                    <Link href={PATH.FAVORITES}><ListItemText primary="Favorites" /></Link>
                                </ListItem> :
                                <ListItem className={classes.mobileNavLinks} onClick={handleToggleDrawer}>
                                    <Link href={PATH.LOGIN}><ListItemText primary="Login" /></Link>
                                </ListItem>}
                            {isSignedIn ?
                                <ListItem className={classes.mobileNavLinks} onClick={handleLogout}>
                                    <ListItemText primary="Logout" />
                                </ListItem> :
                                <ListItem className={classes.mobileNavLinks} onClick={handleToggleDrawer}>
                                    <Link href={PATH.REGISTER}><ListItemText primary="Register" /></Link>
                                </ListItem>}
                        </List>
                    </Drawer>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default NavBar;