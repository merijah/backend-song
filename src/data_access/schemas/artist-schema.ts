import mongoose, { Schema, model } from 'mongoose';
import { IArtist } from '../entities/artist-entity';
import { albumSchema } from './album-schema';

const artistSchema = new Schema<IArtist>({
    firstName: {
        type: String,
        // required: [true, "first name is mandatory field"],
    },
    lastName: {
        type: String,
        // required: [true, "last name is mandatory field"],
    },
    about: {
        type: String,
        // required: [true, "about is mandatory field"],
    },
    country: {
        type: String,
        // required: [true, "country name is mandatory field"],
    },
    },);

export const ArtistModel = mongoose.model('artists', artistSchema); 