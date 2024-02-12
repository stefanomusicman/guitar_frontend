import { Autocomplete, TextField } from "@mui/material";
import FormSectionContainer from "../formSectionContainer";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
    dataList: {
        width: '200px',
        // marginRight: isMobile ? '0px' : '15px',
    },
}));

type MainInfoProps = {
    numFrets: Number;
    setNumFrets: (num: Number) => void;
    setStainlessFrets: (input: String) => void;
    setLockingTuners: (input: String) => void;
}

const HardwareInfo: React.FC<MainInfoProps> = ({ numFrets, setNumFrets, setLockingTuners, setStainlessFrets }) => {
    const classes = useStyles();

    const autoCompleteOptions = ['True', 'False'];

    return (
        <FormSectionContainer title="Hardware/Fret Information">
            <TextField
                value={numFrets}
                onChange={(e) => setNumFrets(Number(e.target.value))}
                id="numFrets"
                label="Enter Number of frets"
                variant="outlined"
                InputProps={{ sx: { borderRadius: '10px' } }} />
            <Autocomplete
                options={autoCompleteOptions}
                onChange={(event, value) => setStainlessFrets(value as String)}
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
                onChange={(event, value) => setLockingTuners(value as String)}
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
        </FormSectionContainer>
    );
}

export default HardwareInfo;