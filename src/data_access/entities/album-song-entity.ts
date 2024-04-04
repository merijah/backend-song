import { Document, Schema } from "mongoose";

export interface IAlbumSong extends Document {
    albumId: {type: Schema.Types.ObjectId};
    songId: {type: Schema.Types.ObjectId};
}