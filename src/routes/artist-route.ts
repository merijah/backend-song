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

module.exports = ArtistRouter;
