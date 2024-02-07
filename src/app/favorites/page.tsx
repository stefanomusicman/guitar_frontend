'use client';
import { useAuthContext } from "@/auth/useAuthContext";
import GeneralContainer from "@/components/generalContainer"
import { Button } from "@mui/material"

const Favorites = () => {
    const { fetchFirebaseFavorites } = useAuthContext();
    const favoritesArray = fetchFirebaseFavorites();

    return (
        <GeneralContainer>
            <Button onClick={() => console.log(favoritesArray)}>Click here</Button>
        </GeneralContainer>
    );
}

export default Favorites;