import { Guitar } from "../types/guitar";

class GuitarAPI {
    private static baseURL: string = "http://127.0.0.1:5000/v0"

    // ADD A GUITAR
    static async addGuitar<T>(guitarData: Record<string, any>): Promise<T> {
        try {
            const response = await fetch(`${GuitarAPI.baseURL}/guitars/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(guitarData),
            });

            if (!response.ok) {
                throw new Error(`Request failed with status ${response.status}`);
            }

            const data = await response.json();
            return data as T;
        } catch (error: any) {
            console.error('API Request Error:', error.message);
            throw error;
        }
    }


    // FETCH ALL GUITARS
    static async fetchGuitars<T>(): Promise<Guitar[]> {
        try {
            const response = await fetch(`${GuitarAPI.baseURL}/guitars/`);

            if (!response.ok) {
                throw new Error(`Request failed with status ${response.status}`);
            }

            const data = await response.json();

            // Assuming your API returns an object with a 'guitars' property
            if (Array.isArray(data.guitars)) {
                return data.guitars as Guitar[];
            } else {
                console.error('Invalid API response:', data);
                throw new Error('Invalid API response');
            }
        } catch (error: any) {
            console.error('API Request Error:', error.message);
            throw error;
        }
    }

    // SEARCH BY BRAND
    static async searchByBrand<T>(brand: string): Promise<T> {
        try {
            const url = new URL(`${GuitarAPI.baseURL}/guitars/search-by-brand/${brand}`);

            const response = await fetch(url.toString(), {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error(`Request failed with status ${response.status}`);
            }

            const data = await response.json();
            return data as T;
        } catch (error: any) {
            console.error('API Request Error:', error.message);
            throw error;
        }
    }

    // SEARCH BY MODEL

    // FETCH A GUITAR BY ID
}

export default GuitarAPI;