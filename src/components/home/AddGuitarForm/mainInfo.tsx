import { TextField } from "@mui/material";
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
    return (
        <FormSectionContainer title="Main Information">
            <TextField
                value={year}
                error={formSubmitted && year === 0}
                helperText={formSubmitted && year === 0 ? 'Field cannot be 0' : ''}
                onChange={(e) => setYear(Number(e.target.value))}
                id="year"
                label="Enter year"
                variant="outlined"
                InputProps={{ sx: { borderRadius: '10px' } }} />
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