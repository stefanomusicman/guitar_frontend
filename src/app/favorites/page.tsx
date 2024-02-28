'use client';
import GeneralContainer from "@/components/generalContainer"
import { Typography } from "@mui/material"
import GuitarGrid from "@/components/guitarGrid";
import useFetchFavorites from "@/hooks/useFetchFavorites";

const Favorites = () => {
    const favorites = useFetchFavorites();

    return (
        <GeneralContainer>
            <Typography
                sx={{
                    fontWeight: 'bold',
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '2rem',
                    marginBottom: '30px',
                }}>
                Your Favorites
            </Typography>
            <GuitarGrid guitars={favorites} />
        </GeneralContainer>
    );
}

export default Favorites;