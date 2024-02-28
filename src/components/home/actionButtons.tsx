'use client';
import Colors from "@/app/colors";
import { Button, useMediaQuery } from "@mui/material"
import { Box, useTheme } from "@mui/system"

type ActionButtonsProps = {
    scrollToSearchSection: () => void;
    scrollToAddGuitarSection: () => void;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({ scrollToSearchSection, scrollToAddGuitarSection }) => {
    const theme = useTheme();
    const isMobile: Boolean = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Box
            sx={{
                width: isMobile ? '75%' : '35%', display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                marginTop: '5em',
                marginBottom: '5em',
            }}>
            <Button
                onClick={scrollToSearchSection}
                disableElevation
                sx={{
                    backgroundColor: Colors.primaryBlue, borderRadius: '10px',
                    padding: '15px 30px',
                }} variant="contained">
                Search
            </Button>
            <Button
                onClick={scrollToAddGuitarSection}
                disableElevation
                sx={{
                    backgroundColor: Colors.primaryOrange,
                    borderRadius: '10px',
                    padding: '15px 30px',
                }}
                variant="contained">
                Add
            </Button>
        </Box>
    );
}

export default ActionButtons;