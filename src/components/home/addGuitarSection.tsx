import { Grid, TextField, Typography } from "@mui/material";
import MainContainer from "./mainContainer";
import { makeStyles } from "@mui/styles";
import FormSectionContainer from "./formSectionContainer";

const useStyles = makeStyles(() => ({
    headline: {
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '1.5rem',
        marginBottom: '1em',
    },
    formColumn: {
        width: '85%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        alignItems: 'start',
    },
    formRow: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    formSectionTitle: {
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '1.3rem',
        marginBottom: '1em',
    },
    textField: {

    }
}));

const AddGuitarSection = () => {
    const classes = useStyles();

    return (
        <MainContainer>
            <Typography variant="h6" className={classes.headline}>Add a Guitar to our Directory!</Typography>
            <FormSectionContainer title="Main Information">
                <TextField
                    // value={searchTerm}
                    className={classes.textField}
                    // onChange={(e) => setSearchTerm(e.target.value)}
                    id="year"
                    label="Enter year"
                    variant="outlined"
                    InputProps={{ sx: { borderRadius: '10px' } }}
                />
                <TextField
                    // value={searchTerm}
                    className={classes.textField}
                    // onChange={(e) => setSearchTerm(e.target.value)}
                    id="brand"
                    label="Enter a brand"
                    variant="outlined"
                    InputProps={{ sx: { borderRadius: '10px' } }}
                />
                <TextField
                    // value={searchTerm}
                    className={classes.textField}
                    // onChange={(e) => setSearchTerm(e.target.value)}
                    id="model"
                    label="Enter a model"
                    variant="outlined"
                    InputProps={{ sx: { borderRadius: '10px' } }}
                />
            </FormSectionContainer>
        </MainContainer>
    );
}

export default AddGuitarSection;