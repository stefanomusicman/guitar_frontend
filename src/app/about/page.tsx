'use client';
import GeneralContainer from "@/components/generalContainer"
import { Box, Grid, useMediaQuery, useTheme } from "@mui/material"
import { makeStyles } from "@mui/styles";
import PeopleIcon from '@mui/icons-material/People';
import MenuBookIcon from '@mui/icons-material/MenuBook';

const useStyles = makeStyles(() => ({

}));

const About = () => {
    const classes = useStyles();

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const containerWidth = isMobile ? '90%' : '45%';

    return (
        <GeneralContainer>
            <Box sx={{ width: containerWidth }}>
                {/* Grid for the Icons */}
                <Grid container>

                </Grid>
                {/* Container for the text */}
                <Box>

                </Box>
            </Box>
        </GeneralContainer>
    )
}

export default About;