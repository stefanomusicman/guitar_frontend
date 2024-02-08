'use client';
import { useAuthContext } from "@/auth/useAuthContext";
import GeneralContainer from "@/components/generalContainer"
import { Button, Typography } from "@mui/material"
import { useEffect, useState } from "react";
import { Guitar } from "../../../types/guitar";
import GuitarAPI from "../../../helpers/guitar_api_functions";

const Favorites = () => {
    const { fetchFirebaseFavorites } = useAuthContext();

    const [favorites, setFavorites] = useState<Guitar[]>([]);

    const handleTest = () => {
        console.log(favorites);
    }

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
            <Typography>Your Favorites</Typography>
            <Button onClick={handleTest}>Click here</Button>
        </GeneralContainer>
    );
}

export default Favorites;