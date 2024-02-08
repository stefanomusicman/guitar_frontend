import { useAuthContext } from "@/auth/useAuthContext";
import { useEffect, useState } from "react";
import { Guitar } from "../../types/guitar";
import GuitarAPI from "../../helpers/guitar_api_functions";

const useFetchFavorites = () => {
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

    return favorites;
}

export default useFetchFavorites;