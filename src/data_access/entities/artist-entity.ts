import { Document } from "mongoose";
import { IAlbum } from "./album-entity";

export interface IArtist extends Document {
    firstName: string;
    lastName: string;
    about: string;
    country: string;
    albums: IAlbum[];
}