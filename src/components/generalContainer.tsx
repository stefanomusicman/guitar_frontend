'use client';
import { Box } from "@mui/material";
import { ReactNode } from "react";

type GeneralContainerProps = {
    children: ReactNode;
}

const GeneralContainer: React.FC<GeneralContainerProps> = ({ children }) => {
    return (
        <Box sx={{
            width: '100%',
            height: '90%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            {children}
        </Box>
    );
}

export default GeneralContainer;