import { ArtistModel } from "../data_access/schemas/artist-schema";

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

exports.createArtist = async (req: any, res: any) => {
    const { firstName, lastName, about, country } = req.body;

    const result = await ArtistModel.create({ firstName, lastName, about, country })
    
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

exports.updateArtist = async (req: any, res: any) => {
    const { id } = req.params;

    const result = await ArtistModel.findByIdAndUpdate(id, req.body, { new: true});

    res.status(201).json({
        status: "success",
        data: result
    })
}
