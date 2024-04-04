import mongoose, { Schema } from 'mongoose';
import { IAlbumSong } from '../entities/album-song-entity';

const albumSongSchema = new Schema<IAlbumSong>({
    albumId: {type: Schema.Types.ObjectId},
    songId: {type: Schema.Types.ObjectId}
    },);

export const AlbumSongModel = mongoose.model('album-song', albumSongSchema); 