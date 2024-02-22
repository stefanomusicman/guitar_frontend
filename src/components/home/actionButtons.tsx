'use client';
import Colors from "@/app/colors";
import { Button, useMediaQuery } from "@mui/material"
import { makeStyles } from "@mui/styles";
import { Box, useTheme } from "@mui/system"

const useStyles = makeStyles(() => ({
    mainContainer: {
        width: '85%',
        margin: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
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
    // ACTION BUTTONS
    actionButtonContainer: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: '5em',
        marginBottom: '5em',
    },
    button: {
        borderRadius: '10px',
        padding: '15px 30px',
    },
}));

type ActionButtonsProps = {
    scrollToSearchSection: () => void;
    scrollToAddGuitarSection: () => void;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({ scrollToSearchSection, scrollToAddGuitarSection }) => {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile: Boolean = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Box sx={{ width: isMobile ? '75%' : '35%' }} className={classes.actionButtonContainer}>
            <Button onClick={scrollToSearchSection} disableElevation sx={{ backgroundColor: Colors.primaryBlue }} className={classes.button} variant="contained">Search</Button>
            <Button onClick={scrollToAddGuitarSection} disableElevation sx={{ backgroundColor: Colors.primaryOrange }} className={classes.button} variant="contained">Add</Button>
        </Box>
    );
}

export default ActionButtons;