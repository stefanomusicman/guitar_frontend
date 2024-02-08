import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ReactNode } from "react";

const useStyles = makeStyles(() => ({
    mainContainer: {
        width: '100%',
        height: '90%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }
}));

type GeneralContainerProps = {
    children: ReactNode;
}

const GeneralContainer: React.FC<GeneralContainerProps> = ({ children }) => {
    const classes = useStyles();

    return (
        <Box className={classes.mainContainer}>
            {children}
        </Box>
    );
}

export default GeneralContainer;