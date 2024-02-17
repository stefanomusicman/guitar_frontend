import { Autocomplete, TextField } from "@mui/material";
import FormSectionContainer from "../formSectionContainer";

type MainInformationProps = {
    year: Number;
    brand: String;
    model: String;
    formSubmitted: Boolean;
    setYear: (year: Number) => void;
    setBrand: (brand: String) => void;
    setModel: (model: String) => void;
}

const MainInformation: React.FC<MainInformationProps> = ({ year, brand, model, formSubmitted, setYear, setBrand, setModel }) => {
    const yearOptions: String[] = [];

    const currentYear = new Date().getFullYear();
    for (let i = 1950; i < currentYear; i++) {
        yearOptions.push(String(i));
    }

    return (
        <FormSectionContainer title="Main Information">
            <Autocomplete
                options={yearOptions}
                onChange={(event, value) => setYear(Number(value))}
                renderInput={(params) => (
                    <TextField
                        value={year}
                        error={formSubmitted && year === 0}
                        helperText={formSubmitted && year === 0 ? 'Field cannot be empty' : ''}
                        sx={{ width: '200px' }}
                        {...params}
                        label="Year"
                        variant="outlined"
                        InputProps={{ ...params.InputProps, type: 'search', sx: { borderRadius: '10px' } }} />
                )} />
            <TextField
                value={brand}
                error={formSubmitted && brand === ''}
                helperText={formSubmitted && brand === '' ? 'Field cannot be empty' : ''}
                onChange={(e) => setBrand(e.target.value)}
                id="brand"
                label="Enter a brand"
                variant="outlined"
                InputProps={{ sx: { borderRadius: '10px' } }} />
            <TextField
                value={model}
                error={formSubmitted && model === ''}
                helperText={formSubmitted && model === '' ? 'Field cannot be empty' : ''}
                onChange={(e) => setModel(e.target.value)}
                id="model"
                label="Enter a model"
                variant="outlined"
                InputProps={{ sx: { borderRadius: '10px' } }} />
        </FormSectionContainer>
    );
}

export default MainInformation;