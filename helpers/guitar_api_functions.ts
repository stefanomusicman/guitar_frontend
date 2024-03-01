import { Guitar } from "../types/guitar";

class GuitarAPI {
    private static baseURL = process.env.NEXT_PUBLIC_API_URL;

    // ADD A GUITAR
    static async addGuitar<T>(guitarData: Record<string, any>): Promise<T> {
        try {
            const response = await fetch(`${GuitarAPI.baseURL}/`, {
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
            const response = await fetch(`${GuitarAPI.baseURL}/`);

            if (!response.ok) {
                throw new Error(`Request failed with status ${response.status}`);
            }

            const data = await response.json();

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
    static async searchByBrand<T>(brand: string): Promise<Guitar[]> {
        try {
            const url = new URL(`${GuitarAPI.baseURL}/search-by-brand/${brand}`);

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

            if (Array.isArray(data.guitars)) {
                return data.guitars as Guitar[];
            } else {
                console.error('Invalid API response: ', data);
            }
        } catch (error: any) {
            console.error('API Request Error:', error.message);
        }

        return [];
    }

    // SEARCH BY MODEL
    static async searchByModel<T>(model: string): Promise<Guitar[]> {
        try {
            const url = new URL(`${GuitarAPI.baseURL}/search-by-model/${model}`);

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

            if (Array.isArray(data.guitars)) {
                return data.guitars as Guitar[];
            } else {
                console.error('Invalid API response: ', data);
            }
        } catch (error: any) {
            console.error('API Request Error: ', error.message);
        }

        return [];
    }

    // FETCH A GUITAR BY ID
    static async fetchById<T>(id: string): Promise<Guitar> {
        try {
            const url = new URL(`${GuitarAPI.baseURL}/${id}/`);

            const response = await fetch(url.toString(), {
                method: 'GET',
                headers: {
                    'Content-Type': 'text/plain',
                },
            });

            if (!response.ok) {
                throw new Error(`Request failed with status ${response.status}`);
            }

            const data = await response.json();

            if (data) {
                return data as Guitar;
            } else {
                console.error('Invalid API response: ', data);
            }
        } catch (error: any) {
            console.error('API Request Error: ', error.message);
        }

        return {
            brand: '',
            locking_tuners: false,
            model: '',
            num_frets: 0,
            ss_frets: false,
            uid: '',
            wood: {
                body: '',
                fretboard: '',
                neck: '',
            },
            year: 0,
        };
    }
}

export default GuitarAPI;