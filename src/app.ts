
require('dotenv').config();
const express = require('express');
const cors = require("cors");
const bodyParser = require("body-parser");
const artistRouter = require('./routes/artist-route');
const albumRouter = require('./routes/album-route');
const songRouter = require('./routes/song-route');

import { NextFunction } from "express";

import { EndPoints } from "./constants/end-points";

const app = express();
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}));
app.use(cors("*"));

// routes
app.use(`${EndPoints.ARTISTS}`, artistRouter);
app.use(`${EndPoints.ALBUMS}`, albumRouter);
app.use(`${EndPoints.SONGS}`, songRouter);

app.all("*", (req: Request, res: any) => {
    res.status(404).json({ message: `route ${req.url} not found ${404}`}); 
});

module.exports = app;


