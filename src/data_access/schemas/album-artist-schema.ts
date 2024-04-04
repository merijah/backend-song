import mongoose, { Schema } from 'mongoose';
import { IAlbumArtist } from '../entities/album-artist-entity';

const albumArtistSchema = new Schema<IAlbumArtist>({
    albumId: {type: Schema.Types.ObjectId},
    artistId: {type: Schema.Types.ObjectId}
    },);

export const AlbumArtistModel = mongoose.model('album-artist', albumArtistSchema); 