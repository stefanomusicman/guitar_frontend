'use client';
import Colors from "@/app/colors";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
    headlineBox: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginTop: '5em',
    },
    headlineText: {
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: 'bold',
    },
}));

const Headline = () => {
    const classes = useStyles();

    const theme = useTheme();
    const isMobile: Boolean = useMediaQuery(theme.breakpoints.down('md'));

    const fontSize: string = isMobile ? '2rem' : '2.5rem';

    return (
        <Box className={classes.headlineBox}>
            <Typography sx={{ fontSize: fontSize }} className={classes.headlineText}><strong style={{ color: Colors.primaryBlue }}>Search</strong> for a Guitar</Typography>
            <Typography sx={{ fontSize: fontSize }} className={classes.headlineText}><strong style={{ color: Colors.primaryOrange }}>Contribute</strong> and help grow the directory</Typography>
        </Box>
    );
}

export default Headline;