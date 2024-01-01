'use client';
import { AuthProvider } from "@/auth/FirebaseContext";
import { Box, Button, Typography, useMediaQuery, useTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Colors from "./colors";

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
  },
  button: {
    borderRadius: '10px',
    padding: '15px 30px',
  },
}));

export default function Home() {
  const classes = useStyles();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const fontSize = isMobile ? '2rem' : '2.5rem';

  return (
    <AuthProvider>
      <Box className={classes.mainContainer}>
        {/* Headline Text */}
        <Box className={classes.headlineBox}>
          <Typography sx={{ fontSize: fontSize }} className={classes.headlineText}><strong style={{ color: '#1F75FE' }}>Search</strong> for a Guitar</Typography>
          <Typography sx={{ fontSize: fontSize }} className={classes.headlineText}><strong style={{ color: '#FF9F00' }}>Contribute</strong> and help grow the directory</Typography>
        </Box>
        {/* Action Buttons */}
        <Box sx={{ width: isMobile ? '75%' : '25%' }} className={classes.actionButtonContainer}>
          <Button disableElevation sx={{ backgroundColor: Colors.primaryBlue }} className={classes.button} variant="contained">Search</Button>
          <Button disableElevation sx={{ backgroundColor: Colors.primaryOrange }} className={classes.button} variant="contained">Add</Button>
        </Box>
      </Box>
    </AuthProvider>
  )
}
