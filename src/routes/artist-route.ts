const express = require('express');

const artistController = require('../controllers/artist-controller');

const ArtistRouter = express.Router();
ArtistRouter
    .route(`/`)
    .get(artistController.getAllArtitsts)
    .post(artistController.createArtist)

ArtistRouter
    .route('/:id')
    .get(artistController.getArtistById)
    .delete(artistController.deleteArtist)
    .patch(artistController.updateArtist)

ArtistRouter
    .route('/:artistId/albums')
    .get(artistController.getAlbumsByArtistId)
    .post(artistController.assignAlbum)
    .delete(artistController.removeAlbum)

ArtistRouter
    .route('/:artistId/songs')
    .get(artistController.getSongsByArtistId)
    // .post(artistController.assignAlbum)

ArtistRouter
    .route('/albums/:albumId')
    .get(artistController.getArtistByAlbumId)


module.exports = ArtistRouter;
