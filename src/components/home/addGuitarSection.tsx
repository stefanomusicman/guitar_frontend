import { Autocomplete, TextField, Typography } from "@mui/material";
import MainContainer from "./mainContainer";
import { makeStyles } from "@mui/styles";
import FormSectionContainer from "./formSectionContainer";
import Colors from "@/app/colors";

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
    dataList: {
        width: '200px',
        // marginRight: isMobile ? '0px' : '15px',
    },
}));

const AddGuitarSection = () => {
    const classes = useStyles();

    const autoCompleteOptions = ['True', 'False'];
    const woodOptions = ['Maple', 'Rosewood', 'Cedar', 'Basswood', 'Ebony', 'Cocobolo', 'Mahogany', 'Alder', 'Bubinga'];

    return (
        <MainContainer>
            <Typography variant="h6" className={classes.headline}><strong style={{ color: Colors.primaryOrange }}>Add</strong> a <strong style={{ color: Colors.primaryBlue }}>Guitar</strong> to our Directory!</Typography>
            <FormSectionContainer title="Main Information">
                <TextField
                    // value={searchTerm}
                    // onChange={(e) => setSearchTerm(e.target.value)}
                    id="year"
                    label="Enter year"
                    variant="outlined"
                    InputProps={{ sx: { borderRadius: '10px' } }}
                />
                <TextField
                    // value={searchTerm}
                    // onChange={(e) => setSearchTerm(e.target.value)}
                    id="brand"
                    label="Enter a brand"
                    variant="outlined"
                    InputProps={{ sx: { borderRadius: '10px' } }}
                />
                <TextField
                    // value={searchTerm}
                    // onChange={(e) => setSearchTerm(e.target.value)}
                    id="model"
                    label="Enter a model"
                    variant="outlined"
                    InputProps={{ sx: { borderRadius: '10px' } }}
                />
            </FormSectionContainer>
            <FormSectionContainer title="Hardware/Fret Information">
                <TextField
                    // value={searchTerm}
                    // onChange={(e) => setSearchTerm(e.target.value)}
                    id="numFrets"
                    label="Enter Number of frets"
                    variant="outlined"
                    InputProps={{ sx: { borderRadius: '10px' } }}
                />
                <Autocomplete
                    options={autoCompleteOptions}
                    // onChange={(event, value) => setSearchTermFilter(value)}
                    renderInput={(params) => (
                        <TextField
                            // error={formSubmitted && searchFilter === ''}
                            // helperText={formSubmitted && searchFilter === '' ? 'Field cannot be empty' : ''}
                            className={classes.dataList}
                            {...params}
                            label="Stainless Steel Frets"
                            variant="outlined"
                            InputProps={{ ...params.InputProps, type: 'search', sx: { borderRadius: '10px' } }}
                        />
                    )}
                />
                <Autocomplete
                    options={autoCompleteOptions}
                    // onChange={(event, value) => setSearchTermFilter(value)}
                    renderInput={(params) => (
                        <TextField
                            // error={formSubmitted && searchFilter === ''}
                            // helperText={formSubmitted && searchFilter === '' ? 'Field cannot be empty' : ''}
                            className={classes.dataList}
                            {...params}
                            label="Locking Tuners"
                            variant="outlined"
                            InputProps={{ ...params.InputProps, type: 'search', sx: { borderRadius: '10px' } }}
                        />
                    )}
                />
            </FormSectionContainer>
            <FormSectionContainer title="Wood">
                <Autocomplete
                    options={woodOptions}
                    // onChange={(event, value) => setSearchTermFilter(value)}
                    renderInput={(params) => (
                        <TextField
                            // error={formSubmitted && searchFilter === ''}
                            // helperText={formSubmitted && searchFilter === '' ? 'Field cannot be empty' : ''}
                            className={classes.dataList}
                            {...params}
                            label="Body"
                            variant="outlined"
                            InputProps={{ ...params.InputProps, type: 'search', sx: { borderRadius: '10px' } }}
                        />
                    )}
                />
                <Autocomplete
                    options={woodOptions}
                    // onChange={(event, value) => setSearchTermFilter(value)}
                    renderInput={(params) => (
                        <TextField
                            // error={formSubmitted && searchFilter === ''}
                            // helperText={formSubmitted && searchFilter === '' ? 'Field cannot be empty' : ''}
                            className={classes.dataList}
                            {...params}
                            label="Neck"
                            variant="outlined"
                            InputProps={{ ...params.InputProps, type: 'search', sx: { borderRadius: '10px' } }}
                        />
                    )}
                />
                <Autocomplete
                    options={woodOptions}
                    // onChange={(event, value) => setSearchTermFilter(value)}
                    renderInput={(params) => (
                        <TextField
                            // error={formSubmitted && searchFilter === ''}
                            // helperText={formSubmitted && searchFilter === '' ? 'Field cannot be empty' : ''}
                            className={classes.dataList}
                            {...params}
                            label="Fretboard"
                            variant="outlined"
                            InputProps={{ ...params.InputProps, type: 'search', sx: { borderRadius: '10px' } }}
                        />
                    )}
                />
            </FormSectionContainer>
        </MainContainer>
    );
}

export default AddGuitarSection;