import { AlbumArtistModel } from "../data_access/schemas/album-artist-schema";
import { AlbumModel } from "../data_access/schemas/album-schema";
import { ArtistModel } from "../data_access/schemas/artist-schema";
import { SongModel } from "../data_access/schemas/song-schema";

exports.getAllSongs = async (req: any, res: any,) => {
    const songs = await SongModel.find();

    res.status(200).json({
        status: "success",
        message: songs
    })
}

exports.getSongById = async (req: any, res: any) => {
    const { id } = req.params;
    const song = await SongModel.findById(id)

    res.status(200).json({
        status: "success",
        data: song
    })
}

// exports.getAlbumsByArtistId = async (req: any, res: any) => {
//     const { artistId } = req.params;
    
//     const albumIds = await AlbumArtistModel.find({ artistId }).select('albumId').exec();
//     const ids = albumIds.map((val: any) => val.albumId );

//     const albums = await AlbumModel.find({
//         _id: {
//             $in: ids
//         }
//     });

//     res.status(200).json({
//         status: "success",
//         data: albums
//     })
// }

exports.createSong = async (req: any, res: any) => {
    const { title, duration, year, author } = req.body;

    const result = await SongModel.create({ title, duration, year, author })
    
    res.status(200).json({
        status: "success",
        data: result
    })
}

// exports.assignAlbum = async (req: any, res: any) => {
//     const { artistId } = req.params;
//     const { albumId } = req.body;

//     const result = await AlbumArtistModel.create({ artistId, albumId })
    
//     res.status(200).json({
//         status: "success",
//         data: result
//     })
// }

exports.deleteSong = async (req: any, res: any) => {
    const { id } = req.params;

    await SongModel.findByIdAndDelete(id);

    res.status(201).json({
        status: "success",
        data: null
    })
}

exports.updateSong = async (req: any, res: any) => {
    const { id } = req.params;

    const result = await SongModel.findByIdAndUpdate(id, req.body, { new: true});

    res.status(201).json({
        status: "success",
        data: result
    })
}
