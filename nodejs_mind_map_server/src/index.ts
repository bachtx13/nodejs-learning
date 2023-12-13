import "reflect-metadata"
import {Request, Response} from "express";

import express from 'express';
import { port } from './configs';
import loader from './loaders';

const app = express();

loader(app).then(r => {
    app.listen(port, () => {
        console.log(`Server is running on ${port}`);
    });
});


export default app