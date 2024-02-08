'use client';
import GeneralContainer from "@/components/generalContainer"
import { Typography } from "@mui/material"
import GuitarGrid from "@/components/guitarGrid";
import { makeStyles } from "@mui/styles";
import useFetchFavorites from "@/hooks/useFetchFavorites";

const useStyles = makeStyles(() => ({
    text: {
        fontWeight: 'bold',
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '2rem',
        marginBottom: '30px',
    }
}));

const Favorites = () => {
    const classes = useStyles();

    const favorites = useFetchFavorites();

    return (
        <GeneralContainer>
            <Typography className={classes.text}>Your Favorites</Typography>
            <GuitarGrid guitars={favorites} />
        </GeneralContainer>
    );
}

export default Favorites;