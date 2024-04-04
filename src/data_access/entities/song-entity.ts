import { Document } from "mongoose";
import { IAlbum } from "./album-entity";

export interface ISong extends Document {
    title: string;
    duration: number;
    year: number;
    author: string;
}