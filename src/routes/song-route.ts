const express = require('express');
const songController = require('../controllers/song-controller');

const SongRouter = express.Router();

SongRouter
    .route(`/`)
    .get(songController.getAllSongs)
    .post(songController.createSong)

SongRouter
    .route('/:id')
    .get(songController.getSongById)
    .delete(songController.deleteSong)
    .patch(songController.updateSong)

module.exports = SongRouter;
