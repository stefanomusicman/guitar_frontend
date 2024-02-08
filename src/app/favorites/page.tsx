'use client';
import { useAuthContext } from "@/auth/useAuthContext";
import GeneralContainer from "@/components/generalContainer"
import { Typography } from "@mui/material"
import { useEffect, useState } from "react";
import { Guitar } from "../../../types/guitar";
import GuitarAPI from "../../../helpers/guitar_api_functions";
import GuitarGrid from "@/components/guitarGrid";
import { makeStyles } from "@mui/styles";

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

    const { fetchFirebaseFavorites } = useAuthContext();

    const [favorites, setFavorites] = useState<Guitar[]>([]);

    useEffect(() => {
        async function fetchFavorites() {
            const favoritesArray = await fetchFirebaseFavorites();
            const promises: Promise<Guitar>[] = favoritesArray.map((id: string) => GuitarAPI.fetchById(id));
            Promise.all(promises)
                .then((results) => {
                    setFavorites(results);
                })
                .catch((error) => {
                    console.log("Error fetching guitars: ", error);
                });
        }
        fetchFavorites();
    }, []);

    return (
        <GeneralContainer>
            <Typography className={classes.text}>Your Favorites</Typography>
            <GuitarGrid guitars={favorites} />
        </GeneralContainer>
    );
}

export default Favorites;