import { Autocomplete, TextField, Typography } from "@mui/material";
import MainContainer from "../mainContainer";
import { makeStyles } from "@mui/styles";
import FormSectionContainer from "../formSectionContainer";
import Colors from "@/app/colors";
import { useState } from "react";
import MainInformation from "./mainInfo";
import HardwareInfo from "./hardwareInfo";

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

    // STATE VARIABLES FOR FOR FORM FIELDS
    // MAIN INFORMATION
    const [year, setYear] = useState<Number>(0);
    const [brand, setBrand] = useState<String>('');
    const [model, setModel] = useState<String>('');
    // HARDWARE/FRET INFORMATION
    const [numFrets, setNumFrets] = useState<Number>(0);
    const [stainlessFrets, setStainlessFrets] = useState<String>('');
    const [lockingTuners, setLockingTuners] = useState<String>('');
    // WOOD INFORMATION
    const [bodyWood, setBodyWood] = useState<String>('');
    const [neckWood, setNeckWood] = useState<String>('');
    const [fretboardWood, setFretboardWood] = useState<String>('');

    const [formSubmitted, setFormSubmitted] = useState<Boolean>(false);

    // FUNCTIONS TO PASS INTO INDIVIDUAL COMPONENTS
    const handleSetYear = (year: Number) => setYear(year);
    const handleSetBrand = (brand: String) => setBrand(brand);
    const handleSetModel = (model: String) => setModel(model);
    const handleSetNumFrets = (num: Number) => setNumFrets(num);
    const handleSetSSFrets = (input: String) => setStainlessFrets(input);
    const handleSetTuners = (input: String) => setLockingTuners(input);
    const handleSetBodyWood = (wood: String) => setBodyWood(wood);
    const handleSetNeckWood = (wood: String) => setNeckWood(wood);
    const handleSetFretWood = (wood: String) => setFretboardWood(wood);

    const autoCompleteOptions = ['True', 'False'];
    const woodOptions = ['Maple', 'Rosewood', 'Cedar', 'Basswood', 'Ebony', 'Cocobolo', 'Mahogany', 'Alder', 'Bubinga'];

    return (
        <MainContainer>
            <Typography variant="h6" className={classes.headline}><strong style={{ color: Colors.primaryOrange }}>Add</strong> a <strong style={{ color: Colors.primaryBlue }}>Guitar</strong> to our Directory!</Typography>
            <MainInformation year={year} brand={brand} model={model} setYear={handleSetYear} setBrand={handleSetBrand} setModel={handleSetModel} />
            <HardwareInfo numFrets={numFrets} setLockingTuners={handleSetTuners} setNumFrets={handleSetNumFrets} setStainlessFrets={handleSetSSFrets} />
            {/* <FormSectionContainer title="Hardware/Fret Information">
                <TextField
                    // value={searchTerm}
                    // onChange={(e) => setSearchTerm(e.target.value)}
                    id="numFrets"
                    label="Enter Number of frets"
                    variant="outlined"
                    InputProps={{ sx: { borderRadius: '10px' } }} />
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
                            InputProps={{ ...params.InputProps, type: 'search', sx: { borderRadius: '10px' } }} />
                    )} />
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
                            InputProps={{ ...params.InputProps, type: 'search', sx: { borderRadius: '10px' } }} />
                    )} />
            </FormSectionContainer> */}
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