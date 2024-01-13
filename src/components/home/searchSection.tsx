'use client';
import Colors from "@/app/colors";
import { Autocomplete, Box, Button, Grid, TextField, useMediaQuery, useTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";

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
}));

const SearchSection = () => {

    const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
    const [searchTerm, setSearchTerm] = useState<string>('');

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const classes = useStyles(isMobile);
    const formWidth = isMobile ? '90%' : '45%';

    const options = ['Brand', 'Model'];

    return (
        <Box className={classes.mainContainer}>
            <label className={classes.label}>Try Searching for your favorite guitar by <strong style={{ color: Colors.primaryBlue }}>brand</strong> or <strong style={{ color: Colors.primaryOrange }}>model</strong></label>
            <Grid spacing={{ xs: 3 }} container className={classes.formContainer}>
                <Grid item className={classes.formItem} xs={12} md={4}>
                    <TextField
                        value={searchTerm}
                        type="text"
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
                        renderInput={(params) => (
                            <TextField
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
                    <Button disableElevation className={classes.button} variant="contained">Search</Button>
                </Grid>
            </Grid>
        </Box>
    );
}

export default SearchSection;