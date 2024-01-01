'use client';
import { AuthProvider } from "@/auth/FirebaseContext";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  mainContainer: {
    width: '85%',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export default function Home() {
  const classes = useStyles()

  return (
    <AuthProvider>
      <Box className={classes.mainContainer}>

      </Box>
    </AuthProvider>
  )
}
