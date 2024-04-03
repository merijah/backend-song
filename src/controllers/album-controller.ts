import { AlbumModel } from "../data_access/schemas/album-schema";

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

exports.createAlbum = async (req: any, res: any) => {
    const { duration, name, year } = req.body;

    const result = await AlbumModel.create({ duration, name, year })
    
    res.status(200).json({
        status: "success",
        data: result
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
