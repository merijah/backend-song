import { Document } from "mongoose";

export interface IArtist extends Document {
    // id?: string;
    firstName: string;
    lastName: string;
    about: string;
    country: string;
}