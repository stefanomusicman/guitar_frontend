'use client';
import { useAuthContext } from "@/auth/useAuthContext";
import GeneralContainer from "@/components/generalContainer"
import { Button } from "@mui/material"
import { useState } from "react";
import { Guitar } from "../../../types/guitar";
import GuitarAPI from "../../../helpers/guitar_api_functions";

const Favorites = () => {
    const { fetchFirebaseFavorites } = useAuthContext();
    const favoritesArray = fetchFirebaseFavorites();

    const [favorites, setFavorites] = useState<Guitar[]>([]);

    const handleTest = async () => {
        const guitar = await GuitarAPI.fetchById("655440104c50c58fe07ea094");
        console.log(guitar);

    }

    return (
        <GeneralContainer>
            <Button onClick={handleTest}>Click here</Button>
        </GeneralContainer>
    );
}

export default Favorites;