import { AlbumArtistModel } from "../data_access/schemas/album-artist-schema";
import { AlbumModel } from "../data_access/schemas/album-schema";
import { AlbumSongModel } from "../data_access/schemas/album-song-schema";
import { ArtistModel } from "../data_access/schemas/artist-schema";
import { SongModel } from "../data_access/schemas/song-schema";

exports.getAllArtitsts = async (req: any, res: any,) => {
    const artists = await ArtistModel.find();

    res.status(200).json({
        status: "success",
        message: artists
    })
}

exports.getArtistById = async (req: any, res: any) => {
    const { id } = req.params;
    const artist = await ArtistModel.findById(id)

    res.status(200).json({
        status: "success",
        data: artist
    })
}

exports.getArtistByAlbumId = async (req: any, res: any) => {
    const { albumId } = req.params;
    
    const artist = await ArtistModel.findOne({albums: albumId });

    res.status(200).json({
        status: "success",
        data: artist
    })
}

exports.getAlbumsByArtistId = async (req: any, res: any) => {
    const { artistId } = req.params;
    
    const albumIds = await AlbumArtistModel.find({ artistId }).select('albumId').exec();
    const ids = albumIds.map((val: any) => val.albumId );
    const albums = await AlbumModel.find({
        _id: {
            $in: ids
        }
    });

    res.status(200).json({
        status: "success",
        data: albums
    })
}

exports.getSongsByArtistId = async (req: any, res: any) => {
    const { artistId } = req.params;
    
    const albumArtists = await AlbumArtistModel.find({ artistId }).select('albumId').exec();
    const albumIds = albumArtists.map((val: any) => val.albumId );

    const albumSongs = await AlbumSongModel.find({
        albumId: {
            $in: albumIds
        }
    })

    const songIds = albumSongs.map((val: any) => val.songId);

    const songs = await SongModel.find({
        _id: {
            $in: songIds
        }
    });

    res.status(200).json({
        status: "success",
        data: songs
    })
}

exports.createArtist = async (req: any, res: any) => {
    const { firstName, lastName, about, country } = req.body;

    const result = await ArtistModel.create({ firstName, lastName, about, country })
    
    res.status(200).json({
        status: "success",
        data: result
    })
}

exports.assignAlbum = async (req: any, res: any) => {
    const { artistId } = req.params;
    const { albumId } = req.body;

    const result = await AlbumArtistModel.create({ artistId, albumId })
    
    res.status(200).json({
        status: "success",
        data: result
    })
}

exports.deleteArtist = async (req: any, res: any) => {
    const { id } = req.params;

    const result = await ArtistModel.findByIdAndDelete(id);

    res.status(201).json({
        status: "success",
        data: null
    })
}

exports.removeAlbum = async (req: any, res: any) => {
    const { artistId } = req.params;
    const { albumId } = req.body;

    const result = await AlbumArtistModel.deleteOne({
        artistId,
        albumId
    });

    res.status(201).json({
        status: "success",
        data: null
    })
}

exports.updateArtist = async (req: any, res: any) => {
    const { id } = req.params;

    const result = await ArtistModel.findByIdAndUpdate(id, req.body, { new: true});

    res.status(201).json({
        status: "success",
        data: result
    })
}
