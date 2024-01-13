'use client';
import Colors from "@/app/colors";
import { Autocomplete, AutocompleteChangeDetails, AutocompleteChangeReason, Box, Button, Grid, TextField, useMediaQuery, useTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useEffect, useState } from "react";
import { Guitar } from "../../../types/guitar";

const useStyles = makeStyles((isMobile: boolean) => ({
    mainContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        alignItems: 'center',
    },
    formContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '50px',
    },
    formItem: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    label: {
        marginBottom: '50px',
        fontSize: '1.5rem',
        textAlign: 'center',
    },
    textField: {
        marginRight: isMobile ? '0px' : '15px',
    },
    dataList: {
        width: '200px',
        marginRight: isMobile ? '0px' : '15px',
    },
    button: {
        borderRadius: '10px',
        padding: '15px 30px',
        backgroundColor: Colors.primaryBlue,
    },
    resultsContainer: {
        width: '75vw',
        height: '75vh',
        backgroundColor: 'white',
        borderRadius: '10px',
    },
}));

const SearchSection = () => {

    const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [searchFilter, setSearchTermFilter] = useState<string | null>('');
    const [guitars, setGuitars] = useState<Guitar[]>([]);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const classes = useStyles(isMobile);
    const formWidth = isMobile ? '90%' : '45%';

    const options = ['Brand', 'Model'];

    const handleSearch = () => {
        const hasErrors = searchFilter === '' || searchFilter === null;
        // TODO: IMPLEMENT PROPER LOGIC FOR FORM HANDLING
        if (hasErrors) {
            console.log('error');
        } else {
            console.log('all good');
        }
        setFormSubmitted(true);
    }

    // TODO: CALL ON METHOD TO FETCH ALL GUITARS TO POPULATE THE GRID WHEN PAGE FIRST LOADS
    // useEffect(() {

    // }, []);

    return (
        <Box className={classes.mainContainer}>
            <label className={classes.label}>Try Searching for your favorite guitar by <strong style={{ color: Colors.primaryBlue }}>brand</strong> or <strong style={{ color: Colors.primaryOrange }}>model</strong></label>
            <Grid spacing={{ xs: 3 }} container className={classes.formContainer}>
                <Grid item className={classes.formItem} xs={12} md={4}>
                    {/* <input></input> */}
                    <TextField
                        value={searchTerm}
                        className={classes.textField}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        id="searchTerm"
                        label="Enter a brand or model"
                        variant="outlined"
                        InputProps={{ sx: { borderRadius: '10px' } }}
                    />
                </Grid>
                <Grid item className={classes.formItem} xs={12} md={4}>
                    <Autocomplete
                        options={options}
                        onChange={(event, value) => setSearchTermFilter(value)}
                        renderInput={(params) => (
                            <TextField
                                error={formSubmitted && searchFilter === ''}
                                helperText={formSubmitted && searchFilter === '' ? 'Field cannot be empty' : ''}
                                className={classes.dataList}
                                {...params}
                                label="Choose an option"
                                variant="outlined"
                                InputProps={{ ...params.InputProps, type: 'search', sx: { borderRadius: '10px' } }}
                            />
                        )}
                    />
                </Grid>
                <Grid item className={classes.formItem} xs={12} md={4}>
                    <Button onClick={handleSearch} disableElevation className={classes.button} variant="contained">Search</Button>
                </Grid>
            </Grid>
            {/* Grid that will show all the results */}
            <Grid container className={classes.resultsContainer}>

            </Grid>
        </Box>
    );
}

export default SearchSection;