import { Typography } from "@mui/material";
import MainContainer from "./mainContainer";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
    headline: {
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '1.5rem',
        marginBottom: '1em',
    }
}));

const AddGuitarSection = () => {
    const classes = useStyles();

    return (
        <MainContainer>
            <Typography className={classes.headline}>Add a Guitar to our Directory!</Typography>
        </MainContainer>
    );
}

export default AddGuitarSection;