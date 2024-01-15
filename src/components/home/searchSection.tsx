'use client';
import Colors from "@/app/colors";
import { Autocomplete, AutocompleteChangeDetails, AutocompleteChangeReason, Box, Button, Card, CardContent, Grid, TextField, Typography, useMediaQuery, useTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Key, useEffect, useState } from "react";
import { Guitar } from "../../../types/guitar";
import GuitarAPI from "../../../helpers/guitar_api_functions";
import GuitarGrid from "../guitarGrid";

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
        display: 'flex',
        overflowX: 'auto',
        padding: '10px',
    },
    card: {
        height: '17em',
        width: '17em',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '10px',
        borderRadius: '10px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    },
    cardText: {
        fontFamily: 'Montserrat, sans-serif',
        textAlign: 'center',
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
        if (hasErrors) {
            console.log('error');
        } else {
            const fetchData = async () => {
                const res = searchFilter === "Brand" ? await GuitarAPI.searchByBrand(searchTerm) : await GuitarAPI.searchByModel(searchTerm);
                setGuitars(res);
            }
            fetchData();
        }
        setFormSubmitted(true);
    }

    useEffect(() => {
        const fetchData = async () => {
            const res = await GuitarAPI.fetchGuitars();
            setGuitars(res);
        };

        fetchData();
    }, []);

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
                <Grid item className={classes.formItem} xs={12} sm={6} md={3}>
                    <Button onClick={handleSearch} disableElevation className={classes.button} variant="contained">Search</Button>
                </Grid>
            </Grid>
            {/* Grid that will show all the results */}
            <GuitarGrid guitars={guitars} />
        </Box>
    );
}

export default SearchSection;