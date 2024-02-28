'use client';
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material"
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PeopleIcon from '@mui/icons-material/People';
import Link from "next/link";
import Colors from "@/app/colors";
import { PATH } from "@/routes/path";

const iconContainer = {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-evenly',
    margin: '2em 0em',
}

const copy = {
    fontFamily: 'Montserrat, sans-serif',
    textAlign: 'center',
    lineHeight: '2',
    marginBottom: '1.2em',
}

const loginLinkText = {
    fontFamily: 'Montserrat, sans-serif',
    color: 'grey',
    paddingBottom: '1em',
    textAlign: 'center',
}

const link = {
    color: Colors.primaryBlue
}

const AbountContent = () => {
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
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white',
                borderRadius: '10px',
                padding: '30px',
                width: containerWidth
            }}>
            {/* Grid for the Icons */}
            <Box sx={iconContainer}>
                <PeopleIcon sx={{ width: iconSize, height: iconSize, color: Colors.primaryBlue }} />
                <MenuBookIcon sx={{ width: iconSize, height: iconSize, color: Colors.primaryBlue }} />
            </Box>
            <Typography style={{ fontSize: fontSize }} sx={copy}>{text}</Typography>
            <Typography style={{ fontSize: fontSize }} sx={loginLinkText} variant="body1">Have a question or maybe a suggestion? <Link style={link} href={PATH.CONTACT}>Contact Us!</Link></Typography>
        </Box>
    )
}

export default AbountContent;