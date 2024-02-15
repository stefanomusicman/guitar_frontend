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
    formSubmitted: Boolean;
    numFrets: Number;
    stainlessFrets: String;
    lockingTuners: String;
    setNumFrets: (num: Number) => void;
    setStainlessFrets: (input: String) => void;
    setLockingTuners: (input: String) => void;
}

const HardwareInfo: React.FC<MainInfoProps> = ({ formSubmitted, numFrets, stainlessFrets, lockingTuners, setNumFrets, setLockingTuners, setStainlessFrets }) => {
    const classes = useStyles();

    const autoCompleteOptions = ['True', 'False'];
    const fretOptions = ['22', '24'];

    return (
        <FormSectionContainer title="Hardware/Fret Information">
            <Autocomplete
                options={fretOptions}
                onChange={(event, value) => setNumFrets(Number(value))}
                renderInput={(params) => (
                    <TextField
                        value={numFrets}
                        error={formSubmitted && numFrets === 0}
                        helperText={formSubmitted && numFrets === 0 ? 'Field cannot be empty' : ''}
                        className={classes.dataList}
                        {...params}
                        label="Number of Frets"
                        variant="outlined"
                        InputProps={{ ...params.InputProps, type: 'search', sx: { borderRadius: '10px' } }} />
                )} />
            <Autocomplete
                options={autoCompleteOptions}
                onChange={(event, value) => setStainlessFrets(value as String)}
                renderInput={(params) => (
                    <TextField
                        value={stainlessFrets}
                        error={formSubmitted && stainlessFrets === ''}
                        helperText={formSubmitted && stainlessFrets === '' ? 'Field cannot be empty' : ''}
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
                        value={lockingTuners}
                        error={formSubmitted && lockingTuners === ''}
                        helperText={formSubmitted && lockingTuners === '' ? 'Field cannot be empty' : ''}
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