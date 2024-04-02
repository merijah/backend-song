
require('dotenv').config();
const express = require('express');
const artistRouter = require('./routes/artist-route');
import { NextFunction } from "express";

import { EndPoints } from "./constants/end-points";

const app = express();
app.use(express.json());
// routes
app.use(`${EndPoints.ARTISTS}`, artistRouter);

app.all("*", (req: Request, res: Response, next: NextFunction) => {
    next(new Error(`route ${req.url} not found ${404}`)); 
});

module.exports = app;


