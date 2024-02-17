import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material"
import { makeStyles } from "@mui/styles"
import { ReactNode } from "react";

const useStyles = makeStyles(() => ({
    formColumn: {
        width: '85%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        alignItems: 'start',
        marginBottom: '50px',
    },
    formRow: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    formRowMobile: {
        flexDirection: 'column',
    },
    formSectionTitle: {
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '1.3rem',
        marginBottom: '1em',
    },
}));

type FormSectionContainerProps = {
    children: ReactNode;
    title: string;
}

const FormSectionContainer: React.FC<FormSectionContainerProps> = ({ children, title }) => {
    const theme = useTheme();
    const isMobile: Boolean = useMediaQuery(theme.breakpoints.down('md'));
    const classes = useStyles();

    return (
        <Grid className={classes.formColumn}>
            <Typography className={classes.formSectionTitle}>{title}</Typography>
            <Grid className={`${classes.formRow} ${isMobile ? classes.formRowMobile : ''}`}>
                {children}
            </Grid>
        </Grid>
    )
}

export default FormSectionContainer;