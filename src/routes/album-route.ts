const express = require('express');
const albumController = require('../controllers/album-controller');

const AlbumRouter = express.Router();

AlbumRouter
    .route(`/`)
    .get(albumController.getAllAlbums)
    .post(albumController.createAlbum)

AlbumRouter
    .route('/:id')
    .get(albumController.getAlbumById)
    .delete(albumController.deleteAlbum)
    .patch(albumController.updateAlbum)

AlbumRouter
    .route(`/:albumId/songs`)
    .get(albumController.getAllSongsByAlbumId)
    .post(albumController.assignSong)

module.exports = AlbumRouter;