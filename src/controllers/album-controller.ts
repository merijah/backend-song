import { AlbumModel } from "../data_access/schemas/album-schema";
import { AlbumSongModel } from "../data_access/schemas/album-song-schema";
import { SongModel } from "../data_access/schemas/song-schema";

exports.getAllAlbums = async (req: any, res: any,) => {
    const albums = await AlbumModel.find();

    res.status(200).json({
        status: "success",
        message: albums
    })
}

exports.getAlbumById = async (req: any, res: any) => {
    const { id } = req.params;
    const album = await AlbumModel.findById(id)

    res.status(200).json({
        status: "success",
        data: album
    })
}

exports.getAllSongsByAlbumId = async (req: any, res: any) => {
    const { albumId } = req.params;
    const albumSongs = await AlbumSongModel.find({albumId})
    const songIds = albumSongs.map(val => val.songId);

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

exports.createAlbum = async (req: any, res: any) => {
    const { duration, name, year } = req.body;

    const result = await AlbumModel.create({ duration, name, year })
    
    res.status(200).json({
        status: "success",
        data: result
    })
}

exports.assignSong = async (req: any, res: any) => {
    const { albumId } = req.params;
    const { songId } = req.body;

    const result = await AlbumSongModel.create({ albumId, songId })
    
    res.status(200).json({
        status: "success",
        data: result
    })
}

exports.removeSong = async (req: any, res: any) => {
    const { albumId } = req.params;
    const { songId } = req.body;

    const result = await AlbumSongModel.deleteOne({
        songId,
        albumId
    });

    res.status(201).json({
        status: "success",
        data: null
    })
}

exports.deleteAlbum = async (req: any, res: any) => {
    const { id } = req.params;

    const result = await AlbumModel.findByIdAndDelete(id);

    res.status(201).json({
        status: "success",
        data: null
    })
}

exports.updateAlbum = async (req: any, res: any) => {
    const { id } = req.params;

    const result = await AlbumModel.findByIdAndUpdate(id, req.body, { new: true});

    res.status(201).json({
        status: "success",
        data: result
    })
}
