import mongoose, { Schema, model } from 'mongoose';
import { albumSchema } from './album-schema';
import { ISong } from '../entities/song-entity';

const songSchema = new Schema<ISong>({
    title: String,
    duration: Number,
    year: Number,
    author: String
},);

export const SongModel = mongoose.model('songs', songSchema); 