import { Box, Card, CardContent, Grid, Typography, useMediaQuery, useTheme } from "@mui/material"
import Image, { StaticImageData } from "next/image";
// Image Logos
import gibsonLogo from '../../../public/gibson-logo.png';
import fenderLogo from '../../../public/fender-logo.png';
import godinLogo from '../../../public/godin-logo.png';
import prsLogo from '../../../public/prs-logo.png';
import suhrLogo from '../../../public/suhr-logo.png';
import { Key } from "react";

const mainContainer = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    marginBottom: '8em',
}

const card = {
    height: '5em',
    borderRadius: '15px',
    padding: '15px 15px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}

const text = {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '1.5rem',
    marginBottom: '1em',
}

const BrandGrid = () => {
    const theme = useTheme();
    const isDesktop: Boolean = useMediaQuery(theme.breakpoints.up('xl'));

    const pics: StaticImageData[] = [
        gibsonLogo,
        fenderLogo,
        godinLogo,
        prsLogo,
        suhrLogo,
    ];

    return (
        <Box sx={mainContainer}>
            <Typography variant="h6" sx={text}>Check out some of the top brands</Typography>
            <Grid container justifyContent={isDesktop ? 'space-between' : 'space-evenly'} spacing={{ xs: 3, sm: 4 }}>
                {pics.map((pic) => (
                    <Grid item key={pic.height as Key} xs={12} md={4} xl={2}>
                        <Card sx={card} elevation={0}>
                            <CardContent>
                                <Image src={pic} alt="Guitar brand logo" width={100} />
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default BrandGrid;