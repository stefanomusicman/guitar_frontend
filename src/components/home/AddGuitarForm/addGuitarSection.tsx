import { Alert, Box, Button, CircularProgress, Typography } from "@mui/material";
import MainContainer from "../mainContainer";
import { makeStyles } from "@mui/styles";
import Colors from "@/app/colors";
import { FormEvent, useState } from "react";
import MainInformation from "./mainInfo";
import HardwareInfo from "./hardwareInfo";
import WoodInfo from "./woodInfo";
import AddGuitarValidation from "../../../../helpers/add_guitar_validation";

const useStyles = makeStyles(() => ({
    form: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headline: {
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '1.5rem',
        marginBottom: '1em',
    },
    buttonBox: {
        width: '85%',
        display: 'flex',
        justifyContent: 'end',
        alignItems: 'center',
    },
    button: {
        borderRadius: '10px',
        padding: '10px 20px',
        backgroundColor: Colors.primaryBlue,
        fontFamily: 'Montserrat, sans-serif',
    },
}));

const AddGuitarSection = () => {
    const classes = useStyles();

    // STATE VARIABLES FOR FOR FORM FIELDS
    // MAIN INFORMATION
    const [year, setYear] = useState<number>(0);
    const [brand, setBrand] = useState<String>('');
    const [model, setModel] = useState<String>('');
    // HARDWARE/FRET INFORMATION
    const [numFrets, setNumFrets] = useState<number>(0);
    const [stainlessFrets, setStainlessFrets] = useState<String>('');
    const [lockingTuners, setLockingTuners] = useState<String>('');
    // WOOD INFORMATION
    const [bodyWood, setBodyWood] = useState<String>('');
    const [neckWood, setNeckWood] = useState<String>('');
    const [fretboardWood, setFretboardWood] = useState<String>('');

    // DATA TO CARRY OUT FORM SUBMISSION
    const [loading, setLoading] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState<Boolean>(false);
    const [errors, setError] = useState<boolean>(false);
    const [feedbackMessage, setFeedbackMessage] = useState<string>('');

    // FUNCTIONS TO PASS INTO INDIVIDUAL COMPONENTS
    const handleSetYear = (year: number) => setYear(year);
    const handleSetBrand = (brand: String) => setBrand(brand);
    const handleSetModel = (model: String) => setModel(model);
    const handleSetNumFrets = (num: number) => setNumFrets(num);
    const handleSetSSFrets = (input: String) => setStainlessFrets(input);
    const handleSetTuners = (input: String) => setLockingTuners(input);
    const handleSetBodyWood = (wood: String) => setBodyWood(wood);
    const handleSetNeckWood = (wood: String) => setNeckWood(wood);
    const handleSetFretWood = (wood: String) => setFretboardWood(wood);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // try {
        //     AddGuitarValidation.handleFormSubmission(
        //         year,
        //         brand,
        //         model,
        //         numFrets,
        //         stainlessFrets,
        //         lockingTuners,
        //         bodyWood,
        //         neckWood,
        //         fretboardWood
        //     );

        // }
    }

    return (
        <MainContainer>
            <Typography variant="h6" className={classes.headline}><strong style={{ color: Colors.primaryOrange }}>Add</strong> a <strong style={{ color: Colors.primaryBlue }}>Guitar</strong> to our Directory!</Typography>
            <form onClick={handleSubmit} className={classes.form}>
                <MainInformation
                    year={year}
                    brand={brand}
                    model={model}
                    formSubmitted={formSubmitted}
                    setYear={handleSetYear}
                    setBrand={handleSetBrand}
                    setModel={handleSetModel} />
                <HardwareInfo
                    formSubmitted={formSubmitted}
                    numFrets={numFrets}
                    stainlessFrets={stainlessFrets}
                    lockingTuners={lockingTuners}
                    setLockingTuners={handleSetTuners}
                    setNumFrets={handleSetNumFrets}
                    setStainlessFrets={handleSetSSFrets} />
                <WoodInfo
                    formSubmitted={formSubmitted}
                    bodyWood={bodyWood}
                    neckWood={neckWood}
                    fretWood={fretboardWood}
                    setBodyWood={handleSetBodyWood}
                    setFretWood={handleSetFretWood}
                    setNeckWood={handleSetNeckWood} />
                <Box className={classes.buttonBox}>
                    {loading && <CircularProgress />} {/* Show the loading spinner while registration is in progress */}
                    {!loading && formSubmitted && <Alert sx={{ margin: 'auto' }} severity={errors ? 'error' : 'success'}>{feedbackMessage}</Alert>}
                    <Button type="submit" className={classes.button} disableElevation variant="contained">Add Guitar</Button>
                </Box>
            </form>
        </MainContainer>
    );
}

export default AddGuitarSection;