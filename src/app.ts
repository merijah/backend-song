
require('dotenv').config();
const express = require('express');
const cors = require("cors");
const artistRouter = require('./routes/artist-route');
import { NextFunction } from "express";

import { EndPoints } from "./constants/end-points";

const app = express();
app.use(express.json());
app.use(cors());

// routes
app.use(`${EndPoints.ARTISTS}`, artistRouter);

app.all("*", (req: Request, res: Response, next: NextFunction) => {
    next(new Error(`route ${req.url} not found ${404}`)); 
});

module.exports = app;


