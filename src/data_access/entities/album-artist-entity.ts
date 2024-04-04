import { Document, Schema } from "mongoose";

export interface IAlbumArtist extends Document {
    albumId: {type: Schema.Types.ObjectId};
    artistId: {type: Schema.Types.ObjectId};
}