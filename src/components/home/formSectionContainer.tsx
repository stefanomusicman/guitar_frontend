import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material"
import { ReactNode } from "react";

const formColumn = {
    width: '85%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    alignItems: 'start',
    marginBottom: '50px',
}

const formSectionTitle = {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '1.3rem',
    marginBottom: '1em',
}

type FormSectionContainerProps = {
    children: ReactNode;
    title: string;
}

const FormSectionContainer: React.FC<FormSectionContainerProps> = ({ children, title }) => {
    const theme = useTheme();
    const isMobile: Boolean = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Grid sx={formColumn}>
            <Typography sx={formSectionTitle}>{title}</Typography>
            <Grid sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                ...(isMobile && {
                    flexDirection: 'column',
                }),
            }}>
                {children}
            </Grid>
        </Grid>
    )
}

export default FormSectionContainer;