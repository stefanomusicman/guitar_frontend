import { Box } from "@mui/material";
import { ReactNode } from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
    mainContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        alignItems: 'center',
    },
}));

type GeneralContainerProps = {
    children: ReactNode;
}

const MainContainer: React.FC<GeneralContainerProps> = ({ children }) => {
    const classes = useStyles();

    return (
        <Box className={classes.mainContainer}>
            {children}
        </Box>
    );
}

export default MainContainer;