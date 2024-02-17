import { Autocomplete, TextField } from "@mui/material";
import FormSectionContainer from "../formSectionContainer";

type WoodInfoProps = {
    formSubmitted: Boolean;
    bodyWood: String;
    neckWood: String;
    fretWood: String;
    setBodyWood: (wood: String) => void;
    setNeckWood: (wood: String) => void;
    setFretWood: (wood: String) => void;
}

const WoodInfo: React.FC<WoodInfoProps> = ({ formSubmitted, bodyWood, neckWood, fretWood, setBodyWood, setFretWood, setNeckWood }) => {
    const woodOptions = ['Maple', 'Rosewood', 'Cedar', 'Basswood', 'Ebony', 'Cocobolo', 'Mahogany', 'Alder', 'Bubinga'];

    return (
        <FormSectionContainer title="Wood">
            <Autocomplete
                options={woodOptions}
                onChange={(event, value) => setBodyWood(value as String)}
                renderInput={(params) => (
                    <TextField
                        value={bodyWood}
                        error={formSubmitted && bodyWood === ''}
                        helperText={formSubmitted && bodyWood === '' ? 'Field cannot be empty' : ''}
                        sx={{ width: '200px' }}
                        {...params}
                        label="Body"
                        variant="outlined"
                        InputProps={{ ...params.InputProps, type: 'search', sx: { borderRadius: '10px' } }}
                    />
                )}
            />
            <Autocomplete
                options={woodOptions}
                onChange={(event, value) => setNeckWood(value as String)}
                renderInput={(params) => (
                    <TextField
                        value={neckWood}
                        error={formSubmitted && neckWood === ''}
                        helperText={formSubmitted && neckWood === '' ? 'Field cannot be empty' : ''}
                        sx={{ width: '200px' }}
                        {...params}
                        label="Neck"
                        variant="outlined"
                        InputProps={{ ...params.InputProps, type: 'search', sx: { borderRadius: '10px' } }}
                    />
                )}
            />
            <Autocomplete
                options={woodOptions}
                onChange={(event, value) => setFretWood(value as String)}
                renderInput={(params) => (
                    <TextField
                        value={fretWood}
                        error={formSubmitted && fretWood === ''}
                        helperText={formSubmitted && fretWood === '' ? 'Field cannot be empty' : ''}
                        sx={{ width: '200px' }}
                        {...params}
                        label="Fretboard"
                        variant="outlined"
                        InputProps={{ ...params.InputProps, type: 'search', sx: { borderRadius: '10px' } }}
                    />
                )}
            />
        </FormSectionContainer>
    );
}

export default WoodInfo;