import { Document } from "mongoose";

export interface IAlbum extends Document {
    duration: number;
    year: number;
    name: string;
}