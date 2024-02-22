'use client';
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material"
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PeopleIcon from '@mui/icons-material/People';
import Link from "next/link";
import Colors from "@/app/colors";
import { makeStyles } from "@mui/styles";
import { PATH } from "@/routes/path";

const useStyles = makeStyles(() => ({
    contentContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: '10px',
        padding: '30px',
    },
    iconContainer: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-evenly',
        margin: '2em 0em',
    },
    icon: {
        color: Colors.primaryBlue
    },
    text: {
        fontFamily: 'Montserrat, sans-serif',
        textAlign: 'center',
        lineHeight: '2',
        marginBottom: '1.2em',
    },
    loginLinkText: {
        fontFamily: 'Montserrat, sans-serif',
        color: 'grey',
        paddingBottom: '1em',
        textAlign: 'center',
    },
    link: {
        color: Colors.primaryBlue
    }
}));

const AbountContent = () => {
    const classes = useStyles();

    const theme = useTheme();
    const isMobile: Boolean = useMediaQuery(theme.breakpoints.down('lg'));
    const containerWidth: string = isMobile ? '90%' : '45%';
    const fontSize: string = isMobile ? '1rem' : '1.5rem';
    const iconSize: string = isMobile ? '50px' : '75px';

    const text: React.ReactNode = (
        <span>
            Welcome to our <strong style={{ color: Colors.primaryOrange }}>guitar haven</strong>! Explore a symphony of strings with our database of diverse guitars. From timeless classics to cutting-edge models, find the <strong style={{ color: Colors.primaryOrange }}>perfect melody companion</strong> for your musical journey. Uncover the stories behind each instrument and join our community of guitar enthusiasts. <strong style={{ color: Colors.primaryBlue }}>Let the music begin!</strong>
        </span>
    );

    return (
        <Box className={classes.contentContainer} sx={{ width: containerWidth }}>
            {/* Grid for the Icons */}
            <Box className={classes.iconContainer}>
                <PeopleIcon sx={{ width: iconSize, height: iconSize }} className={classes.icon} />
                <MenuBookIcon sx={{ width: iconSize, height: iconSize }} className={classes.icon} />
            </Box>
            <Typography style={{ fontSize: fontSize }} className={classes.text}>{text}</Typography>
            <Typography style={{ fontSize: fontSize }} className={classes.loginLinkText} variant="body1">Have a question or maybe a suggestion? <Link className={classes.link} href={PATH.CONTACT}>Contact Us!</Link></Typography>
        </Box>
    )
}

export default AbountContent;