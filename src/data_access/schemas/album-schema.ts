import mongoose, { Schema, model } from 'mongoose';
import { IAlbum } from '../entities/album-entity';

const albumSchema = new Schema<IAlbum>({
    duration: {
        type: Number,
    },
    year: {
        type: Number,
    },
    name: {
        type: String,
    }
    },
    );

export const AlbumModel = mongoose.model('albums', albumSchema); 