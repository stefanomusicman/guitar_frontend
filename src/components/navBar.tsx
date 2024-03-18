'use client';
import { AppBar, Box, Button, Drawer, IconButton, List, ListItem, ListItemText, Toolbar, Typography, useMediaQuery, useTheme } from "@mui/material"
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Colors from "@/app/colors";
import Link from "next/link";
import { useAuthContext } from "@/auth/useAuthContext";
import { PATH } from "@/routes/path";
import Cookies from "js-cookie";

const mainContainer = {
    flexGrow: 1,
    backgroundColor: 'white',
    height: '10%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
}

const navBar = {
    backgroundColor: 'white',
    width: '85%',
    margin: 'auto',
}

const mobileNavBar = {
    backgroundColor: 'white',
    width: '100%',
    margin: 'auto',
}

const navLinks = {
    width: '50%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
}

const splitter = {
    width: '2px',
    backgroundColor: 'darkGrey',
    height: '30px',
}

const links = {
    color: 'black',
    fontFamily: 'Montserrat, sans-serif',
}

const button = {
    borderRadius: '10px',
    padding: '10px 20px',
    backgroundColor: Colors.primaryBlue,
    fontFamily: 'Montserrat, sans-serif',
}

const name = {
    color: Colors.primaryBlue,
    fontWeight: 'bold',
    flexGrow: 1,
    fontFamily: 'Montserrat, sans-serif',
}

const mobileNavLinks = {
    textAlign: 'center',
}

const NavBar = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return isMobile ? <MobileNavBar /> : <DesktopNavBar />;
}

// ------------------------------------------------ Desktop App Bar --------------------------------------
const DesktopNavBar = () => {
    const isSignedIn = typeof window !== 'undefined' && Cookies.get('signedIn') === 'true';
    const { logout } = useAuthContext();

    return (
        <Box sx={mainContainer}>
            <AppBar elevation={0} sx={navBar} position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={name}>
                        <Link href={PATH.HOME}>
                            Guitar Directory
                        </Link>
                    </Typography>
                    <Box sx={navLinks}>
                        <Typography variant="h6" component="div" sx={links}>
                            <Link href={PATH.ABOUT}>
                                About
                            </Link>
                        </Typography>
                        <Typography variant="h6" component="div" sx={links}>
                            <Link href={PATH.CONTACT}>
                                Contact
                            </Link>
                        </Typography>
                        <Box sx={splitter} />
                        {isSignedIn ?
                            <Link href={PATH.FAVORITES}>
                                <Typography variant="h6" component="div" sx={links}>
                                    Favorites
                                </Typography>
                            </Link> :
                            <Link href={PATH.LOGIN}>
                                <Typography variant="h6" component="div" sx={links}>
                                    Login
                                </Typography>
                            </Link>}
                        {isSignedIn ?
                            <Button sx={button} onClick={logout} disableElevation variant="contained">Logout</Button> :
                            <Link href={PATH.REGISTER}>
                                <Button sx={button} disableElevation variant="contained">Sign Up</Button>
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
        <Box sx={mainContainer}>
            <AppBar elevation={0} sx={navBar} position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={name}>
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
                            <ListItem sx={mobileNavLinks} onClick={handleToggleDrawer}>
                                <Link href={PATH.ABOUT}><ListItemText primary="About" /></Link>
                            </ListItem>
                            <ListItem sx={mobileNavLinks} onClick={handleToggleDrawer}>
                                <Link href={PATH.CONTACT}><ListItemText primary="Contact" /></Link>
                            </ListItem>
                            {isSignedIn ?
                                <ListItem sx={mobileNavLinks} onClick={handleToggleDrawer}>
                                    <Link href={PATH.FAVORITES}><ListItemText primary="Favorites" /></Link>
                                </ListItem> :
                                <ListItem sx={mobileNavLinks} onClick={handleToggleDrawer}>
                                    <Link href={PATH.LOGIN}><ListItemText primary="Login" /></Link>
                                </ListItem>}
                            {isSignedIn ?
                                <ListItem sx={mobileNavLinks} onClick={handleLogout}>
                                    <ListItemText primary="Logout" />
                                </ListItem> :
                                <ListItem sx={mobileNavLinks} onClick={handleToggleDrawer}>
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