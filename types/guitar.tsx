import { Wood } from "./wood"

export type Guitar = {
    year: Number
    brand: String
    model: String
    num_frets: Number
    ss_frets: Boolean
    uid: String
    wood: Wood
    locking_tuners: Boolean
}