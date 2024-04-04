import mongoose, { Schema, model } from 'mongoose';
import { albumSchema } from './album-schema';
import { ISong } from '../entities/song-entity';

const songSchema = new Schema<ISong>({
    title: {
        type: String,
    },
    duration: {
        type: Number,
    },
    year: {
        type: Number,
    },
    author: {
        type: String,
    },
    },);

export const SongModel = mongoose.model('songs', songSchema); 