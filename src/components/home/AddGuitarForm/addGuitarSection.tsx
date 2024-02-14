import { Box, Button, Typography } from "@mui/material";
import MainContainer from "../mainContainer";
import { makeStyles } from "@mui/styles";
import Colors from "@/app/colors";
import { useState } from "react";
import MainInformation from "./mainInfo";
import HardwareInfo from "./hardwareInfo";
import WoodInfo from "./woodInfo";

const useStyles = makeStyles(() => ({
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

    const handleSubmit = () => {
        setFormSubmitted(true);
        console.log('Year: ', year);
        console.log('Brand: ', brand);
        console.log('Model: ', model);
        console.log('Number of frets: ', numFrets);
        console.log('Stainless Steel Frets: ', stainlessFrets);
        console.log('Locking Tuners: ', lockingTuners);
        console.log('Body Wood: ', bodyWood);
        console.log('Neck Wood: ', neckWood);
        console.log('Fret Wood: ', fretboardWood);
    }

    return (
        <MainContainer>
            <Typography variant="h6" className={classes.headline}><strong style={{ color: Colors.primaryOrange }}>Add</strong> a <strong style={{ color: Colors.primaryBlue }}>Guitar</strong> to our Directory!</Typography>
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
                <Button onClick={handleSubmit} type="submit" className={classes.button} disableElevation variant="contained">Add Guitar</Button>
            </Box>
        </MainContainer>
    );
}

export default AddGuitarSection;