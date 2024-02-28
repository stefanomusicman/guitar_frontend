import { Box } from "@mui/material";
import { ReactNode } from "react";

const mainContainer = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    alignItems: 'center',
    marginBottom: '6em'
}

type GeneralContainerProps = {
    children: ReactNode;
}

const MainContainer: React.FC<GeneralContainerProps> = ({ children }) => {
    return (
        <Box sx={mainContainer}>
            {children}
        </Box>
    );
}

export default MainContainer;