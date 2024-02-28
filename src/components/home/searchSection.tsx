'use client';
import Colors from "@/app/colors";
import { Autocomplete, Box, Button, Grid, TextField, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import { Guitar } from "../../../types/guitar";
import GuitarAPI from "../../../helpers/guitar_api_functions";
import GuitarGrid from "../guitarGrid";
import MainContainer from "./mainContainer";

const formContainer = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '50px',
}

const formItem = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}

const label = {
    marginBottom: '50px',
    fontSize: '1.5rem',
    textAlign: 'center',
    fontFamily: 'Montserrat, sans-serif',
}

const button = {
    borderRadius: '10px',
    padding: '15px 30px',
    backgroundColor: Colors.primaryBlue,
}

const SearchSection = () => {

    const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [searchFilter, setSearchTermFilter] = useState<string | null>('');
    const [guitars, setGuitars] = useState<Guitar[]>([]);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
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
        <MainContainer>
            <Typography sx={label}>Try Searching for your favorite guitar by <strong style={{ color: Colors.primaryBlue }}>brand</strong> or <strong style={{ color: Colors.primaryOrange }}>model</strong></Typography>
            <Grid spacing={{ xs: 3 }} container sx={formContainer}>
                <Grid item sx={formItem} xs={12} md={4}>
                    {/* <input></input> */}
                    <TextField
                        value={searchTerm}
                        sx={{ marginRight: isMobile ? '0px' : '15px' }}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        id="searchTerm"
                        label="Enter a brand or model"
                        variant="outlined"
                        InputProps={{ sx: { borderRadius: '10px' } }}
                    />
                </Grid>
                <Grid item sx={formItem} xs={12} md={4}>
                    <Autocomplete
                        options={options}
                        onChange={(event, value) => setSearchTermFilter(value)}
                        renderInput={(params) => (
                            <TextField
                                error={formSubmitted && searchFilter === ''}
                                helperText={formSubmitted && searchFilter === '' ? 'Field cannot be empty' : ''}
                                sx={{
                                    width: '200px',
                                    marginRight: isMobile ? '0px' : '15px',
                                }}
                                {...params}
                                label="Choose an option"
                                variant="outlined"
                                InputProps={{ ...params.InputProps, type: 'search', sx: { borderRadius: '10px' } }}
                            />
                        )}
                    />
                </Grid>
                <Grid item sx={formItem} xs={12} sm={6} md={3}>
                    <Button onClick={handleSearch} disableElevation sx={button} variant="contained">Search</Button>
                </Grid>
            </Grid>
            {/* Grid that will show all the results */}
            <GuitarGrid guitars={guitars} />
        </MainContainer>
    );
}

export default SearchSection;