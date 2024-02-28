import { Alert, Box, Button, CircularProgress, Typography } from "@mui/material";
import MainContainer from "../mainContainer";
import Colors from "@/app/colors";
import { FormEvent, useState } from "react";
import MainInformation from "./mainInfo";
import HardwareInfo from "./hardwareInfo";
import WoodInfo from "./woodInfo";
import AddGuitarValidation from "../../../../helpers/add_guitar_validation";

const headline = {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '1.5rem',
    marginBottom: '1em',
}

const buttonBox = {
    width: '85%',
    display: 'flex',
    justifyContent: 'end',
    alignItems: 'center',
}

const button = {
    borderRadius: '10px',
    padding: '10px 20px',
    backgroundColor: Colors.primaryBlue,
    fontFamily: 'Montserrat, sans-serif',
}

const AddGuitarSection = () => {
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

    // DATA TO CARRY OUT FORM SUBMISSION
    const [loading, setLoading] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState<Boolean>(false);
    const [errors, setError] = useState<boolean>(false);
    const [feedbackMessage, setFeedbackMessage] = useState<string>('');

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

    const clearFields = () => {
        setYear(0);
        setBrand('');
        setModel('');
        setNumFrets(0);
        setStainlessFrets('');
        setLockingTuners('');
        setBodyWood('');
        setNeckWood('');
        setFretboardWood('');
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            setError(false);
            setLoading(true);
            await AddGuitarValidation.handleFormSubmission(
                year,
                brand,
                model,
                numFrets,
                stainlessFrets,
                lockingTuners,
                bodyWood,
                neckWood,
                fretboardWood
            );
            setFeedbackMessage("Guitar has been added successfully!");
            clearFields();
        } catch (error: any) {
            setError(true);
            setFeedbackMessage(error.message);
        } finally {
            setLoading(false);
        }
        setFormSubmitted(true);
    }

    return (
        <MainContainer>
            <Typography variant="h6" sx={headline}><strong style={{ color: Colors.primaryOrange }}>Add</strong> a <strong style={{ color: Colors.primaryBlue }}>Guitar</strong> to our Directory!</Typography>
            <form
                style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                onSubmit={handleSubmit}>
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
                <Box sx={buttonBox}>
                    {loading && <CircularProgress />} {/* Show the loading spinner while registration is in progress */}
                    {!loading && formSubmitted && <Alert sx={{ margin: 'auto' }} severity={errors ? 'error' : 'success'}>{feedbackMessage}</Alert>}
                    <Button type="submit" sx={button} disableElevation variant="contained">Add Guitar</Button>
                </Box>
            </form>
        </MainContainer>
    );
}

export default AddGuitarSection;